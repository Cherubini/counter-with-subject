import { Component, OnInit } from '@angular/core';
import { CounterValue } from 'src/app/model/counter-value';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit{
  constructor(public dataServ: DataService){ }

  oddOrEven: CounterValue[]=[]

  ngOnInit(): void {
    this.dataServ.counterValuesSubject.subscribe({
      next: counterValues => {
            this.oddOrEven=[];
            for(let i = 0; i < counterValues.length; i++) {
              const element = JSON.parse(JSON.stringify(counterValues[i]));
              if(element.value%2===0){
                element.type='pari';
              }
               else{
                element.type='dispari';
              }
              this.oddOrEven.push(element)
            }
          }
    })
  }



}
