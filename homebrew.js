$(document).ready(function() {
  $("#hello-world").click(function(){
    /*alert("Test:" + $("#select-brewmethod").val() + $("#coffeeSize").val());*/
    var coffeeSize = parseInt($("#coffeeSize").val());
    var brewmethod =  $("#select-brewmethod").val();

    switch ($("#select-brewmethod").val()) {
      case "french-press":
        var solution = coffeeSize/15;
        $("#solution").text(solution);
        break;
      case "chemex":
        var solution = coffeeSize/16;
        $("#solution").text(solution);
        break;
      case "v60":
        var solution = coffeeSize/14;
        $("#solution").text(solution);
        break;
      default:

    };

    /*if (brewmethod = "french-press") {
      var solution = coffeeSize/15;
      console.log(solution);
    } else if (brewmethod = "chemex") {
      var solution = coffeeSize/100;
      console.log(solution);
    };*/


      /*if ($("#select-brewmethod").text() = "french-press") {
        var frenchPress = parseInt($("#coffeeSize").val())/15;
        alert("Test:" + frenchPress);
      };*/
    });
  });
