$(document).ready(function() {
  $("#recipe").hide();
  $("#hello-world").click(function(){
    /*alert("Test:" + $("#select-brewmethod").val() + $("#coffeeSize").val());*/
    var coffeeSize = parseInt($("#coffeeSize").val());
    var brewmethod =  $("#select-brewmethod").val();
    var grSize = ["fine", "medium", "medium-coarse", "coarse"];
    var waterTemp = ["94 Degree Celsius", "96 Degree Celsius", "97 Degree Celsius"];
    var brewTime = ["3 min", "4 min", "5 min"];
    console.log(grSize[0]);

    $("#recipe").show();

    switch ($("#select-brewmethod").val()) {
      case "french-press":
        var solution = Math.round((coffeeSize/15)*100) / 100;
        $("#solution").text(solution);
        $("#grSize").text(grSize[3]);
        $("#wateramount").text(coffeeSize + " ml");
        $("#watertemp").text(waterTemp[2]);
        $("#brewtime").text(brewTime[1]);
        console.log(solution);
        break;
      case "chemex":
        var solution = Math.round((coffeeSize/16)*100) / 100;
        $("#solution").text(solution);
        $("#grSize").text(grSize[2]);
        $("#wateramount").text(coffeeSize + " ml");
        $("#watertemp").text(waterTemp[1]);
        $("#brewtime").text(brewTime[1]);
        break;
      case "v60":
        var solution = Math.round((coffeeSize/14)*100) / 100;
        $("#solution").text(solution);
        $("#grSize").text(grSize[2]);
        $("#wateramount").text(coffeeSize + " ml");
        $("#watertemp").text(waterTemp[0]);
        $("#brewtime").text(brewTime[0]);
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
