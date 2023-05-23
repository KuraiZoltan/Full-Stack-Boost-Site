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
import { AuthGuard } from './guards/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoachingComponent } from './coaching/coaching.component';
import { BoostingComponent } from './boosting/boosting.component';
import { HeaderComponent } from './main-page/header/header.component';
import { ServicesComponent } from './main-page/services/services.component';
import { AboutComponent } from './main-page/about/about.component';
import { TeamComponent } from './main-page/team/team.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BoostingFeaturesComponent } from './boosting/boosting-features/boosting-features.component';
import { BoostingHeaderComponent } from './boosting/boosting-header/boosting-header.component';
import { CoachingHeaderComponent } from './coaching/coaching-header/coaching-header.component';
import { CoachingServicesComponent } from './coaching/coaching-services/coaching-services.component';
import { CoachingFeaturesComponent } from './coaching/coaching-features/coaching-features.component';
import { LeagueHeaderComponent } from './league-page/league-header/league-header.component';
import { LeagueServicesComponent } from './league-page/league-services/league-services.component';
import { LeagueFeaturesComponent } from './league-page/league-features/league-features.component';
import { ValorantFeaturesComponent } from './valorant-page/valorant-features/valorant-features.component';
import { ValorantHeaderComponent } from './valorant-page/valorant-header/valorant-header.component';
import { ValorantServicesComponent } from './valorant-page/valorant-services/valorant-services.component';

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
    PrivacyComponent,
    UserProfileComponent,
    CoachingComponent,
    BoostingComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    BoostingFeaturesComponent,
    BoostingHeaderComponent,
    CoachingHeaderComponent,
    CoachingServicesComponent,
    CoachingFeaturesComponent,
    LeagueHeaderComponent,
    LeagueServicesComponent,
    LeagueFeaturesComponent,
    ValorantFeaturesComponent,
    ValorantHeaderComponent,
    ValorantServicesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      { path: 'league-of-legends', component: LeaguePageComponent, canActivate: [AuthGuard] },
      { path: 'valorant', component: ValorantPageComponent, canActivate: [AuthGuard] },
      { path: 'registration', component: RegistrationPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuard] },
      { path: 'privacy-policy', component: PrivacyComponent },
      { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
      { path: 'coaching', component: CoachingComponent, canActivate: [AuthGuard] },
      { path: 'boosting', component: BoostingComponent },
    ]),
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
