import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstapostComponent } from './instapost/instapost.component';
import { ProfileComponent } from './profile/profile.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    InstapostComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InlineSVGModule,
    AngularSvgIconModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
