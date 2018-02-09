import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatCardModule, MatButtonModule,
    MatIconModule,
    MatGridListModule
} from '@angular/material';
@NgModule({
    imports: [
        MatToolbarModule, MatCardModule, MatButtonModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule, MatCardModule, MatButtonModule,
        MatIconModule, MatGridListModule
    ]
})
export class AppMaterialModule { }
