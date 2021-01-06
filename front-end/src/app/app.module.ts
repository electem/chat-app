import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListingComponent } from './user/user-listing.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserListingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,],
  providers: [],
  exports: [UserListingComponent],
  bootstrap: [AppComponent, UserListingComponent],
})
export class AppModule {}
