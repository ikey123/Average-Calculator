var nums = document.getElementsByClassName("num");
var numbers = Array.prototype.slice.call(nums);
var average = document.getElementById("average");
var inputs = document.getElementsByClassName("inputs");
$("div").on("click", ".remove", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        numbers = Array.prototype.slice.call(nums);
    });
    event.stopPropagation();
});
$(".add").on("click", function(event){
  $(".inputsContainer").append("<div class='inputs'><input type='number' class='num'><button class='remove btn btn-danger'>Remove</button></div>");
  numbers = Array.prototype.slice.call(nums);
});
function calculate() {
  var total = 0;
  var v = 0;
  for(var i = 0; i < inputs.length; i++) {
    total += Number(numbers[i].value);
  }
  var avg = total/inputs.length;
  average.textContent = "Average number is: " + avg;
};
