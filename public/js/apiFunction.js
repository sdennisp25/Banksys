var itemInfo;



$(document).on("click","#submitToy", function(event){
	event.preventDefault();
	console.log("Retrieving Data...");

	function walmartItem(search) {
			var search = $("#searchInput").val().trim();
			var walmartRequest = "http://api.walmartlabs.com/v1/search?query="+search+"&format=json&apiKey=g5eyb7eyu32n6atjb8k9eq9x";

			$.ajax({
					url: walmartRequest,
					method: 'GET'
			})
			.then(function (response) {
				console.log(response);
							//response location on page
							var walmartDiv = $(".result");
							//readable format
							itemInfo = response.items[0];
							
							//response item image
							var goalImage = itemInfo.mediumImage;
							//put that image in element
							var walImage = $(".resultImage").attr('src', goalImage);
							//display on page
							walmartDiv.append(walImage);
							
							//response item name
							var goalName = itemInfo.name;
							//put that name in element
							var walName = $(".resultName").text(goalName);
							//display on page
							walmartDiv.prepend(walName);
							
							//response item price
							var goalPrice = itemInfo.salePrice;
							//put that price in element
							var walPrice = $(".resultPrice").text("$ "+ goalPrice);
							//display on page
							walmartDiv.append(walPrice);
							var topPrice = $(".apiItemAmount").text("$ "+ goalPrice);
							
							
							//response item upc
							var goalUpc = itemInfo.upc;
							//no need to display UPC, console.log it
							console.log(goalUpc);
							$(".apiItemAmount").text(goalPrice);
					});

			};
			walmartItem();
	//end on.click
});

var price = $(".resultPrice").text();
var balance = $(".user_balance").text();
var remainder = parseInt(balance)-parseInt(price);
var percent = remainder/100;
console.log(typeof(price));
console.log(typeof(balance));
console.log(typeof(remainder));
console.log(remainder);
console.log(typeof(percent));

var thing = toString(remainder)

	$(".difference").text(thing);
