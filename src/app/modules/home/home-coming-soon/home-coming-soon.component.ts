import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-coming-soon',
  templateUrl: './home-coming-soon.component.html',
  styleUrls: ['./home-coming-soon.component.scss'],
})
export class HomeComingSoonComponent implements OnInit {
  cinemas: any[] = [
    {
      url:
        'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      content:
        'fast & furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. the franchise includes short films, a television series, live shows, video games and theme park attractions. it is distributed by universal pictures',
      name: 'Fast & Furious',
      time: '120 min',
      catogery: 'adventure',
    },
    {
      url:
        'https://image.tmdb.org/t/p/original/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg',
      content:
        'fast & furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. the franchise includes short films, a television series, live shows, video games and theme park attractions. it is distributed by universal pictures',
      name: 'Avenger',
      time: '120 min',
      catogery: 'adventure',
    },
    {
      url:
        'https://image.tmdb.org/t/p/original/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg',
      content:
        'fast & furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. the franchise includes short films, a television series, live shows, video games and theme park attractions. it is distributed by universal pictures',
      name: 'Maleficent: Mistress Of Evil',
      time: '120 min',
      catogery: 'adventure',
    },
    {
      url:
        'https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
      content:
        'fast & furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. the franchise includes short films, a television series, live shows, video games and theme park attractions. it is distributed by universal pictures',
      name: 'Fast & Furious',
      time: '120 min',
      catogery: 'adventure',
    },
  ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
  constructor() {}

  ngOnInit() {}

  addSlide() {
    this.cinemas.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.cinemas.length = this.cinemas.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
