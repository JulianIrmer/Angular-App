import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

@Injectable()

export class PostComponent implements OnInit {
  isVisible:boolean = false;
  posts = [];

  constructor(private postArr:DataService) {
    this.posts = postArr.getData();
   }

  ngOnInit() {
  }

  toggleEditor(i){
    this.posts[i].isVisible = !this.posts[i].isVisible;
    console.log(this.posts[i].isVisible);
    console.log(this.posts[i].id);
  }

  saveChanges(id, title, author, content){
    
    for(let i = 0; i < this.posts.length; i++){
      if(title != '' && this.posts[i].id == id){
        this.posts[i].title = title;
      }
      if(author != '' && this.posts[i].id == id){
        this.posts[i].author = author;
      }
      if(content != '' && this.posts[i].id == id){
        this.posts[i].content = content;
      }
    }
    this.toggleEditor(id);
  }

  deletePost(id){
    this.posts.splice(id, 1);
  }
}



