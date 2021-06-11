import { ReservationsService } from './../../_shared/services/reservations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  id: any;
  reservations: any;
  checked: boolean;

  constructor(private route: ActivatedRoute, private reservationsService: ReservationsService) {
    this.id = this.route.snapshot.params;
    this.getCheckin();
  }

  ngOnInit() {
  }

  getCheckin() {
    this.reservationsService.getCheckin(this.id.id).subscribe(
      res => {
        if (res.checkin === true) {
          this.checked = true;
        }
        this.reservations = res;
      }
    )
  }

}
