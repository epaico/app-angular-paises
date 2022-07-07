import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url = "https://restcountries.com/v3.1";

  private paises = ["peru","argentina","ecuador","chile",
  "brazil","paraguay","venezuela","uruguay","bolivia"];

  constructor(private http: HttpClient) { }

  public getPais(name:string):Observable<any>{
    return this.http.get(`${this.url}/name/${name}`)
      .pipe(map((data:any) => data[0]));
  }

  public getPaises(name:string):Observable<any>{
    return this.http.get(`${this.url}/name/${name}`)
  }

  public getAllPaisesByRegion(region: string): Observable<any>{
    return this.http.get(`${this.url}/region/${region}`)
      .pipe(
        map((data:any) => {
          return data.filter( (item:any) => this.paises.includes(item.name.common.toLowerCase()))
        })
      )
  }

}
