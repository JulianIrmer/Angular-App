import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
isVisible:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  toggleEditor(){
    this.isVisible = !this.isVisible;
  }

  savePost(title, author, content){
  }

  discardPost(){
    
  }
}
