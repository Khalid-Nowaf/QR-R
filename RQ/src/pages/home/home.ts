
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:any;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
    
 
  }

  public scan(){
       this.barcodeScanner.scan().then((barcodeData) => {
 this.data = JSON.stringify(barcodeData);
}, (err) => {
    this.data = err;
});

  }

}
