import { PusherService } from './../../services/pusher.service';
import { CurrentUserService } from '@shared/services/current-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@shared/services/movies.service';
import { ReservationsService } from '@shared/services/reservations.service';
import { CinemasService } from './../../services/cinemas.service';
import { ShowtimesService } from './../../services/showtimes.service';
import { concat } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-booking-movie',
  templateUrl: './booking-movie.component.html',
  styleUrls: ['./booking-movie.component.scss'],
})
export class BookingMovieComponent implements OnInit {
  @ViewChild('paypal-button') demoInput: ElementRef;
  myForm: FormGroup;
  seats: any[];
  seatsSur = [
    [0, 1],
    [0, 2],
  ];
  seatSelected = [];
  id: any;
  cinema: any;
  movie: any;
  cinemas: any;
  showTime: any[];
  show: boolean;
  movieShowtime = [];
  price: number;
  tickets: number;
  currentUser: any;
  detailSeservations: any;
  reverse: any[];
  btnDisabled;
  seatBuy: any;
  seat: any;
  seatBought = [];
  likes: any;
  cost = '1';
  currency = 'INR';
  selectedCurrency = '0';
  currencies: any[] = [
    {
      value: '0',
      viewValue: 'Select Currency',
    },
    {
      value: 'USD',
      viewValue: 'US Dollar',
    },
  ];
  alert = false;

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private cinemasService: CinemasService,
    private showtimesService: ShowtimesService,
    private route: ActivatedRoute,
    private reservationsService: ReservationsService,
    private snack: MatSnackBar,
    private currentUserService: CurrentUserService,
    private pusherService: PusherService
  ) {
    this.myForm = fb.group({
      cinema: [null],
      day: [null],
      time: [null],
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  ngOnInit(): void {
    this.currentUserService.user$.subscribe((user) => {
      this.currentUser = user;
    });
    this.id = this.route.snapshot.params.id;
    this.getMovie();
    this.getCinema();
    this.getShowTime();
    this.getReverse();
    this.alert = true;
    this.pusherService.channel.bind('new-like', (data) => {
      setTimeout(() => {
        this.likes = data.likes;
        this.likes.seats.forEach((element) => {
          return this.snack.open(
            `Seating tickets row ${element[0] + 1} column ${
              element[1] + 1
            } have been sold`,
            'x',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
            }
          );
        });
        if (this.alert) {
          this.getReverse().subscribe();
        }
      }, 300);
    });
    this.loadExternalScript('https://www.paypalobjects.com/api/checkout.js');
  }

  selectSeat(item: any): void {
    const hash = {};
    if (!this.seatSelected.every((a) => a.toString() != item.toString())) {
      const index = this.seatSelected.findIndex(
        (x) => x[0] === item[0] && x[1] === item[1]
      );
      this.seatSelected.splice(index, 1);
    } else {
      this.seatSelected.push(item);
    }
    this.tickets = this.seatSelected.length;
    this.price = this.tickets * this.myForm.get('cinema').value?.ticketPrice;
  }

  selectedSeat(item) {
    const hash = {};
    for (var i = 0; i < this.seatSelected.length; i += 1) {
      hash[this.seatSelected[i]] = i;
      if (hash.hasOwnProperty(item)) {
        return 'active';
      }
    }
  }

  getCinema() {
    this.cinemasService.getAllCinemas().subscribe((res) => {
      this.cinemas = res;
    });
  }

  getMovie() {
    this.moviesService
      .getCinemaById(this.id)
      .subscribe((res) => (this.movie = res));
  }

  getShowTime() {
    this.showtimesService.getShowTimes().subscribe((res: any[]) => {
      this.showTime = res.filter((x) => {
        return (
          x.movieId === this.movie?._id &&
          x.cinemaId === this.myForm.get('cinema').value?._id &&
          Date.parse(x.startDate) === Date.parse(this.myForm.get('day').value)
        );
      });

      this.movieShowtime = res.filter((x) => {
        return x.movieId === this.id;
      });
      console.log(this.movieShowtime, 'thuwr');
    });
  }

  someMethod($event): void {
    this.seats = $event.seats;
    this.getShowTime();
  }

  valueChanged(): void {
    this.getShowTime();
  }

  showSeat($event): void {
    this.getReverse()
      .pipe(
        tap((x) => {
          this.show = true;
        })
      )
      .subscribe();
  }

  checkOut() {
    const body = {
      cinemaId: this.myForm.get('cinema').value?._id,
      date: this.myForm.get('day').value,
      movieId: this.movie?._id,
      phone: this.currentUser.phone,
      seats: this.seatSelected,
      startAt: this.myForm.get('time').value.startAt,
      ticketPrice: this.price,
      total: this.tickets,
      username: this.currentUser.username,
    };
    this.reservationsService.buyReservations(body).subscribe(
      (res) => {
        this.detailSeservations = res;
        this.show = false;
        this.snack.open('success', 'x');
      },
      (err) => {
        this.snack.open('error', 'x');
      }
    );
  }

  getReverse() {
    return this.reservationsService.getReservations().pipe(
      tap((res) => {
        this.reverse = res.filter((x) => {
          return (
            x.movieId._id === this.movie?._id &&
            x.cinemaId._id === this.myForm.get('cinema').value?._id &&
            Date.parse(x.date) === Date.parse(this.myForm.get('day').value) &&
            x.startAt === this.myForm.get('time').value.startAt
          );
        });
        this.reverse.forEach((reverse) => {
          reverse.seats.forEach((element) => {
            this.seatBought.push(element);
            console.log(this.seatBought);
          });
        });

        for (let i = 0; i < this.seats.length; i++) {
          for (let j = 0; j < this.seats[i].length; j++) {
            // tslint:disable-next-line:prefer-for-of
            for (let k = 0; k < this.seatBought.length; k++) {
              if (
                JSON.stringify([i, j]) === JSON.stringify(this.seatBought[k])
              ) {
                this.seats[i][j] = 1;
              }
            }
          }
        }
        console.log(this.seats);
      })
    );
  }

  // paymentSuccess(payment) {
  //   //alert('Payment Success');
  // }
  // CurrencyChange(cost, selectedCurreny, self): void {
  //   document.getElementById('paypal-button').innerHTML = '';
  //   if (selectedCurreny == 0) {
  //     alert('Please select the Country');
  //     return;
  //   }
  //   //reset earlier inserted paypal button
  //   window.paypal.Button.render(
  //     {
  //       env: 'sandbox',
  //       client: {
  //         production:
  //           'AQ9IbOayBJxHmad9DMGoysS4UhzE-usUqfSQ-CLzSn3M96qvZny5vZZ2VkNzn6EBTnE2UU4L8PDkqJJE',
  //         sandbox:
  //           'AQ9IbOayBJxHmad9DMGoysS4UhzE-usUqfSQ-CLzSn3M96qvZny5vZZ2VkNzn6EBTnE2UU4L8PDkqJJE',
  //       },
  //       commit: true,
  //       payment: function (data, actions) {
  //         return actions.payment.create({
  //           payment: {
  //             transactions: [
  //               {
  //                 amount: { total: cost, currency: selectedCurreny },
  //               },
  //             ],
  //           },
  //         });
  //       },
  //       onAuthorize: function (data, actions) {
  //         return actions.payment.execute().then(function (payment) {
  //           alert('Payment Successful');
  //           self.paymentSuccess(payment);
  //           console.log(payment);
  //         });
  //       },
  //     },
  //     this.demoInput.nativeElement
  //   );
  // }

  // check(item) {
  //   this.reverse.forEach((x) => {
  //     x.seats.forEach((element) => {
  //       if (element[0] === item[0] && element[1] === item[1]) {
  //         console.log('dung roi nay');
  //         return 'disabled';
  //       }
  //     });
  //   });
  // }
}
