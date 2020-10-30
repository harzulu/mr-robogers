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
    $(".images").append('<img class="image" src="img/wall-e.jpg" alt="mr rogers sitting">');
  }
}

function buildArray(number, name) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return addText(arr, name);
}

function addText(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + '').includes('3')) {
      arr[i] = ("won't you be my neighbor " + name + "?");
    } else if ((arr[i] + '').includes('2')) {
      arr[i] = "boop!";
    } else if ((arr[i] + '').includes('1')) {
      arr[i] = "beep!";
    }
  }
  return arr;
}

function countBeeps(arr) {
  let beeps = 0;
  let boops = 0;
  let neighbors = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "beep!") {
      beeps++;
    } else if (arr[i] === "boop!") {
      boops++;
    } else if (!Number.isInteger(arr[i])) {
      neighbors++;
    }
  }
  let finalArr = [beeps, boops, neighbors];
  return finalArr;
}

$(document).ready(function() {
  let name;
  $(".intro").submit(function(event) {
    event.preventDefault();
    name = $("#name").val();
    const favSeason = parseInt($("input:radio[name=season]:checked").val());
    setPicture(favSeason);
    $(".intro").fadeOut();
    $(".images").fadeIn();
    $(".inputNumber").fadeIn();
  });
  $(".inputNumber").submit(function(e) {
    e.preventDefault();
    let number = parseInt($("#numberInput").val());
    let finishedArr = buildArray(number, name);
    finishedArr.forEach(function(element) {
      $("#result").append(element + ", ");
    });
    let counterArr = countBeeps(finishedArr);
    $("#resultBoops").append("<li>There are " + counterArr[0] + " many beeps.</li>");
    $("#resultBoops").append("<li>There are " + counterArr[1] + " many boops.</li>");
    $("#resultBoops").append("<li>And Mr.Robogers asked you to be his neighbor " + counterArr[2] + " times.</li>");
    $("#inputNumber").fadeOut();
    $(".outputNumber").fadeIn();
    $(".restart").submit(function(event) {
      event.preventDefault();
      location.reload();
    });
  });
});