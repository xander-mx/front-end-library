import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationLibraryComponent } from './navigation-library/navigation-library.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BookModule } from './books/book.module';
import { RouterModule } from '@angular/router';
import { NavigationLibraryModule } from './navigation-library/navigation-library.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    BookModule,
    UsersModule,
    NavigationLibraryModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'books', pathMatch: 'full'},
      {path: '**', redirectTo: 'books', pathMatch: 'full'}
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
