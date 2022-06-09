import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dajDanePogody } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class SerwisPogodowy  {

  constructor(private http: HttpClient) { }

  dajDanePogody(miasto: string): Observable<dajDanePogody>{
    return this.http.get<dajDanePogody>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', miasto)
        .set('units', 'metric')
        .set('mode', 'json')
      
    })

  }

}
