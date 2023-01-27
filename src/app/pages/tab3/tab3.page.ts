/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  get noticias(): any[]{
    return this.storage.localNoticias;
  }
  constructor(private storage: StorageService) {}

}
