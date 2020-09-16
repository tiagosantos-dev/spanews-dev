import { Component, OnInit } from '@angular/core';
import {NewsService } from '../services/news.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private newsService: NewsService) { }

    public news;
    public actived:boolean;
  ngOnInit(): void {


  }

  


  onInput(e){


    if(!e.value){
      this.actived = false;
      console.log(e.value)

    }else{
      this.newsService.findNews(e.value).subscribe(response=>{
        console.log(response.articles)
        this.news = response.articles;
        this.actived = true;
      })
      
    }
  }

}
