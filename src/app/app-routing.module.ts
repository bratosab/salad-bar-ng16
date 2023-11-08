import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameFormComponent } from './components/name-form/name-form.component';

const routes: Routes = [
  { path: '', component: NameFormComponent},
  {
    path: 'kitchen',
    loadChildren: () =>
      import('./kitchen/kitchen-routing.module').then(
        (m) => m.KitchenRoutingModule
      ),
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
