import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name: string = 'Rafael Candeira';

  constructor() {}

  ngOnInit() {
    this.getName()
  }

  getName(): void {
    alert(`name: ${this.name}`);
  }
}
