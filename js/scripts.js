function buildArray(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return arr;
}

$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("#numberInput").val());

  });
});