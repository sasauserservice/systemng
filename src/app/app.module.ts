import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticlesComponent,
    DashboardComponent,
    MicrodashboardComponent,
    FiltersearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
    SasaAuthModule,
    LandingBuilderModule,
    CompetenceModule,
  ],
  exports: [
    ArticlesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
