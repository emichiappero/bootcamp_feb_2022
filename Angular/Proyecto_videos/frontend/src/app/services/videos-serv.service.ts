// SERVICIO
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video_modelo } from '../models/videos';

@Injectable({
  providedIn: 'root',
})
export class VideosServService {
  constructor(private http: HttpClient) {}

  URL_API = 'http://localhost:3000';

  documentos: Video_modelo[] = [];

  //MÉTODO PARA READ
  obtenerVideos() {
    //Crear petición al servidor (http) --> GET http://localhost:3000/obtener_videos
    let peticion = this.http.get<Video_modelo[]>(
      this.URL_API + '/obtener_videos'
    );
    return peticion;
  }

  datosInput: Video_modelo = {
    titulo: '',
    url: '',
    imagen: '',
    categoria: '',
    origen: '',
    estado: true,
    fecha: new Date(),
  };

  //MÉTODO PARA  CREATE
  create(datos: Video_modelo) {
    //petición HTTP al servidor de NODE --> POST http://localhost:3000/crear_video
    let peticion = this.http.post(this.URL_API + '/crear_video', datos);
    return peticion;
  }

  //MÉTODO PARA DELETE
  delete(id: string) {
    //petición HTTP al servidor de NODE --> DELETE http://localhost:3000/eliminar_video/12345AAD1231
    let peticion = this.http.delete(this.URL_API + '/eliminar_video/' + id);
    return peticion;
  }
}
