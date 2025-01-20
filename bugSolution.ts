function printString(str: string | null | undefined): void {
  if (str) {
    console.log(str);
  }
}

function printNumber(num: number | null | undefined): void {
  if (num !== undefined && num !== null) {
    console.log(num);
  }
}

function processValue(value: string | number | null | undefined): void {
  if (typeof value === 'string') {
    printString(value);
  } else if (typeof value === 'number'){
    printNumber(value);
  } else {
    console.log("Value is null or undefined")
  }
}

processValue("hello");
processValue(123);
processValue(null);
processValue(undefined);