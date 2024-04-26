import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController:AlertController) {}
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pacote adquirido com sucesso!',
      subHeader: '',
      message: 'Boa viagem, para mais informações verique seu E-mail',
      buttons: ['Fechar'],
    });

    await alert.present();
  }
}
