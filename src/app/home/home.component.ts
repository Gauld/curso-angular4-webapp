import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titulo : string;
  constructor() {
    this.titulo="Home";
   }

  ngOnInit(): void {
    console.log("home ts loaded")
  }

}
