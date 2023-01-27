import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  urlApi = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=8&_embed';
  urlApiDeportes = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=21&_embed';
  urlApiComercios = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=18&_embed';
  urlApiEducacion = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=26&_embed';
  urlApiGastronomia = 'https://asociacion.bancariamdp.org.ar/wp-json/wp/v2/posts?categories=17&_embed';

  public categorias: string[]=['Prensa','Deportes','Comercios','Educación','Gastronomia'];
  public categoriasId: number[]=[8,12,18,26,17];
  public categoryDefault=this.categorias[0];
  public selectCategoria;
  public noticias: any[]=[];

  constructor(private newService: NewsService) {
    this.selectCategoria=8;
  }
  ngOnInit(): void {
    this.newService.getPostPorCategoria(this.selectCategoria).subscribe(data=>{
      this.noticias=data;
      console.log(data);
    });
  }


  segmentChanged(categoria: Event)
  {
    if((categoria as CustomEvent).detail.value==='Deportes')
    {
      this.selectCategoria=21;
    }else if((categoria as CustomEvent).detail.value==='Comercios')
    {
      this.selectCategoria=18;
    }
    else if((categoria as CustomEvent).detail.value==='Educación')
    {
      this.selectCategoria=26;
    }else if((categoria as CustomEvent).detail.value==='Prensa')
    {
      this.selectCategoria=8;
    }else if((categoria as CustomEvent).detail.value==='Gastronomia')
    {
      this.selectCategoria=17;
    }
    this.newService.getPostPorCategoria(this.selectCategoria).subscribe(data=>{
      //this.noticias = [...this.noticias,...data];
      //this.noticias=data;
      this.noticias = [...data];
      console.log(data);
    });
    console.log((categoria as CustomEvent).detail.value);
    console.log(this.selectCategoria);
  }
  /* loadData()
  {
    console.log();
    this.newService.getPostPorCategoria(this.selectCategoria)
    .subscribe(data=>{
      //this.noticias = [...this.noticias,...data];
      this.noticias=data;
      this.infiniteScroll.complete();
    });
  } */
}
