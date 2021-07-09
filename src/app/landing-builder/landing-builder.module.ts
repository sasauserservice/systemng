import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BannerEditableViewComponent } from './banner/banner-editable-view/banner-editable-view.component';
import { BannerFrontendViewComponent } from './banner/banner-frontend-view/banner-frontend-view.component';
import { ComposerComponent } from './composer/composer.component';
import { EditableTemplateComponent } from './editable-template/editable-template.component';
import { GoogleimagesComponent } from './elements/googleimages/googleimages.component';
import { ImagesmanagerComponent } from './elements/imagesmanager/imagesmanager.component';
import { PexelsimagesComponent } from './elements/pexelsimages/pexelsimages.component';
import { TextinsertComponent } from './elements/textinsert/textinsert/textinsert.component';
import { UploadminifyComponent } from './elements/uploadminify/uploadminify.component';
import { VideodisplayComponent } from './elements/videodisplay/videodisplay.component';
import { VideogeneratorComponent } from './elements/videogenerator/videogenerator.component';
import { ParrafosComponent } from './parrafos/parrafos.component';
import { BackendelementsComponent } from './parrafoshelper/backendelements/backendelements.component';
import { ContentheadComponent } from './parrafoshelper/contenthead/contenthead.component';
import { ImageParrafoComponent } from './parrafoshelper/image-parrafo/image-parrafo.component';
import { SanitizeruriPipe } from '../pipes/sanitizeruri.pipe';
import { UpdateuriPipe } from '../pipes/updateuri.pipe';
import { SasamasonryDirective } from '../directives/sasamasonry.directive';
import { ShowingDirective } from '../directives/showing.directive';
import { CalheightDirective } from '../directives/calheight.directive';
import { CompetenceModule } from '../competence/competence.module';

/**CUSTOM COMPONENTS**/
/**CUSTOM COMPONENTS**/


@NgModule({
  declarations: [
    BannerEditableViewComponent,
    BannerFrontendViewComponent,
    ComposerComponent,
    EditableTemplateComponent,

    GoogleimagesComponent,
    ImagesmanagerComponent,
    PexelsimagesComponent,
    TextinsertComponent,
    UploadminifyComponent,
    VideodisplayComponent,
    VideogeneratorComponent,

    ParrafosComponent,
    BackendelementsComponent,
    ContentheadComponent,
    ImageParrafoComponent,

    SanitizeruriPipe,
    UpdateuriPipe,

    SasamasonryDirective,
    ShowingDirective,
    CalheightDirective
  ],
  exports: [
    BannerEditableViewComponent,
    BannerFrontendViewComponent,
    ComposerComponent,
    EditableTemplateComponent,
    GoogleimagesComponent,
    ImagesmanagerComponent,
    PexelsimagesComponent,
    TextinsertComponent,
    UploadminifyComponent,
    VideodisplayComponent,
    VideogeneratorComponent,
    ParrafosComponent,
    BackendelementsComponent,
    ContentheadComponent,
    ImageParrafoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompetenceModule
  ]
})
export class LandingBuilderModule { }
