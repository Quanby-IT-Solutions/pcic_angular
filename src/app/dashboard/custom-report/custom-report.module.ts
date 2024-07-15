import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomReportRoutingModule } from './custom-report-routing.module';
import { CustomReportComponent } from './custom-report.component';


@NgModule({
  declarations: [
    CustomReportComponent
  ],
  imports: [
    CommonModule,
    CustomReportRoutingModule
  ]
})
export class CustomReportModule { }
