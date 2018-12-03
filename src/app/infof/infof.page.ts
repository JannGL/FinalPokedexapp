import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-infof',
  templateUrl: './infof.page.html',
  styleUrls: ['./infof.page.scss'],
})
export class InfofPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad(){

    console.log('ionViewDidLoad InfofPage');
  }

  ngOnInit() {
  }

}
