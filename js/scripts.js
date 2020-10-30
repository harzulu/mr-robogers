function setPicture(input) {
  if (input === 1) {
    $(".images").append('<img class="image" src="img/mr-rogers2.jpg" alt="mr rogers sitting">');
    $(".images").append('<img class="image" src="img/summer-robot.jpg" alt="mr rogers sitting">');
  } else if (input === 2) {
    $(".images").append('<img class="image" src="img/mr-rogers1.jpg" alt="mr rogers sitting">');
    $(".images").append('<img class="image" src="img/fall-robot.jpg" alt="mr rogers sitting">');
  } else if (input === 3) {
    $(".images").append('<img class="image" src="img/mr-rogers4.jpg" alt="mr rogers sitting">');
    $(".images").append('<img class="image" src="img/winter-robot.png" alt="mr rogers sitting">');
  } else if (input === 4) {
    $(".images").append('<img class="image" src="img/mr-rogers3.jpg" alt="mr rogers sitting">');
    $(".images").append('<img class="image" src="img/spring-robot.webp" alt="mr rogers sitting">');
  } else if (input === 5) {
    $(".images").append('<img class="image" src="img/mr-rogers5.jpg" alt="mr rogers sitting">');
    $(".images").append('<img class="image" src="img/bender-robot.jpg" alt="mr rogers sitting">');
  }
}

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
  $(".intro").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    const backColor = $("#color").val();
    const favSeason = parseInt($("input:radio[name=season]:checked").val());
    document.body.style.background = backColor;
    setPicture(favSeason);
    $(".intro").fadeOut();
    $(".images").fadeIn();
    $(".inputNumber").fadeIn();
  });
  $(".inputNumber").submit(function(e) {
    e.preventDefault();
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