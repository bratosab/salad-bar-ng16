import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './store/salad.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SaladEffects } from './store/salad.effects';
import { SharedMaterialModule } from '../shared-material/shared-material.module';



@NgModule({
  declarations: [
    SaladComponent,
    ToppingsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    StoreModule.forFeature('salad', saladReducer),
    EffectsModule.forFeature([SaladEffects]),
    SharedMaterialModule
  ]
})
export class SaladModule { }
