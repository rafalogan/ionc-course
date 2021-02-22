import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {ComponentItem} from "../components/component.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<ComponentItem[]> {
    return this.http.get<ComponentItem[]>('./assets/data/menu.json');
  }
}
