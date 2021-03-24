import { Component } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };
  clickedImage: string;
  clipboard: any;
  base64Image:any;
  constructor(
    private camera: Camera,
    private alertService: AlertController
  ) {

    
  }
  

}
