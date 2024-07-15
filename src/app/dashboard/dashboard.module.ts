import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OurHeaderComponent } from './components/header/header.component';
import { CourseModalComponent } from '../shared/components/course-modal/course-modal.component';
import { PcicSidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, CourseModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    OurHeaderComponent,
    PcicSidebarComponent,
  ],
})
export class DashboardModule {}
