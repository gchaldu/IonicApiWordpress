/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
//import { timeStamp } from 'console';
//import { threadId } from 'worker_threads';


@Injectable({
  providedIn: 'root'
})
export class PushService implements OnInit {
  firestoreService: any;


  constructor(public plataforma: Platform) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  token = '';
  ngOnInit() {
    console.log('Initializing HomePage');
    this.inicializar();
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
  }

  inicializar() {
    if (this.plataforma.is('capacitor')) {
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          console.log('Permiso otorgado');
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
          this.addListeners();
        } else {
          // Show some error
          console.log('Permiso denegado');
        }
      });
    }else{
      console.log('PushNotifications.requestPermissions--> NO ES MOVIL');
    }
  }
  addListeners()
  {
    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success');
      this.guardarToken(token.value);

    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }

  guardarToken(token: string){
    this.token=token;
  }
}//fin
