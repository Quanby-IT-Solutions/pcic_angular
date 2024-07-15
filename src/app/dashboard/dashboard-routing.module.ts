// src/app/dashboard/dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/dashboard/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'assignment',
        loadChildren: () =>
          import('src/app/dashboard/assignment/assignment.module').then(
            (m) => m.AssignmentModule
          ),
      },
      {
        path: 'standard-report',
        loadChildren: () =>
          import(
            'src/app/dashboard/standard-report/standard-report.module'
          ).then((m) => m.StandardReportModule),
      },
      {
        path: 'custom-report',
        loadChildren: () =>
          import('src/app/dashboard/custom-report/custom-report.module').then(
            (m) => m.CustomReportModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
