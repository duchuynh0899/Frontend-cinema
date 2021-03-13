import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HeaderComponent } from './layout/content-layout/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { MenuComponent } from './layout/content-layout/menu/menu.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AuthorizeInterceptor } from '@shared/interceptors/authorize.interceptor';
import { ErrorInterceptor } from '@shared/interceptors/error.interceptor';
import { ContentViewLayoutComponent } from './layout/content-view-layout/content-view-layout.component';
import { HeaderContentViewComponent } from './layout/content-view-layout/header/header.component';
import { ErrorHandlerService } from '@shared/services/error-handler.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutes,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
