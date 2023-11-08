import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { nameGuard } from './name.guard';

const routes: Routes = [
  { path: 'salad', component: SaladComponent, canActivate: [nameGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
