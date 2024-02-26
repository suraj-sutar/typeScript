//Syntax for creating component using CMD
//ng g c ComponentName;
//ng--> Angular
//g--> generate
//c-->component

// Thsi is the way to create component Manually
//first create class into .ts file that you created for new component
//then create decorator
//after that we can pass property like:-
//selector,template,templateUrl ect
// then add that component into app.Module.ts in Declaration section
//then add that selector into appComponent.html File to display Output

import { Component, ViewEncapsulation } from '@angular/core';

//Decorator
@Component({
  selector: 'app-test',
  template: '<h1 class="test">This is my test component</h1>', //contain html code ,This is internal template
  encapsulation: ViewEncapsulation.None,
})
//class
export class TestComponent {}
