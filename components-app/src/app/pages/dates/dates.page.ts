import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {

  now: Date = new Date();

  constructor() {}

  ngOnInit() {
  }

  changeDate(newDate) {
    console.log('ionChange', newDate)
  }
}
