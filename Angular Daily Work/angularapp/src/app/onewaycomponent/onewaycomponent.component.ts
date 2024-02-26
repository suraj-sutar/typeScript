import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaycomponent',
  templateUrl: './onewaycomponent.component.html',
  styleUrls: ['./onewaycomponent.component.css'],
})
export class OnewaycomponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  typedName: string = 'suraj';

  onNameChange(event: any) {
    console.log(event);

    let val = event.target.value;

    this.typedName = event.target.value;
  }
}
