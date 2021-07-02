import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComposerComponent } from './composer/composer.component';
import { AuthorizatedGuard } from './guards/authorizated.guard';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'dasboard', component: DashboardComponent, canActivate: [AuthorizatedGuard]},
    {path: ':alias', component: ComposerComponent, canActivate: [AuthorizatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
