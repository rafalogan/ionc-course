import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MenuController } from "@ionic/angular";

import { DataService } from "../../services/data.service";
import { ComponentItem } from "../../components/component.model";

@Component({
  selector: 'app-inice',
  templateUrl: './inice.page.html',
  styleUrls: ['./inice.page.scss'],
})
export class InicePage implements OnInit {

  components: Observable<ComponentItem[]>

  constructor(private menuController: MenuController,
              private dataService: DataService) {}

  ngOnInit() {
    this.components = this.dataService.getMenu();
  }

  toggleMenu() {
    this.menuController.toggle();
  }
}
