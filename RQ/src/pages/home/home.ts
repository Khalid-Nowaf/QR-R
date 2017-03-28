
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:any;
  public lockup: {};
  public pass:boolean = false;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public toastCtrl: ToastController) {
    this.lockup = {
      "100001":true,
      "100002":true,
      "100003":false
    };
 
  }

  public scan(){
       this.barcodeScanner.scan().then((barcodeData) => {
          this.data = JSON.stringify(barcodeData);
              if(this.lockup[barcodeData.text]){
                let toast = this.toastCtrl.create({
                message: 'Good to go !! ' + barcodeData.text,
                duration: 3000
                });
                toast.present();
              }
              else{
                  let toast = this.toastCtrl.create({
                  message: 'Not Good to go !! ' + barcodeData.text,
                  duration: 3000
                  });
                toast.present();
              }
          }, (err) => {
              this.data = err;
      });
    }

}
