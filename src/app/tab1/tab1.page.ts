import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  base64Image:any;

  constructor(
    private alertCtrl: AlertController,
    private camera: Camera,
  ) {}

  test(){
    console.log("Test");
  }
  
  async presentCamera() {
    const confirm = await this.alertCtrl.create({
      header: "Konfirmasi",
      message: "Apakah Anda yakin ingin membuka camera?",
      buttons: [
        {
          text: "Batal",
          handler: () => { }
        },
        {
          text: "Buka",
          handler: () => {
            this.openCamera();
          }
        }
      ]
    });

    confirm.present();
  }

  
  openCamera() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        console.log(err);
        // Handle error
      }
    );
  }
}
