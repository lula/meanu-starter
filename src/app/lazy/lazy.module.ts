import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
  selector: 'lazy-view',
  template: `<div class="container"><h3>i'm lazy</h3></div>`
})
export class LazyComponent {}

@Component({
  selector: 'lazy-nested-view',
  template: `<div class="container"><h3>i'm lazy (nested!)</h3></div>`
})
export class LazyNestedComponent { }

@NgModule({
  declarations: [ LazyComponent, LazyNestedComponent ],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'},
      { path: 'nested', component: LazyNestedComponent, pathMatch: 'full' },
    ])
  ]
})
export class LazyModule {

}