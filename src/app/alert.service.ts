import { Injectable } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastController: ToastController
  ) { }
  
  async toastSuccess(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
      color: "success",
      mode: 'ios'
    });

    await toast.present();
  }

  async toastError(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "bottom",
      color: "danger",
      mode: 'ios'
    });

    await toast.present();
  }
}
