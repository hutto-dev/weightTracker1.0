function calculateAverage() {
  let dayOne = document.querySelector("js-day1").innerHTML;
  let dayTwo = document.querySelector("js-day2").innerHTML;
  let average = document.querySelector("js-average").innerHTML;

  average = (dayOne + dayTwo) / 2;
  console.log(average);
}
