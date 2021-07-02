import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SasaAuthComponent } from './sasa-auth/sasa-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComposerComponent } from './composer/composer.component';
import { EditableTemplateComponent } from './builder/editable-template/editable-template.component';
import { ParrafosComponent } from './sasa/parrafos/parrafos.component';
import { ArticlelistComponent } from './sasa/articlelist/articlelist.component';
import { UploadminifyComponent } from './builder/uploadminify/uploadminify.component';
import { BackendelementsComponent } from './sasa/parrafoshelper/backendelements/backendelements.component';
import { VideogeneratorComponent } from './builder/videogenerator/videogenerator.component';
import { ImagesmanagerComponent } from './builder/imagesmanager/imagesmanager.component';
import { PexelsimagesComponent } from './builder/pexelsimages/pexelsimages.component';
import { GoogleimagesComponent } from './builder/googleimages/googleimages.component';
import { TextinsertComponent } from './builder/textinsert/textinsert/textinsert.component';
import { GoogleimagesDirective } from './builder/googleimages/googleimages.directive';
import { VideodisplayComponent } from './builder/videodisplay/videodisplay.component';
import { SanitizeruriPipe } from './pipes/sanitizeruri.pipe';
import { ParrafoshelperComponent } from './sasa/parrafoshelper/parrafoshelper.component';
import { ContentheadComponent } from './sasa/parrafoshelper/contenthead/contenthead.component';
import { SasamasonryDirective } from './directives/sasamasonry.directive';
import { ImageParrafoComponent } from './builder/image-parrafo/image-parrafo.component';
import { ShowingDirective } from './directives/showing.directive';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SasaAuthComponent,
    DashboardComponent,
    ComposerComponent,
    EditableTemplateComponent,
    ParrafosComponent,
    ArticlelistComponent,
    UploadminifyComponent,
    BackendelementsComponent,
    VideogeneratorComponent,
    ImagesmanagerComponent,
    PexelsimagesComponent,
    GoogleimagesComponent,
    TextinsertComponent,
    GoogleimagesDirective,
    VideodisplayComponent,
    SanitizeruriPipe,
    ParrafoshelperComponent,
    ContentheadComponent,
    SasamasonryDirective,
    ImageParrafoComponent,
    ShowingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
