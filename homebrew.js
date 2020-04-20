$(document).ready(function() {

  $("#recipe").hide(); //hides recipe from user

  //constructor for Coffee Object
  function Coffee(brewmethod, size, grSize, waterTemp, brewTime, divider) {
  this.brewmethod = brewmethod;
  this.size = size;
  this.grSize = grSize;
  this.waterTemp = waterTemp;
  this.brewTime = brewTime;
  this.divider = divider;
  };

  //Bootstrap Validator PlugIn: Defines input rules
  $(".registerForm").bootstrapValidator({
    feedbackIcons: {
       valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
    fields: {
      coffeeSize: {
        validators: {
          stringLength: {
            min: 0.001,
            max: 10,
            message: "Please enter min 2 and max 10 values"
          },
          notEmpty: {
            message: "Please enter an amount"
          },
          integer: {
            message: "Please enter only numeric values"
          },
          /* For some reason does prevent submit if enabled, even if input is correct
          regexp: {
            regexp: [0-9],
            message: "You can only use positive numeric values"
          },*/
        },

      },

    },
  });

//prevents default submit by pressing the button
 $(".registerForm").submit(function(ev){ev.preventDefault();});

  //Event submit button clicked
  $("#submit").click(function() {
    //Check on click if the input data is valid, if not cancel submit
    var bootstrapValidator = $(".registerForm").data('bootstrapValidator');
       bootstrapValidator.validate();
       if(bootstrapValidator.isValid())
         $(".registerForm").submit();
       else return;

    drawRecipe();

    });


function drawRecipe() {


    var brewmethod =  $("#select-brewmethod").val();
    var grSize = ["fine", "medium", "medium-coarse", "coarse"];
    var waterTemp = ["94 Degree Celsius", "96 Degree Celsius", "97 Degree Celsius"];
    var brewTime = ["3 min", "4 min", "5 min"];



    $("#recipe").show();

    switch ($("#select-brewmethod").val()) {
      case "french-press":
      var divider = 15;
        let french_press = new Coffee(brewmethod, coffeeSize, grSize[3], waterTemp[2], brewTime[1], divider);
        french_press.coffeeSize = parseInt($("#coffeeSize").val());
        fillTable(french_press);
        break;
      case "chemex":
      var divider = 16;
        let chemex = new Coffee(brewmethod, coffeeSize, grSize[2], waterTemp[1], brewTime[1], divider);
        chemex.coffeeSize = parseInt($("#coffeeSize").val());
        fillTable(chemex);
        break;
      case "v60":
      var divider = 14;
        let v60 = new Coffee(brewmethod, coffeeSize, grSize[2], waterTemp[0], brewTime[0], divider);
        v60.coffeeSize = parseInt($("#coffeeSize").val());
        fillTable(v60);
        break;
      default:
        alert("error 2")
        //error 2: error in select-brewmethod event
      };
};

    /*Homebrew Tool: Loops through each element with class "brewdescription"
    and fills the table with the variables form the passed object.*/
    function fillTable(object) {

      $.each($(".brewdescription"), function(index, value) {

        switch (index) {
          case 0:
            $(this).text(Math.round(((parseInt(object.coffeeSize)/parseInt(object.divider))*100) / 100) + " g");
            break;
          case 1:
            $(this).text(object.grSize);
            break;
          case 2:
            $(this).text(object.coffeeSize);
            break;
          case 3:
            $(this).text(object.waterTemp);
            break;
          case 4:
            $(this).text(object.brewTime);
            break;
          default:
            $(this).text("error 1");
            //error 1: object variable might be faulty
        };

      });

    };


});
