function buildArray(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return addText(arr);
}

function addText(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + '').includes('3')) {
      arr[i] = "won't you be my neighbor?";
    } else if ((arr[i] + '').includes('2')) {
      arr[i] = "boop!";
    } else if ((arr[i] + '').includes('1')) {
      arr[i] = "beep!";
    }
  }
  return arr;
}

$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("#numberInput").val());
    let finishedArr = buildArray(number);
    finishedArr.forEach(function(element) {
      $("#result").append("<li>" + element + "</li>");
    });
  });
});