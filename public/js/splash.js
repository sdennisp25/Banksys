$(function() {
  // $(window).on("load", function() {
  //   $("#myModal").modal("show");
  // });

  $(document).on("click", "#submit", function(event) {
    event.preventDefault();
    console.log("hit");
    var name = $("#username")
      .val()
      .trim();
    console.log(name);

    var userName = {
      user_name: name
    };

    // Send the POST request.
    $.ajax("/money_manager_post", {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(userName)
    }).then(function(res) {
      console.log("created new user", res);
      window.location = res;
    });
  });
});
// });

// modules.export = nameData;

