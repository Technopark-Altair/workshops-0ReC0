import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDay = true;
  superClass = 'red';

  outputHello() {
    // if (this.superClass === 'red' || this.superClass === 'green') {
    //   console.log('Сейчас день, позавтракайте');
    // } else {
    //   console.log('Сейчас ночь, ложитесь спать');
    // }
    // let result = this.superClass !== 'red' ? 'супер верно' : 'сорян, неверно';
    // console.log(result);
    // if (this.superClass === 'red' && this.isDay) {
    //   console.log('Сейчас день, позавтракайте, настроение красное');
    // } else {
    //   console.log('Сейчас ночь, ложитесь спать, настроение не красное');
    // }
    // if (this.superClass !== 'red') {
    //   console.log('Сейчас ночь, ложитесь спать, настроение не красное');
    // } else {
    //   console.log('Сейчас день, позавтракайте, настроение красное');
    // }
    // let i = 0;
    // while (i < 30) {
    //   console.log(i, 'все еще меньше 30');
    //   i++;
    // }
    // console.log(i, 'теперь 30');
    // let i = 0;
    // do {
    //   console.log(i,);
    //   i++;
    // } while (i < 30);
    // console.log(i, 'теперь 30');
    // for (let i = 0; i < 30; i++) {
    //   console.log(i, 'все еще меньше 30');
    // }
    // console.log('теперь 30');
    // for (let i = 0; i < 30; i++) {
    //   if (i === 15) {
    //     console.log('вышли из цикла');
    //     break;
    //   }
    //   console.log(i, 'все еще меньше 30');
    // }
    // console.log('теперь 30');
    // for (let i = 0; i < 30; i++) {
    //   if (i === 15) {
    //     console.log('пропустили 15 итерацию из цикла');
    //     continue;
    //   }
    //   console.log(i, 'все еще меньше 30');
    // }
    // console.log('теперь 30');
    //   outFor: for (let i = 0; i < 5; i++) {
    //     for (let j = 0; j < 5; j++) {
    //       if (i === 3 && j == 3) {
    //         console.log('j', j, 'пропустили 3 итерацию из цикла');
    //         break outFor;
    //       }
    //       console.log('j', j);
    //     }
    //     console.log(i, 'все еще меньше 5');
    //   }
    //   console.log('теперь 5');
    // let mySecret = 2;
    // switch (mySecret) {
    //   case 4:
    //   // console.log('4 я отгадал');
    //   // break;
    //   case 5:
    //     console.log('4 или 5 я отгадал');
    //     break;
    //   default:
    //     console.log('я не отгадал');
    //     break;
    // }
  }
}
