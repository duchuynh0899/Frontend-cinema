import { filter } from 'rxjs/operators';
import { CurrentUserService } from '@shared/services/current-user.service';
import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '@shared/services/reservations.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss'],
})
export class MyReservationsComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = [
    'Movie',
    'Cinema',
    'Date',
    'Start At',
    'Ticket Price',
    'Total',
  ];
  user: any;

  constructor(
    private reservationsService: ReservationsService,
    private currentUserService: CurrentUserService
  ) {
    this.currentUserService.user$.subscribe((user) => {
      this.user = user;
    });
    this.reservationsService.getReservations().subscribe((res: any[]) => {
      this.dataSource = res.filter((x) => {
        return x.username === this.user.username;
      });
    });
  }

  ngOnInit() {}
}
