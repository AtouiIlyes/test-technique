import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Party {
  id: number;
  title: string;
  date: string;
  nb_place: number;
  nb_place_available?: number;
  description: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  constructor(private http: HttpClient) {}

  getParties(): Observable<any> {
    return this.http.get('./assets/json/parties.json');
  }
}
