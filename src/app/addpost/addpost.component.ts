import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
@Injectable()

export class AddpostComponent implements OnInit {
isVisible:boolean = false;
posts = [];
post:Post;
id:number = 1;

  constructor(private postArr:DataService) {
    this.posts = postArr.getData();
   }

  ngOnInit() {
    
  }

  toggleEditor(){
    this.isVisible = !this.isVisible;
  }

  savePost(title, author, content, hashtag1, hashtag2, hashtag3){

    this.post = {
      id: this.id,
      title: title,
      author: author,
      content: content,
    }

    this.id++;

    if(this.post.title != '' && this.post.author != '' && this.post.content != ''){
      this.posts.push(this.post);
      this.toggleEditor();
    }
  }
}

interface Post{
  id:number,
  title:string,
  author:string,
  content:string,
}
