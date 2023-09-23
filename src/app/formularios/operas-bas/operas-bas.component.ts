import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
num1='';
num2='';
resultado:number=0;
operacion: string = 'suma'; 
calcular() {
  switch (this.operacion) {
    case 'suma':
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
      break;
    case 'resta':
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
      break;
    case 'multiplicar':
        this.resultado = parseInt(this.num1) * parseInt(this.num2);
      break
      case 'division':
      this.resultado = parseInt(this.num1) / parseInt(this.num2);
      break;
    }
  }
}
