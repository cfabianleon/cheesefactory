import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable, of } from 'rxjs';
import {Queso} from '../interface/queso';
import { QUESOS } from '../mocks/mock-quesos';

@Injectable({
  providedIn: 'root'
})
export class QuesoService {

  constructor() { }


  getQuesos(): Observable<Queso[]> {
    const quesos = of(QUESOS);
    return quesos;
  }
}


