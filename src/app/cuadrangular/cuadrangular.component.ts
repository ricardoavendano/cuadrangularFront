
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { EquipoRq } from './equipoRq';
@Component({
  selector: 'app-cuadrangular',
  templateUrl: './cuadrangular.component.html',
  styleUrls: ['./cuadrangular.component.css']
})
export class LigaListComponent implements OnInit {

  Liga: any = [];
  Equipo: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
  }

  cargarLiga(numeroEquipos: number) {

    const equipoRq = new EquipoRq();
    equipoRq.numeroEquipo = numeroEquipos;

    return this.restApi.crearLiga(equipoRq).subscribe((data: {}) => {
      this.Liga = data;
    });
  }

  guardarResultado(Liga: any) {

    return this.restApi.guardarResultado(Liga).subscribe((data: {}) => {
      this.Equipo = data;
    });

  }
}
