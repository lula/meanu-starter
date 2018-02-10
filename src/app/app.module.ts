import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app.material.module';
import { GotModule } from './got/got.module';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'meanu-starter-app'}),
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    GotModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`AppModule - Running ${platform} with appId=${appId}`);
  }
}
