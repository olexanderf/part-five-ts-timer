import * as moment from '../node_modules/moment/moment';

function timer(divName: string) {
  const div = document.getElementById(divName);
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');
  const btnMinus = document.createElement('button');
  const btnPlus = document.createElement('button');
  const btnStart = document.createElement('button');
  const time = document.createElement('p');
  const blockTimer = document.createElement('div');

  header.innerText = 'Timer';
  paragraph.innerText = 'Вкажіть час в хвилинах: ';
  btnMinus.innerText = '-';
  btnPlus.innerText = '+';
  btnStart.innerText = 'Start';
  time.innerText = '0';

  blockTimer.className = 'blockTimer';
  btnMinus.className = 'btn';
  btnPlus.className = 'btn';
  btnStart.className = 'btn start';

  btnMinus.addEventListener('click', () => {
    if (time.innerHTML !== '0') time.innerText = +time.innerText - 1 + '';
  });

  btnPlus.addEventListener('click', () => {
    time.innerText = +time.innerText + 1 + '';
  });

  btnStart.addEventListener('click', () => {
    let dur = moment.duration(+time.innerText, 'minutes');
    let interval = moment.duration(1, 'seconds');

    btnMinus.hidden = true;
    btnPlus.hidden = true;
    btnStart.hidden = true;

    setInterval(() => {
      if (dur.minutes() > 0 || dur.seconds() > 0) {
        dur.subtract(interval).seconds();
        time.innerText = `${dur.minutes()}:${
          dur.seconds() > 9 ? dur.seconds() : '0' + dur.seconds()
        }`;
      } else {
        time.innerText = '0';
        btnMinus.hidden = false;
        btnPlus.hidden = false;
        btnStart.hidden = false;
      }
    }, 1000);
  });

  div.append(header, paragraph, blockTimer, btnStart);
  blockTimer.append(btnMinus, time, btnPlus);
}

timer('timer');