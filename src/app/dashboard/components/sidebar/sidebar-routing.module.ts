// src/app/dashboard/components/sidebar/sidebar-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcicSidebarComponent } from './sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: PcicSidebarComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSidebarRoutingModule {}
