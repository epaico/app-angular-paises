import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  paises: any[] = []
  loading: boolean = false
  errors: boolean = false

  constructor(private service: PaisService) {
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.loading = true
    this.service.getPaises(termino)
      .subscribe((data: any) => {
          this.paises = data;
          this.loading = false;
          this.errors= false;
        },
        (err) => {
          this.loading = false;
          this.paises = [];
          this.errors = true;
        })
  }

}
