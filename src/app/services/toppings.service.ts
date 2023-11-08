import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }
}
