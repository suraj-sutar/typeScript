import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.css'],
})
export class OneWayDataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';
  bindvalue(event: any) {
    this.value = event.target.value;
  }

  //Assignment 2

  changeValue: string = '';
  onClickMe() {
    this.changeValue = 'Change the Value After Click On Button';
  }
}
