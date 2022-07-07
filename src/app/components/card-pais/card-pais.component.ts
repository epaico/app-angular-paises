import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-pais',
  templateUrl: './card-pais.component.html',
  styles: [
  ]
})
export class CardPaisComponent implements OnInit {

  @Input() pais: any = {}

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  verPais(name: string){
    this.router.navigate(['/paises/name',name]);
  }

}
