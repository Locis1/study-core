import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private c_apiUrl = 'http://localhost:9090';
  private java_apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getHtmlStatus(path: string = ''): Observable<string> {
    return this.http.get(`${this.c_apiUrl}/${path}`, { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('Error fetching HTML:', error);
        return of('<p>Backend is down</p>');
      }),
    );
  }

private fetchJson<T>(endpoint: string, fallback: T): Observable<T> {
    return this.http.get<T>(`${this.c_apiUrl}/${endpoint}`).pipe(
      catchError((error) => {
        console.error(`FEHLER beim Laden von ${endpoint}:`, error);
        return of(fallback); // Gibt den spezifischen Fallback zurück
      })
    );
  }

  getHealthStatus(): Observable<any> {
    // Ruft die Hilfsmethode auf: Pfad rein, Fallback-Objekt rein. Fertig.
    return this.fetchJson<any>('api/v1/health', { status: 'DOWN' });
  }
}
