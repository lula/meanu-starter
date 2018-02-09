import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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

  houses$: Observable<House[]>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.houses$ = this.http.get<House[]>('http://localhost:4000/api/got/houses');
  }

  ngOnDestroy() {
    
  }

}
