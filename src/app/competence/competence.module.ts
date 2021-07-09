import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { PenaltiesComponent } from './penalties/penalties.component';
import { ParamsComponent } from './params/params.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelect2Module } from 'ng-select2';

import { CreatorComponent } from './category/creator/creator.component';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { ParameterCreatorComponent } from './parameter/parameter-creator/parameter-creator.component';
import { ParameterListComponent } from './parameter/parameter-list/parameter-list.component';
import { ParameterEditComponent } from './parameter/parameter-edit/parameter-edit.component';
import { PenaltyCreatorComponent } from './penalty/penalty-creator/penalty-creator.component';
import { PenaltyListComponent } from './penalty/penalty-list/penalty-list.component';
import { PenaltyEditComponent } from './penalty/penalty-edit/penalty-edit.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { PanelsComponent } from './panels/panels.component';
import { PanelsCreateComponent } from './panels/panels-create/panels-create.component';
import { PanelsListComponent } from './panels/panels-list/panels-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { TeamControlComponent } from './landing/team-control/team-control.component';


@NgModule({
  declarations: [
    ManagerComponent,
    PenaltiesComponent,
    ParamsComponent,
    CreatorComponent,
    CategoryCreatorComponent,
    ParameterCreatorComponent,
    ParameterListComponent,
    ParameterEditComponent,
    PenaltyCreatorComponent,
    PenaltyListComponent,
    PenaltyEditComponent,
    CategoryEditComponent,
    CategoryListComponent,
    PanelsComponent,
    PanelsCreateComponent,
    PanelsListComponent,
    EventsListComponent,
    TeamControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgSelect2Module
  ],
  exports: [
    ManagerComponent,
    PenaltiesComponent,
    ParamsComponent,
    CreatorComponent,
    CategoryCreatorComponent,
    ParameterCreatorComponent,
    ParameterListComponent,
    ParameterEditComponent,
    PenaltyCreatorComponent,
    PenaltyListComponent,
    PenaltyEditComponent,
    CategoryListComponent,
    CategoryEditComponent,
    PanelsComponent,
    PanelsCreateComponent,
    PanelsListComponent,
    EventsListComponent,
    TeamControlComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CompetenceModule { }
