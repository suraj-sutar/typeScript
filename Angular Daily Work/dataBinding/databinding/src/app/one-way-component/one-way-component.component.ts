import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-component',
  templateUrl: './one-way-component.component.html',
  styleUrls: ['./one-way-component.component.css'],
})
export class OneWayComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userValue: string = '';

  //Assignment 3
  userInput(event: any) {
    this.userValue = event.target.value;
  }
}
