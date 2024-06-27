import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

    nombre?: string;
    fecha?: Date = new Date();
    dolar?: number = 18.50
    
    //inyeccion de saludar hermnao
    constructor(

      private _servicioFamiliar : ServicioFamiliarService
    
    ){}  

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

}


// mensajeRecibido : string = "";

// recibirMensaje($event:string){
//   this.mensajeRecibido = $event;
// }


/*

  //CONTADOOOR///////////
  mensajePadre = "Mensaje desde el padre"

  valorContador: number = 0

  incrementar (){
    this.valorContador++
  }

  decrementar(){
    this.valorContador--
  }
*/


//   mensajePadre = "Mensaje desde el padre"
  
//  //CONTADOOOR///////////
//   valorContador: number = 0

//   incrementar (){
//     this.valorContador++
//   }

//   decrementar(){
//     this.valorContador--
//   }