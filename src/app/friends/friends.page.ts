import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';




@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor(
    
    private friendsService: FriendsService) { }

  ngOnInit() {
   
    this.friendsService.getData('top-headlines?sources=buzzfeed').subscribe(data => {console.log(data);
     
    })
  }

}
