import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { MyReservationsComponent } from '@modules/dashboard/my-reservations/my-reservations.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DetailMoviesComponent } from '@shared/components/detail-movies/detail-movies.component';
import { HttpInterceptor } from '@shared/interceptors/interceptors';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HeaderComponent } from './layout/content-layout/header/header.component';
import { MenuComponent } from './layout/content-layout/menu/menu.component';
import { ContentViewLayoutComponent } from './layout/content-view-layout/content-view-layout.component';
import { HeaderContentViewComponent } from './layout/content-view-layout/header/header.component';
import { CinemasComponent } from './modules/cinemas/cinemas.component';
import { MyProfileComponent } from './modules/dashboard/my-profile/my-profile.component';
import { UploadPhotoComponent } from './modules/dashboard/upload-photo/upload-photo.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    ContentViewLayoutComponent,
    HeaderComponent,
    MenuComponent,
    HeaderContentViewComponent,
    MyReservationsComponent,
    DashboardComponent,
    MyProfileComponent,
    UploadPhotoComponent,
    CinemasComponent,
    DetailMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  //   { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
  //   { provide: ErrorHandler, useClass: ErrorHandlerService },
  //   // { provide: HttpInterceptor }
  // ],
  providers: [HttpInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
