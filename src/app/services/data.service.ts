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
    const counterValuesArray=   this.counterValuesSubject.value;
    const lastCounterValue = counterValuesArray[counterValuesArray.length-1];
    const newCounterValue=
      {
        value: lastCounterValue.value+1,
        changes:lastCounterValue.changes+1,
        type: 'increment'
      }
    counterValuesArray.push(newCounterValue);
    this.counterValuesSubject.next(counterValuesArray);
  }


  decrement(){
    const counterValuesArray=   this.counterValuesSubject.value;
    const lastCounterValue = counterValuesArray[counterValuesArray.length-1];
    const newCounterValue=
      {
        value: lastCounterValue.value-1,
        changes:lastCounterValue.changes+1,
        type: 'decrement'
      }
    counterValuesArray.push(newCounterValue);
    this.counterValuesSubject.next(counterValuesArray);

  }

}
