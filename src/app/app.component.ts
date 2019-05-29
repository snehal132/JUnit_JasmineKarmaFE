import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JasmineKarmaExample';
  title1 = 'kinjal';
  result : number;

  add(number1 :number , number2 : number){
  var num1 = +number1; 
  var num2 = +number2; 
  this. result = num1+num2;    
 
  }
}
