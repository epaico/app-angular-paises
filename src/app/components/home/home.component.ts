import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = []

  constructor(private service: PaisService) {
      this.getPaises()
  }

  ngOnInit(): void {}

  getPaises(){
    this.service.getAllPaisesByRegion("americas")
      .subscribe(res =>  this.paises = res);
  }

}
