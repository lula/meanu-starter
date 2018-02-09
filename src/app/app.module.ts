import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app.material.module';
import { GotModule } from './got/got.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'meanu-app'}),
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    GotModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
