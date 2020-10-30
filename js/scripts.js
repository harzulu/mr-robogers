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
      arr[i] = ("won't you be my neighbor?");
    } else if ((arr[i] + '').includes('2')) {
      arr[i] = "boop!";
    } else if ((arr[i] + '').includes('1')) {
      arr[i] = "beep!";
    }
  }
  return arr;
}

$(document).ready(function() {
  $("#intro").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    const backColor = $("#color").val();
    document.body.style.background = backColor;
    $("#intro").fadeOut();
    $("#inputNumber").fadeIn();
  });
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("#numberInput").val());
    let finishedArr = buildArray(number);
    finishedArr.forEach(function(element) {
      $("#result").append(element + ", ");
    });
    $("#inputNumber").fadeOut();
    $(".outputNumber").fadeIn();
    $(".restart").submit(function(event) {
      event.preventDefault();
      location.reload();
    });
  });
});