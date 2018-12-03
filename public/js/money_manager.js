
var total = 0;
var saveTotal = 0;
var userID = 0;
var amountTillGoal = 0;
var progressBarFill;

var urlLocation = window.location;
// console.log(JSON.stringify(urlLocation.search).split("=")[1]);
var urlNum = parseInt(JSON.stringify(urlLocation.search).split("=")[1]);
// console.log(urlNum);
// console.log("url", urlLocation);

$(document).ready(function(){
	$.get("/api/get_balance/" + urlNum, function(res){

		// console.log(res);
		$("#welcome").text("Welcome " + res.user_name);
		total = res.user_balance
		saveTotal = res.user_balance
		$("#user_total").text(res.user_balance);
		$(".balance").text(res.user_balance)
		$(".topImage").attr('src', res.goal_img);
		amountTillGoal = res.goal_price - res.user_balance;
		tillGoal = parseFloat(amountTillGoal).toFixed(2)
		$(".amountLeft").text(tillGoal)
		progressBarFill = Math.floor((res.user_balance / res.goal_price) * 100);
		$("#progress_bar").css({width : progressBarFill + "%"})
		
	});
});

//onload get user balance, put on page
$(document).on("click", ".money", function(event) {
  // alert("hit");
  var money = $(this).attr("data-value");
  var totalInt = parseFloat(total)
	total = totalInt += parseFloat(money)
  console.log(total);
  $(".newTotal").html(total.toFixed(2));
  var audio = new Audio("../images/chaching.mp3");
  audio.play();
  var userName = {
        user_balance: total
  };
  $.ajax("/money_manager_post", {
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(userName)
  }).then(function(res) {
    console.log("added money", res);
    window.location = res;
  });
});

// post user_balance to database

$(document).on("click", ".submitTotal", function (event) {
	event.preventDefault();
	var userTotal = parseFloat($(".newTotal").text());

	var userMoney = {
		user_balance: userTotal,
		idNumber: urlNum
	};

	$.ajax({
		method: "PUT",
		url: "/money_manager_put",
		contentType: "application/json",
		data: JSON.stringify(userMoney)
	  }).then(
			function (res) {
				// console.log("added money to john", res);
				window.location = res;
			});
});

$(document).on("click", ".saveItem", function (event) {
	event.preventDefault();
	var item_price = itemInfo.salePrice;
	var item_img = itemInfo.mediumImage;

	var userGoal = {
		goal_price: item_price,
		goal_img:item_img,
		idNumber: urlNum
	};

	$.ajax({
		method: "PUT",
		url: "/api/goal",
		contentType: "application/json",
		data: JSON.stringify(userGoal)
	  }).then(
			function (res) {
				// console.log("added money to john", res);
				window.location = res;
			});
});