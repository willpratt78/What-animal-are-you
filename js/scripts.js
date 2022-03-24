$(document).ready(function () {
   $("#animal-form").submit(function (event) {
    event.preventDefault();
    const age = parseInt($("#age-input").val());
    const gender = parseInt($("#gender-input").val());
    const trash = parseInt($("#trash-input").val());
    const social = parseInt($("#social-input").val());

    const total = gender + trash + social;
    let result;
    let image;
    console.log(total)
    if(total <= 4 && age < 30) {
      result = "Dog";
    } else if (total > 4 && total <= 6 && age > 31) {
      result = "Cat";
    } else {
      result = "Raccoon";
      image = "<img src='img/raccoon.jpg' alt= 'raccoon picture'></img>"
    }

    $("#output").append("<p>" + result + "</p>")
    $("#output").append(image)
   });
});