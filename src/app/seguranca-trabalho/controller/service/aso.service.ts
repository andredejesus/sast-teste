import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Exame, Aso, FiltroDTO } from './../models/aso';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsoService {

  apiURL: string = 'api';

  constructor(private http: HttpClient) { }

  salvarExame(exame:Exame) : Observable<Exame>{
    return this.http.post<Exame>(`${environment.API}/${this.apiURL}/exame`, exame);
  }

  salvarAso(aso:Aso): Observable<Aso>{
    return this.http.post<Aso>(`${environment.API}/${this.apiURL}/aso`, aso);
  }

  listaAso():Observable<Aso[]>{
    return this.http.get<Aso[]>(`${environment.API}/${this.apiURL}/aso`);
  }

  buscaAsoPorId(id:number):Observable<Aso>{
    return this.http.get<Aso>(`${environment.API}/${this.apiURL}/aso/${id}`)
  }

  buscaExamesPorAso(id_aso:number):Observable<Exame[]>{
    return this.http.get<Exame[]>(`${environment.API}/${this.apiURL}/exame/${id_aso}`);
  }

  alteraAso(aso: Aso): Observable<Aso>{
    return this.http.put<Aso>(`${environment.API}/${this.apiURL}/aso`, aso);
  }

  alteraExames(exame: Exame): Observable<Exame>{
    return this.http.put<Exame>(`${environment.API}/${this.apiURL}/exame`, exame);
  }

  deletaExames(id:number): Observable<Exame>{
      return this.http.delete<Exame>(`${environment.API}/${this.apiURL}/exame/${id}`);
  }

  deletaExamesPorIdAso(id_aso:number): Observable<Exame>{
    return this.http.delete<Exame>(`${environment.API}/${this.apiURL}/exame/${id_aso}`);
  }

  deletaAso(id:number):Observable<Aso>{
    return this.http.delete<Aso>(`${environment.API}/${this.apiURL}/aso/${id}`);
  }

  filtroAso(filtroDTO: FiltroDTO):Observable<any>{
    return this.http.post<FiltroDTO>(`${environment.API}/${this.apiURL}/aso/filtro`, filtroDTO);

  }


}
