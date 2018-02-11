import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { HousesComponent } from './houses/houses.component';
import { GotComponent } from './got.component';
import { RouterModule } from '@angular/router';
import { HouseDetailComponent } from './house-detail/house-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      { 
        path: 'got', 
        component: GotComponent,
        children: [
          { path: 'houses', component: HousesComponent },
          { path: 'houses/:id', component: HouseDetailComponent }
        ]
      },
    ])
  ],
  declarations: [HousesComponent, GotComponent, HouseDetailComponent]
})
export class GotModule { }
