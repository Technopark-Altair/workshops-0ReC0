import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '123';
  superClass = 'red';

  outputHello() {
    console.log(this.title);
  }
}
