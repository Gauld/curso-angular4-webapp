import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-angular',
  templateUrl: './basic-angular.component.html',
  styleUrls: ['./basic-angular.component.scss']
})
export class BasicAngularComponent implements OnInit {
  title = 'curso-angular4-webapp';

  constructor() { }

  ngOnInit(): void {
  }

}
