import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Pais} from "../models/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url = "https://restcountries.com/v3.1";

  private paises = ["peru", "argentina", "ecuador", "chile",
    "brazil", "paraguay", "venezuela", "uruguay", "bolivia"];

  constructor(private http: HttpClient) {
  }

  public getPais(name: string): Observable<any> {
    return this.http.get(`${this.url}/name/${name}`)
      .pipe(map((data: any) => data[0]));
  }

  public getPaises(name: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}/translation/${name}`)
      .pipe(
        map((data: any) => {
          return data.map((el: any) => this.toResponse(el))
        })
      );

  }

  public getAllPaisesByRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}/region/${region}`)
      .pipe(
        map((data: any) => {
          return data.filter((el: any) => this.paises.includes(el.name.common.toLowerCase()));
        }),
        map(
          (data: any) => {
            return data.map((el: any) => this.toResponse(el))
          }
        )
      )
  }

  private toResponse(data: any): Pais {
    return {
      name: data.name.common,
      capital: data.capital[0],
      flag: data.flags.svg,
    };
  }

}
