import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from './app.constant';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { Launch } from './launch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*   launchesList = [];
  launch = {};

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('https://isrospacex.com/launches.json')
      .subscribe((launches: {}[]) => {
        console.log((this.launchesList = launches['launcheList']));
      });
  }

  onSelectOfLaunch(launch) {
    console.log(launch);
    this.launch = launch;
  } */

  /* launchesList = [];
  launch = {};
  sub: Subscription = new Subscription();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.sub.add(
      this.httpClient
        .get(AppConstant.URL_LAUNCH_GET)
        .subscribe((launches: {}[]) => {
          console.log((this.launchesList = launches[AppConstant.LAUNCHE_LIST]));
        })
    );
  }

  onSelectOfLaunch(launch) {
    console.log(launch);
    this.launch = launch;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  } */

  // launchesList = [];
  launchesList$: Observable<Launch[]>;
  launch: {};

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.launchesList$ = this.appService
      .fetchAll(AppConstant.URL_LAUNCH_GET)
      .pipe(map(launchesList => launchesList[AppConstant.LAUNCHE_LIST]));
  }

  onSelectOfLaunch(launch) {
    this.launch = launch;
  }
}
