import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertService } from "src/app/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toast: AlertService) {
      this.initializeApp()
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backbuttonSubscribeMethod();
    });
  }
  backbuttonSubscribeMethod(){
    let a = 0;
    this.platform.backButton.subscribe(()=>{
      a++;
      if(a <= 2){
        this.toast.toastError("Tekan 2 Kali Untuk Keluar");
      }else{
        navigator['app'].exitApp();
      }
    })
  }
  ngOnDestroy(){
    this.platform.backButton.unsubscribe();
  }
}
