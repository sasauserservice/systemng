import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComposerComponent } from './landing-builder/composer/composer.component';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { ManagerComponent } from './competence/manager/manager.component';
import { ParamsComponent } from './competence/params/params.component';
import { PenaltiesComponent } from './competence/penalties/penalties.component';
import { MicrodashboardComponent } from './microdashboard/microdashboard.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'dasboard', component: DashboardComponent, canActivate: [AuthorizatedGuard]},
    {path: 'u/:alias', component: ComposerComponent, canActivate: [AuthorizatedGuard]},
    {
      path: 'match', 
      component: ManagerComponent,
      children: [
        {path: 'parameters', component: ParamsComponent, canActivate: [AuthorizatedGuard]},
        {path: 'penalties', component: PenaltiesComponent, canActivate: [AuthorizatedGuard]}
      ], 
      canActivate: [AuthorizatedGuard]
    },
    {path: 'development', component: MicrodashboardComponent, canActivate: [AuthorizatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
