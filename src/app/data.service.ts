import { Injectable, Directive } from '@angular/core';

@Injectable()
export class DataService {

    private arr = [];
    post:Post;
    post2:Post;

    constructor() {
        this.post = {
            id: 1,
            title: 'In need of a backend',
            author:'Julian Irmer',
            content: 'Hello! this is the first post ever made by me... and hardcoded. No data on this page is persistent. Do not put to much effort into your posts.',
            isVisible: false
          }

        this.post2 = {
            id: 0,
            title: 'hello there',
            author:'Julian Irmer',
            content: 'Hello! this is the first post ever made by me.',
            isVisible: false
          }
          this.arr.unshift(this.post);
          this.arr.unshift(this.post2);
     }
     

    setData(post) {
        this.arr.unshift(post);

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
    isVisible:boolean
}