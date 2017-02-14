  var add = function(number1, number2){
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

$(function() {
  $("form#add").submit(function(event) {
    var number1 = parseInt($("#no1").val());
    var number2 = parseInt($("#no2").val());
    var result = (add(number1, number2));
    $("#result-add").text(result);

    event.preventDefault();
  });

  $("form#subtract").submit(function(event) {
    var number1 = parseInt($("#no1").val());
    var number2 = parseInt($("#no2").val());
    var result = (subtract(number1, number2));
    $("#result-subtract").text(result);

    event.preventDefault();
  });

  $("form#multiply").submit(function(event) {
    var number1 = parseInt($("#no1").val());
    var number2 = parseInt($("#no2").val());
    var result = (multiply(number1, number2));
    $("#result-multiply").text(result);

    event.preventDefault();
  });

  $("form#divide").submit(function(event) {
    var number1 = parseInt($("#no1").val());
    var number2 = parseInt($("#no2").val());
    var result = (divide(number1, number2));
    $("#result-divide").text(result);

    event.preventDefault();
  });

  $("#Addition").click(function() {
    $("#subtract").hide();
    $("#multiply").hide();
    $("#divide").hide();
    $("#add").show();
  });

  $("#Subtraction").click(function() {
    $("#subtract").show();
    $("#multiply").hide();
    $("#divide").hide();
    $("#add").hide();
  });

  $("#Multiplication").click(function() {
    $("#subtract").hide();
    $("#divide").hide();
    $("#add").hide();
    $("#multiply").show();
  });

  $("#Division").click(function() {
    $("#subtract").hide();
    $("#multiply").hide();
    $("#add").hide();
    $("#divide").show();
  });

});
