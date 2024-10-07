function calculate() {
  let inputOne = document.querySelector(".input-one").value;
  let inputTwo = document.querySelector(".input-two").value;
  let average = document.querySelector(".average").value;

  average = (inputOne + inputTwo) / 2;
  console.log(average);
}
