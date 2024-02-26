import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  // firstName: string = '';
  // lastName: string = 'Yadav';

  // imageurl: string =
  //   'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1708744045~exp=1708747645~hmac=ebe8fbdef255efb2dbd946c0de3e08303918b9ced8d949136570f00f5428ac9d&w=996';

  // employee = {
  //   id: '101',
  //   name: 'jack',
  // };

  // imageUrl: string =
  //   'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg';

  // isDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  // getFirstnamelastName() {
  //   return this.firstName + ' ' + this.lastName;
  // }

  // disableButton() {
  //   this.isDisabled = true;
  // }

  // value = '';

  // updateName(event: KeyboardEvent) {
  //   this.value = (event.target as HTMLInputElement).value;
  // }

  firstName: string = 'Suraj Sutar';
  // inputField() {
  //   this.firstName = ' Suraj Sutar';
  // }

  // inputField() {
  //   this.firstName = '';
  // }

  // isDisabled: boolean = false;
  // updateInputValue() {
  //   this.isDisabled = true;
  // }

  typedName: string = '';

  updateName(event: Event) {
    this.typedName = (event.target as HTMLInputElement).value;
  }
}
