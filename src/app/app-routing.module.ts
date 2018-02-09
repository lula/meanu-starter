import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GotComponent } from './got/got.component';

const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
    { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
