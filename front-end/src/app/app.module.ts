import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListingComponent } from './user/user-listing.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from '../app/service/user-service.service';
import { NgbdModalBasic } from '../app/chat-box/popup.component';

@NgModule({
  declarations: [AppComponent, UserListingComponent, NgbdModalBasic],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,],
  providers: [UserService],
  exports: [UserListingComponent,NgbdModalBasic],
  bootstrap: [AppComponent, UserListingComponent,NgbdModalBasic],
})
export class AppModule {}
