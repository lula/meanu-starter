import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { HousesComponent } from './houses/houses.component';
import { GotComponent } from './got.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      { 
        path: 'got', 
        component: GotComponent,
        children: [
          { path: 'houses', component: HousesComponent }
        ]
      },
    ])
  ],
  declarations: [HousesComponent, GotComponent]
})
export class GotModule { }
