import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Importamos el modulo que nos permite hacer peticiones HTTP

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {
  URL_API = 'http://localhost:3000'; //URL principal del servidor (node/express)

  //Instanciamos el modulo importado
  constructor(private http: HttpClient) {}

  //Creamos un método (o función) para obtener datos del servidor, mediante una petición
  //a la URL por un método determinado (get)
  obtenerTareas() {
    let request = this.http.get(this.URL_API + '/tareas');
    return request;
  }
}

//componente -> servicio -> servidor
