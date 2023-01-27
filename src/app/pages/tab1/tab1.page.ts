import { Component, OnInit } from '@angular/core';
import { RespuestaTopHeadLines } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public noticias: any[]=[];

  constructor(private newService: NewsService) {}
  ngOnInit(): void {
    this.newService.getPost().subscribe(resp=>
      {
        this.noticias=[...resp,...this.noticias];
        //this.noticias = resp;
        console.log(this.noticias);
      });
  }

}
