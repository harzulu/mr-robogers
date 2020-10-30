function buildArray(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return addBeep(arr);
}

function addBeep(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + '').includes('1')) {
      arr[i] = "beep!";
    } else if ((arr[i] + '').includes('2')) {
      arr[i] = "boop!";
    } else if ((arr[i] + '').includes('3')) {
      arr[i] = "won't you be my neighbor?";
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