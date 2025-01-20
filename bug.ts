function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

function processValue(value: string | number): void {
  if (typeof value === 'string') {
    printString(value);
  } else {
    printNumber(value);
  }
}

processValue("hello"); // Works fine
processValue(123); // Works fine

// This line will throw an error
processValue(null);