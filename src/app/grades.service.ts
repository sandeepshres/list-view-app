import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grades } from './grades';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private url = '/assets/data/grades.json';

  constructor(private http: HttpClient) { }

  getGrades(): Observable<Grades[]> {
    return this.http.get<Grades[]>(this.url);
  }
}
