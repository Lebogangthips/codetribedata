import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';

import { InfoPage } from '../info/info';

import Array from '../../pages/array';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Name;
  Surname;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  Start(){

if(this.Name != undefined && this.Surname != undefined){

    
    this.navCtrl.push(InfoPage);

Array[0] = this.Name;
Array[1] = this.Surname;


}

else{
  
  const alert = this.alertCtrl.create({
    title: 'Hello friend!!',
    subTitle: 'Please eneter your name and surname.',
    buttons: ['OK']
  });
  alert.present();
  
}



  }

}
