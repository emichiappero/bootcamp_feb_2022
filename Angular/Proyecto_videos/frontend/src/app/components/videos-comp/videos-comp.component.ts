// COMPONENTE
import { Component, OnInit } from '@angular/core';
import { VideosServService } from '../../services/videos-serv.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'videos-comp',
  templateUrl: './videos-comp.component.html',
  styleUrls: ['./videos-comp.component.css'],
})
export class VideosCompComponent implements OnInit {
  constructor(public videoServ: VideosServService) {}

  ngOnInit(): void {
    this.obtenerVideos();
  }

  //Llamar al método READ del Servicio
  obtenerVideos() {
    this.videoServ.obtenerVideos().subscribe({
      next: (res) => {
        console.log('------ Obteniendo videos - READ ------');
        this.videoServ.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }

  //Llamar al método CREATE del Servicio
  agregarVideo(form: NgForm) {
    this.videoServ.create(form.value).subscribe(
      (res) => {
        console.log('------ Agregando un nuevo video - CREATE ------');
        this.obtenerVideos(); //llamo al método para obtener todos los documentos
        form.reset(); //borrar formulario
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  eliminarVideo(id: any) {
    let respuesta = confirm('Desea eliminar el Video ID: ' + id);
    console.log(respuesta); //true o false
    if (respuesta == true) {
      //Hizo click en Aceptar
      this.videoServ.delete(id).subscribe(
        (res) => {
          console.log('------ Eliminando un nuevo video - DELETE ------');
          this.obtenerVideos(); //llamo al método para obtener todos los documentos
        },
        (err) => console.log(err)
      );
    }
  }
}
