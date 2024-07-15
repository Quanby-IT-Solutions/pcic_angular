import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardReportComponent } from './standard-report.component';

const routes: Routes = [{ path: '', component: StandardReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardReportRoutingModule { }
