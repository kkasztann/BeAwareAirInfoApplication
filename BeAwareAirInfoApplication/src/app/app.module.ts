import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AgmCoreModule } from '@agm/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment.prod';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';

import { DatabaseService } from './services/database.service';
import { DataComponent } from './components/data/data.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { PollutionMapComponent } from './components/pollution-map/pollution-map.component';

import {Ng2Webstorage} from 'ngx-webstorage';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    FooterComponent,
    UserComponent,
    DataComponent,
    PollutionMapComponent,
    FaqComponent,
    SupportComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Ng2Webstorage,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FlashMessagesModule,
    HttpClientModule,

    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKI-T37eiih6T2TuOuuh_GS5lzHMCYxeU'
    })
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, DatabaseService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
