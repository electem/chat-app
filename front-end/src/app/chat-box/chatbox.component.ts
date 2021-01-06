import {
	Component
} from '@angular/core';
import {
	UserService
} from '../service/user-service.service';
import {
	ConnectionService
} from 'ng-connection-service';

import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";

@Component({
	selector: 'chat-box-app',
	templateUrl: './chatbox.component.html'
})
export class ChatBoxComponent {
	closeResult = '';
	userId = 1;
	newMessage = '';
	failedMessages: any = [];
	profileName = 'Echo Bot';
	isConnected = true;
	noInternetConnection: boolean;
	buttonColour: string;
	failedMessageCount: number;
	userMessages: any = [];
	userLists: any;

	constructor(private modalService: NgbModal, private userService: UserService, private connectionService: ConnectionService) {
		this.userId = this.randomIntFromInterval(1, 5);
		this.fetchUserById(this.userId);
		this.connectionService.monitor().subscribe(isConnected => {

			if (this.isConnected) {
				this.failedMessages.forEach(element => {
					if (element.user_id && element.message) {
						this.newMessage = element.message;
						this.userId = element.user_id;
						this.sendMessage();
					}
				});
			}

		})

		this.failedMessageCount = this.failedMessages.length;
	}

	randomIntFromInterval(min, max) { // min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	open(content) {
		this.newMessage = "";
		this.modalService.open(content, {
			ariaLabelledBy: 'modal-basic-title'
		}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
			this.sendMessage();
		}, (reason) => {
			this.closeResult = `Dismissed`;
		});
	}

	sendMessage() {
		const messageBody = {
			message: this.newMessage,
			user_id: this.userId
		};
		this.changeColourBeforeCall();
		setTimeout(() => {
			this.userService.sendMessage(messageBody)
				.subscribe(
					response => {
						console.log(response);
						this.changeSendButtonColour();
					},
					error => {
						this.failedMessages.push(messageBody);
						console.log(error);
						this.failedMessageCount = this.failedMessages.length;
						this.changeSendButtonColour();
					});
		}, 500);
	}

	changeSendButtonColour() {
		$('#chatButton').css('color', 'white');
		if (this.failedMessages.length === 0) {
			$('#chatButton').css('background-color', '#008000c7');
		} else if (this.failedMessages.length > 0) {
			$('#chatButton').css('background-color', 'red');
		}
		setTimeout(() => {
			$('#chatButton').css('background-color', 'white');
			$('#chatButton').css('color', 'blue');
		}, 1000);
	}


	changeColourBeforeCall() {
		$('#chatButton').css('color', 'white');
		$('#chatButton').css('background-color', 'yellow');
	}

	fetchUserById(userId: any) {
		this.userService.fetchUsers()
			.subscribe(
				data => {
					this.userLists = data.users;
					for (let i = 0; i < this.userLists.length; i++) {
						if (userId === this.userLists[i].id) {
							this.profileName = this.userLists[i].name;
						}
					}
				});
	}
}