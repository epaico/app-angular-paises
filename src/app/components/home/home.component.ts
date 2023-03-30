import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../models/pais";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: Pais[] = []

  constructor(private service: PaisService) {
    this.getPaises()
  }

  ngOnInit(): void {
  }

  getPaises() {
    this.service.getAllPaisesByRegion("americas")
      .subscribe(res => this.paises = res);
  }

}
