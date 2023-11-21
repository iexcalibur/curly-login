import moment from 'moment';

export function getTimeAgoText(date: moment.MomentInput) {
  // moment.relativeTimeThreshold('ss');
  const momentAgoText = moment(date).fromNow(true);
  return momentAgoText.replace(' years', 'y')
  .replace('a year', '1y')
  .replace(' months', 'M')
  .replace('a month', '1M')
  .replace(' days', 'd')
  .replace('a day', '1d')
  .replace(' hours', 'h')
  .replace('an hour', '1h')
  .replace(' minutes', 'm')
  .replace('a minute', '1m')
  .replace(' seconds', 's')
  .replace('a second', '1s');
}

export function validateEmail(email:string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function containsSpecialChars(str: string) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

export function containsLowercaseLetter(str: string) {
  const lowercaseLetters = /[a-z]/;
  return lowercaseLetters.test(str);
}

export function containsUppercaseLetter(str: string) {
  const uppercaseLetters = /[A-Z]/;
  return uppercaseLetters.test(str);
}

const BILLION = 1000000000;
const MILLION = 1000000;
const KILO = 1000;

export function getCountText(count: number) {
  if(count >= BILLION) {
    return (count/BILLION).toFixed(1)+'B';
  } else if(count >= MILLION) {
    return (count/MILLION).toFixed(1)+'M';
  } else if(count >= KILO) {
    return (count/KILO).toFixed(1)+'K';
  } else {
    return count;
  }
}
