import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { House } from '../houses/houses.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit, OnDestroy {
  sub: Subscription;
  house$: Observable<House>;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.house$ = this.http.get(`http://localhost:4000/api/got/houses/${params.id}`);
      this.sub = this.house$.subscribe(() => {}, err => console.log(err))
    });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
