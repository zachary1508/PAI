import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { dajDanePogody } from './models/weather.model';
import { SerwisPogodowy } from './serwis-pogodowy/serwis-pogodowy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private serwisPogodowy: SerwisPogodowy){

  }

  cityName: string = 'Warszawa';
  DanePogody$: Observable<dajDanePogody> = this.serwisPogodowy.dajDanePogody(this.cityName)
  ngOnInit(): void {
    this.dajDanePogody(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.dajDanePogody(this.cityName);
    this.cityName = '';
   }
    private dajDanePogody(cityName: string){
      this.DanePogody$ = this.serwisPogodowy.dajDanePogody(this.cityName)

  }
  
}
