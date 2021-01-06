import {
	Component
} from '@angular/core';
import {UserService} from '../user-service.service';
import { ConnectionService } from 'ng-connection-service';

import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'chat-box-app',
	templateUrl: './chatbox.component.html'
})
export class ChatBoxComponent {
	closeResult = '';
    userId = 1;
    newMessage = '';
	failedMessages: any= [];
	profileName = 'Echo Bot';
	isConnected = true;
    noInternetConnection: boolean;

	constructor(private modalService: NgbModal, private userService: UserService, private connectionService: ConnectionService) {
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
	}

	open(content) {
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
		this.userService.sendMessage(messageBody)
		  .subscribe(
			response => {
			  console.log(response);
			},
			error => {
			  this.failedMessages.push(messageBody);
			  console.log(error);
			});
	  }

}