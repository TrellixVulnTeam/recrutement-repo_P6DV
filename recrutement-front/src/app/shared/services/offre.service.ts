import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../model/candidat';
import {Offre} from '../model/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private url = environment.apiUrl + '/offre';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Offre[]> {
    return this.httpClient.get<Offre[]>(this.url + '/available');
  }

  public getBySociete(id: any): Observable<Offre[]> {
    return this.httpClient.get<Offre[]>(this.url + '/societe/' + id);
  }

  public save(file: File , offre: any): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('offre', offre);
    return this.httpClient.post(this.url , formData);
  }
  public update(offre: Offre): Observable<any> {
    return this.httpClient.put(this.url , offre);
  }
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  public getById(id: any): Observable<Offre> {
    return this.httpClient.get<Offre>(this.url + '/' + id);
  }

  public changeEtat(id: any): Observable<any> {
    return this.httpClient.get(this.url + '/etat/' + id);
  }
}