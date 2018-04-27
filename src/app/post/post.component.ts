import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  arr = [];
  post:Post;
  post2:Post;
  isVisible:boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.post = {
      id: 1,
      title: 'Someone stole 34 eggs.',
      author:'Julian Irmer',
      content: 'Hello! this is the first post ever made by me... and all of this is just an example. And someone stole my eggs. No breakfast. mad.',
      hashtags: ["stolen", "egg", "noBreakfast"]
    }
    this.post2 = {
      id: 2,
      title: 'Hello There',
      author:'General Kenobi',
      content: 'Hello! this is the first post ever made by me... and all of this is just an example. And someone stole my eggs. No breakfast. mad.',
      hashtags: ["Star Wars", "hellothere", "Breakfast"]
    }

    this.arr.push(this.post);
    this.arr.push(this.post2);
  }

  toggleEditor(){
    this.isVisible = !this.isVisible;
  }

  saveChanges(title, author, content, hashtag1, hashtag2, hashtag3){
    if(title != ''){
      this.post.title = title;
    }
    if(author != ''){
      this.post.author = author;
    }
    if(content != ''){
      this.post.content = content;
    }
    if(hashtag1 != ''){
      this.post.hashtags.push(hashtag1);
    }
    if(hashtag2 != ''){
      this.post.hashtags.push(hashtag2);
    }
    if(hashtag3 != ''){
      this.post.hashtags.push(hashtag3);
    }
    this.isVisible = !this.isVisible;
  }
}

interface Post{
  id:number,
  title:string,
  author:string,
  content:string,
  hashtags:any[]
}

