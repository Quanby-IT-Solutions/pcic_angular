import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardReportRoutingModule } from './standard-report-routing.module';
import { StandardReportComponent } from './standard-report.component';


@NgModule({
  declarations: [
    StandardReportComponent
  ],
  imports: [
    CommonModule,
    StandardReportRoutingModule
  ]
})
export class StandardReportModule { }
