import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";

import { DataService } from "../../services/data.service";
import { ComponentItem } from "../component.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menus: Observable<ComponentItem[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menus = this.dataService.getMenu();
  }

}
