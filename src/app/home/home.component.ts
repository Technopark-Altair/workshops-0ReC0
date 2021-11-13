import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  isGood = false;
  names = ['Tom', '1', '3213'];

  ngOnInit(): void {}

  toggle() {
    // this.isGood = !this.isGood;
    // for (let name of this.names) {
    //   console.log(name);
    // }
    this.names.push('12345');
  }
}
