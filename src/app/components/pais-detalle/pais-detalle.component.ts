import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styles: []
})
export class PaisDetalleComponent implements OnInit {

  paisSeleccionado: any = {}
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {
    activatedRoute.params.subscribe(param => {
      this.getPais(param['name'])
    });
  }

  ngOnInit(): void {
  }

  getPais(name: string) {
    this.loading = true;
    this.paisService.getPais(name)
      .subscribe(data => {
        this.paisSeleccionado = data;
        this.loading = false
      });
  }

}
