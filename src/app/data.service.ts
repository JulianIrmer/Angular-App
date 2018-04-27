import { Injectable, Directive } from '@angular/core';

@Injectable()
export class DataService {

    private arr = [];
    post:Post;

    constructor() {
        this.post = {
            id: 0,
            title: 'In need of a backend',
            author:'Julian Irmer',
            content: 'Hello! this is the first post ever made by me... and hardcoded. No data on this page is persistent. Do not put to much effort in your posts.'
          }
          this.arr.push(this.post);
     }
     

    setData(post) {
        this.arr.push(post);
    }
    getData() {
        return this.arr;
    }
}

interface Post{
    id:number,
    title:string,
    author:string,
    content:string,
}