function buildArray(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return addBeep(arr);
}

function addBeep(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr[i] = "beep!";
    }
  }

  return arr;
}

$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("#numberInput").val());
    console.log(buildArray(number));
  });
});