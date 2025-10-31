import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Servicio con funciones de utilidad
export class UtilsService {

  constructor() { }

  //MÉTODOS

  /**
   * Devuelve la fecha actual
   */
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}


