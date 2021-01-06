import {
	BrowserModule
} from '@angular/platform-browser';
import {
	NgModule
} from '@angular/core';
import {
	FormsModule
} from '@angular/forms';
import {
	AppComponent
} from './app.component';
import {
	UserListingComponent
} from './user/user-listing.component';
import {
	HttpClientModule, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
	UserService
} from '../app/service/user-service.service';
import {
	ChatBoxComponent
} from './chat-box/chatbox.component';
import { ConnectionServiceModule } from 'ng-connection-service';
import {
	AppCommonServiceService
} from './app.common.service.service';

@NgModule({
	declarations: [AppComponent, UserListingComponent, ChatBoxComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ConnectionServiceModule,],
	exports: [UserListingComponent, ChatBoxComponent],
	bootstrap: [AppComponent, UserListingComponent, ChatBoxComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AppCommonServiceService,
			multi: true
		}, UserService

	]
})
export class AppModule { }
