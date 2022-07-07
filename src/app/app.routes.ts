import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PaisDetalleComponent} from "./components/pais-detalle/pais-detalle.component";
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paises/name/:name', component: PaisDetalleComponent},
  {path: 'buscar', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING =RouterModule.forRoot(routes, {useHash: true});
