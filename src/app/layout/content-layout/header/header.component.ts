import { Router } from '@angular/router';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AbstractHeaderDirective } from '@shared/components/abstract/abstract-header.directive';
import { DestroyService } from '@shared/services/destroy.service';
import { LocalStorageExtention } from '@shared/extensions/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService]
})
export class HeaderComponent implements OnInit {
  listMenu = [{ name: 'Home', url: 'home' },
  { name: 'Now Showing', url: 'show' },
  { name: 'Coming Soon', url: 'coming' },
  { name: 'Cinemas', url: 'cinemas' }]
  images: any[] = [
    { url: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg', content: 'phim' },
    { url: 'https://image.tmdb.org/t/p/original/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg', content: 'test' },
    { url: 'https://image.tmdb.org/t/p/original/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg', content: 'test' },
    { url: 'https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg', content: 'test' },
    { url: 'https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg', content: 'test' }];

  backgroundImage: string = '';
  content: any;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    let ran = Math.round((Math.random() * 100) % 5);
    this.backgroundImage = this.images[ran].url;
    this.content = this.images[ran].content;
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
    LocalStorageExtention.deleteToken('token');
  }


}
