import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { NavController } from '@ionic/angular';
import { InfofPage } from '../infof/infof.page';





@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private friendsService: FriendsService) { }

    openFirstPage(){

this.navCtrl.push('infofpage');
  

    }

  ngOnInit() {
   
  
     
    }
  }


