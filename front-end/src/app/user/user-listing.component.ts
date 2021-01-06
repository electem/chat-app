import {
	Component,
	OnInit
} from '@angular/core';
import {
	UserService
} from '../service/user-service.service';
@Component({
	selector: 'app-user-listing',
	templateUrl: './user-listing.component.html',
	styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

	userLists: any;
	userMessages: any = [{
		message: "hi .."
	}, {
		message: "deployment done."
	}];
	unSendMessage: number;
	showUserMessage: boolean = false;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.fetchUsers();
	}


	fetchUsers() {
		this.userService.fetchUsers()
			.subscribe(
				data => {
					this.userLists = data.users;
				});

	}

	fetchUserMessageById(userId: any) {
		if (this.showUserMessage)
			this.showUserMessage = false;
		else if (!this.showUserMessage)
			this.showUserMessage = true;
		this.userService.fetchMessageByUserId(userId)
			.subscribe(
				data => {
					let messages = data.message
					for (let i = 0; i < messages.length; i++) {
						this.userMessages.push(messages);
					}
				});
	}

	fetchMessageCount() {
		this.unSendMessage = 4;
	}



}