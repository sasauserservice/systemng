import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { PenaltiesComponent } from './penalties/penalties.component';
import { ParamsComponent } from './params/params.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CreatorComponent } from './category/creator/creator.component';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';


@NgModule({
  declarations: [
    ManagerComponent,
    PenaltiesComponent,
    ParamsComponent,
    CreatorComponent,
    CategoryCreatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ManagerComponent,
    PenaltiesComponent,
    ParamsComponent
  ]
})
export class CompetenceModule { }
