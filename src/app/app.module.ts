import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './addpost/addpost.component';
import { DataService } from './data.service';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
