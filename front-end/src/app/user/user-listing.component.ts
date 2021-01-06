import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service';
import  *  as  users  from  '../users.json';
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  userLists : any;
  userMessages: any = [{message:"hi .."},{message:"deployment done."}];
  unSendMessage: number;
  showUserMessage : boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }


  fetchUsers() {
    this.userService.fetchUsers()
      .subscribe(
        data => {
          this.userLists = data.users;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  fetchUserMessageById(userId : any){
    if(this.showUserMessage)
       this.showUserMessage = false;
    else if(!this.showUserMessage)
       this.showUserMessage = true;
    this.userService.fetchMessageByUserId(userId)
      .subscribe(
        data => {
          //this.userMessages = data.Message;
          //this.showUserMessage = true;
          console.log(this.userMessages);
        },
        error => {
          console.log(error);
        });
  }

  fetchMessageCount() {
    this.unSendMessage = 4;
  }



}
