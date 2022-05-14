import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  constructor(private tareaServicio: MiServicioService) {}

  ngOnInit(): void {
    //console.log(this.tareaServicio.obtenerTareas());
    this.tareaServicio.obtenerTareas().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}

//clase
// atributos (variables)
// metodos (funciones)
