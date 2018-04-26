import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  srcpath:string="";
listItems:any[]=["Movie One", "Movie Two", "Movie 3", "Movie 4"];
  constructor() { }

  ngOnInit() {
  }

}
