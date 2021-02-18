import { Component, OnInit } from '@angular/core';

import { ComponentItem } from "../../components/component.model";

@Component({
  selector: 'app-inice',
  templateUrl: './inice.page.html',
  styleUrls: ['./inice.page.scss'],
})
export class InicePage implements OnInit {

  components: ComponentItem[]

  constructor() {
    this.components = [
      {
        icon: 'alert-circle-outline',
        name: 'Alertas',
        link: '/alert'
      },
      {
        icon: 'layers-outline',
        name: 'Abas',
        link: '/action-sheet'
      }
    ]
  }

  ngOnInit() {
  }

}
