import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  //urlApi = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=8&_embed';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  urlApi = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?_embed';
  getPost(): Observable<any[]>
  {
    return this.http.get<any[]>(this.urlApi);
  }
  //la propiedad load more sirve para cargar de cache o actualizar
  getPostPorCategoria(id: number): Observable<any[]>
  {
    return this.http.get<any[]>('https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories='+id+'&_embed');
  }

}
