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
	userMessages: any = [];
	showUserMessage = false;
	userIdToShowMessage: any;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.fetchUsers();
	}

	fetchUsers() {
		this.userService.fetchUsers()
			.subscribe(
				data => {
					this.userLists = data.users;
					for (let i = 0; i < this.userLists.length; i++) {
						this.userLists[i].showMessage = false;
					}
				});
	}

	fetchUserMessageById(userId: any) {
		if (this.userIdToShowMessage !== null && this.userIdToShowMessage !== undefined) {
			if (this.userIdToShowMessage !== userId) {
				this.setUserShowMessageTrue(this.userIdToShowMessage);
			}
		}
		this.userIdToShowMessage = userId;
		this.userMessages = [];
		this.userService.fetchMessageByUserId(userId)
			.subscribe(
				data => {
					if (data !== null && data !== undefined && data.Message) {
						const messages = data.Message;
						for (let i = 0; i < messages.length; i++) {
							if (i === messages.length - 1) {
								this.userMessages.push(messages[i]);
							}
						}
					}
					this.setUserShowMessageTrue(userId);
				});
	}

	setUserShowMessageTrue(userId) {
		for (let i = 0; i < this.userLists.length; i++) {
			if (userId === this.userLists[i].id) {
				if (this.userLists[i].showMessage)
					this.userLists[i].showMessage = false;
				else if (!this.userLists[i].showMessage)
					this.userLists[i].showMessage = true;
			}
		}
	}
}