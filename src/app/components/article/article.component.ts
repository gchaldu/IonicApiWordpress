import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { StorageService } from 'src/app/services/storage-service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {

  @Input() noticia: any;
  @Input() index: number;
  constructor(private iab: InAppBrowser, private platform: Platform,
    private actionSheetCtrl: ActionSheetController, private socialShare: SocialSharing, private storage: StorageService) { }

  openNews() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      const browser = this.iab.create(this.noticia.link);
      browser.show();
      return;
    }
    window.open(this.noticia.link, '_blank');
  }

  async openMenu() {

    const articuloEnFavorito = this.storage.articulosEnFavoritos(this.noticia);
    const normalBtn: ActionSheetButton[] = [
      {
        text: articuloEnFavorito ? 'Remover de Favoritos...':'Favoritos',
        icon: articuloEnFavorito ? 'heart' : 'heart-outline',
        handler: () => this.addFavorite()
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
        cssClass: 'secondary'
      }
    ];

    const shareBtn: ActionSheetButton =
      {
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareNoticia()
      };

      if(this.platform.is('capacitor'))
      {
        normalBtn.unshift(shareBtn);
      }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: normalBtn
    });
    await actionSheet.present();
  }
  onShareNoticia() {
    // Check if sharing via email is supported
    this.socialShare.share(
      this.noticia.title.rendered,
      'La Bancaria Mar del Plata',
      null,
      this.noticia.link
    );
  }
  addFavorite() {
    this.storage.saveRemoveNoticia(this.noticia);
   }
}
