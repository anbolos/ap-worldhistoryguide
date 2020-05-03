/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */



$("#no").hover(function(){
  $("#no").hide();
  $("#yes").text("STUDY NOW!");
});

//HELP!!
$("#submit1").click(function(){
    var input1 = $("#input1").val();
    console.log($("#input1").val());
    if (input1 === "4"){
      alert("Yes! The first river civilizations are Mesopotamia, Egypt, India, and China");
      window.location.href = "/options.html";
    }
    else {
      alert("Incorrect! Try again!");
      window.location.href = "/try-again.html";
    }
});

$("#submit2").click(function(){
    var input2 = $("#input2").val().toLowerCase();
    console.log($("#input2").val());
    if (input2 === "the huns"){
       alert("Yes! The Huns sacked Rome, China, AND the Gupta dynasty!");
      window.location.href = "/options.html";
    }
    else {
      alert("Incorrect! Study Harder");
      window.location.href = "/try-again.html";
    }
});

$("#submit3").click(function(){
    var input3 = $("#input3").val().toLowerCase();
    console.log($("#input3").val());
    if (input3 === "the crusades"){
      window.location.href = "/options.html";
      alert("Correct! The correct answer is The Crusades.");
    }
    else {
      alert("Incorrect! Study Harder");
      window.location.href = "/try-again.html";
    }
});

$("#submit4").click(function(){
    var input4 = $("#input4").val();
    console.log($("#input4").val());
    if (input4 === "1492"){
      window.location.href = "/options.html";
      alert("Correct! The correct answer is 1492.");
    }
    else {
      alert("Incorrect! Study Harder");
      window.location.href = "/try-again.html";
    }
});





//code thingy
$("#ms").hover(function(){
  $("#ms").text("M,S");
});

$("#di").hover(function(){
  $("#di").text("D,I");
});

$("#ll").hover(function(){
  $("#ll").text("L,L");
});

$("#s").hover(function(){
  $("#s").text("S");
});

