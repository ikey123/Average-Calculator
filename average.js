var nums = document.getElementsByClassName("num");
var numbers = Array.prototype.slice.call(nums);
var average = document.getElementById("average");

$("div").on("click", ".remove", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        // 更新 numbers 数组
        nums = document.getElementsByClassName("num");
        numbers = Array.prototype.slice.call(nums);
    });
    event.stopPropagation();
});

$(".add").on("click", function(event){
  $(".inputsContainer").append("<div class='inputs'><input type='number' class='num'><button class='remove btn btn-danger'>Remove</button></div>");
  // 更新 numbers 数组
  nums = document.getElementsByClassName("num");
  numbers = Array.prototype.slice.call(nums);
});

function calculate() {
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += Number(numbers[i].value);
  }
  var avg = total / numbers.length;
  average.textContent = "Average number is: " + avg.toFixed(2); // 保留两位小数
}
