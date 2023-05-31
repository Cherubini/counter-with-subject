import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterValue } from '../model/counter-value';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public counterValuesSubject: BehaviorSubject<CounterValue[]> = new BehaviorSubject([{value:0, changes:0, type: 'start'}])


  constructor() { }

  increment(){

  }


  decrement(){

  }

}
