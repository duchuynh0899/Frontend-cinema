import { Component, OnInit } from '@angular/core';
import { AuthlayoutService } from './authlayout.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(public authLayoutService: AuthlayoutService,) { }

  ngOnInit() {
  }

}
