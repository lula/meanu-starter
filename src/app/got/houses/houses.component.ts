import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { House } from '../../../server/models/got.model';
import 'rxjs/add/observable/fromPromise';
import { Subscription } from 'rxjs/Subscription';

interface House {
  name?: string;
  words?: string;
}

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit, OnDestroy {

  housesSub: Subscription;
  houses$: Observable<House[]>;

  constructor(
    private http: HttpClient
  ) { 
    this.houses$ = this.http.get<House[]>('http://localhost:4000/api/got/houses');
    this.housesSub = this.houses$.subscribe();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.housesSub.unsubscribe();
  }

}
