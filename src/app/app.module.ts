import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingBuilderModule } from './landing-builder/landing-builder.module';
import { SasaAuthModule } from './sasa-auth/sasa-auth.module';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompetenceModule } from './competence/competence.module';
import { MicrodashboardComponent } from './microdashboard/microdashboard.component';
import { FiltersearchPipe } from './pipes/filtersearch.pipe';
import { TeamControlComponent } from './competence/landing/team-control/team-control.component';
import { FilterusergroupPipe } from './pipies/filterusergroup.pipe';
import { SanitizeruriPipe } from './pipes/sanitizeruri.pipe';
import { CardprofileComponent } from './helpers/cardprofile/cardprofile.component';

import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { ConditionalContentDirective } from './directives/conditional-content.directive';
import { StoreModule } from '@ngrx/store';
import { applicationReducer } from './store/application.reducer';
import { GrandCategoryEditComponent } from './competente/grandCategory/grand-category-edit/grand-category-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticlesComponent,
    DashboardComponent,
    MicrodashboardComponent,
    FiltersearchPipe,
    CardprofileComponent,
    ConditionalContentDirective,
    GrandCategoryEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    StoreModule.forRoot({user: applicationReducer}),
    
    SasaAuthModule,
    LandingBuilderModule,
    CompetenceModule,
  ],
  exports: [
    ArticlesComponent,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
