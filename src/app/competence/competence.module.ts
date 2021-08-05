import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
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
import { PanelsEditComponent } from './panels/panels-edit/panels-edit.component';
import { UserCreateManagerComponent } from './user/user-create-manager/user-create-manager.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { UserEditManagerComponent } from './user/user-edit-manager/user-edit-manager.component';
import { CompetitorCreateManagerComponent } from './competitor/competitor-create-manager/competitor-create-manager.component';
import { FilterusergroupPipe } from '../pipies/filterusergroup.pipe';
import { CompetitorListComponent } from './competitor/competitor-list/competitor-list.component';
import { CompetitorEditManagerComponent } from './competitor/competitor-edit-manager/competitor-edit-manager.component';
import { EntryListManagerComponent } from './entry/entry-list-manager/entry-list-manager.component';
import { EventsToPanelsComponent } from './panels/panelsAsignator/events-to-panels/events-to-panels.component';
import { EntrybyeventPipe } from './pipes/entrybyevent.pipe';
import { EntryGeneralJudgeComponent } from './judgement/entry-general-judge/entry-general-judge.component';
import { EntrypreviewComponent } from './entry/entrypreview/entrypreview.component';
import { EntryPenaltyJudgeComponent } from './judgement/entry-penalty-judge/entry-penalty-judge.component';
import { EntryMainJudgeComponent } from './judgement/entry-main-judge/entry-main-judge.component';
import { PreviewComponent } from './ranking/preview/preview.component';
import { ClaimsGeneratorComponent } from './claims/claims-generator/claims-generator.component';
import { StatusVisualizerComponent } from '../helpers/status-visualizer/status-visualizer.component';
import { SanitizeruriPipe } from '../pipes/sanitizeruri.pipe';
import { UrldecoPipe } from './pipes/urldeco.pipe';
import { EntryAthleteComponent } from './judgement/entry-athlete/entry-athlete.component';
import { GrandCategoryCreatorComponent } from './grandCategory/grand-category-creator/grand-category-creator.component';
import { GrandCategoryListComponent } from './grandCategory/grand-category-list/grand-category-list.component';
import { GrandCategoryEditComponent } from './grandCategory/grand-category-edit/grand-category-edit.component';
import { ConditionalJudgmentDirective } from '../directives/conditional-judgment.directive';

import { ConditionalContentDirective } from '../directives/conditional-content.directive';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EntryGlobalJudgementComponent } from './judgement/entry-global-judgement/entry-global-judgement.component';
import { SyncComponent } from './sync/sync/sync.component';

@NgModule({
  declarations: [
    ManagerComponent,
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
    TeamControlComponent,
    PanelsEditComponent,
    UserCreateManagerComponent, 
    UserManagementComponent,
    UserEditManagerComponent,
    CompetitorCreateManagerComponent,
    FilterusergroupPipe,
    CompetitorListComponent,
    CompetitorEditManagerComponent,
    EntryListManagerComponent,
    EventsToPanelsComponent,
    EntrybyeventPipe,
    EntryGeneralJudgeComponent,
    EntrypreviewComponent,
    EntryPenaltyJudgeComponent,
    EntryMainJudgeComponent,
    PreviewComponent,
    ClaimsGeneratorComponent,
    StatusVisualizerComponent,
    UrldecoPipe,
    EntryAthleteComponent,
    GrandCategoryCreatorComponent,
    GrandCategoryListComponent,
    GrandCategoryEditComponent,

    ConditionalJudgmentDirective,
     UserProfileComponent,
     EntryGlobalJudgementComponent,
     ConditionalContentDirective,
     SyncComponent
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
    TeamControlComponent,
    PanelsEditComponent,
    UserCreateManagerComponent,
    UserManagementComponent,
    CompetitorCreateManagerComponent,
    FilterusergroupPipe,
    CompetitorEditManagerComponent,
    EntryListManagerComponent,
    EventsToPanelsComponent,
    EntryGeneralJudgeComponent,
    EntryPenaltyJudgeComponent,
    PreviewComponent,
    StatusVisualizerComponent,
    UrldecoPipe,
    GrandCategoryCreatorComponent,
    GrandCategoryEditComponent,

    ConditionalJudgmentDirective,
    UserProfileComponent,
    EntryGlobalJudgementComponent,
    ConditionalContentDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CompetenceModule { }
