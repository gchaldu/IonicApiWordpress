/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localNoticias: any[]=[];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
    this.loadFavoritos();
  }
  async saveRemoveNoticia(noticia: any)
  {
    // eslint-disable-next-line no-underscore-dangle
    const existe = this._localNoticias.find(localNoticia=>localNoticia.id === noticia.id);

    if(existe)
    {
      // eslint-disable-next-line no-underscore-dangle
      this._localNoticias = this._localNoticias.filter(local=>local.id !== noticia.id);
    }else{
      // eslint-disable-next-line no-underscore-dangle
      this._localNoticias = [noticia,...this._localNoticias];
    }
    // eslint-disable-next-line no-underscore-dangle
    await this._storage.set('noticia', this._localNoticias);
  }

  async loadFavoritos()
  {
    try {
      const noticia = await this._storage.get('noticia');
      this._localNoticias= noticia || [];
    }catch (error) {
    }
  }

  get localNoticias(){
    return[...this._localNoticias];
  }

  articulosEnFavoritos(noticia: any)
  {
    return !!this._localNoticias.find(localNoticia=>localNoticia.id === noticia.id);
  }
}
