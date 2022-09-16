import { sayHello } from './great';
// import * as moment from "../node_modules/moment";

function showTimer(divName: string) {
  const div = document.getElementById(divName);
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');
  const btnMinus = document.createElement('button');
  const btnPlus = document.createElement('button');
  const btnStart = document.createElement('button');
  const time = document.createElement('p');

  header.innerText = 'Timer';
  paragraph.innerText = 'Вкажіть час в хвилинах: ';
  btnMinus.innerText = '-';
  btnPlus.innerText = '+';
  btnStart.innerText = 'Start';

}
//timer
// function

showTimer('timer');
