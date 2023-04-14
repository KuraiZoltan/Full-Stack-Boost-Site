import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LeaguePageComponent } from './league-page/league-page.component';
import { ValorantPageComponent } from './valorant-page/valorant-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './about-me/about-me.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MainPageComponent,
    LeaguePageComponent,
    ValorantPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    AboutMeComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      { path: 'league-of-legends', component: LeaguePageComponent },
      { path: 'valorant', component: ValorantPageComponent },
      { path: 'registration', component: RegistrationPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'privacy-policy', component: PrivacyComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
