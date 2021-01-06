import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListingComponent } from './user/user-listing.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from '../app/service/user-service.service';
import { ChatBoxComponent } from './chat-box/chatbox.component';

@NgModule({
  declarations: [AppComponent, UserListingComponent, ChatBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,],
  providers: [UserService],
  exports: [UserListingComponent,ChatBoxComponent],
  bootstrap: [AppComponent, UserListingComponent,ChatBoxComponent],
})
export class AppModule {}