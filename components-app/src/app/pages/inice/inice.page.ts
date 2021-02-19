import { Component, OnInit } from '@angular/core';

import { MenuController } from "@ionic/angular";

import { ComponentItem } from "../../components/component.model";

@Component({
  selector: 'app-inice',
  templateUrl: './inice.page.html',
  styleUrls: ['./inice.page.scss'],
})
export class InicePage implements OnInit {

  components: ComponentItem[]

  constructor(private menuController: MenuController) {
    this.components = []
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuController.toggle();
  }
}
