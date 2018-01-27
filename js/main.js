/**********************************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Emy Yeung                Student ID: 026302117               Date: Jan 26, 2017
* https://assignment-1-htzheng.herokuapp.com/
* *********************************************************************************************/

$(".dropdown-menu").on("click", ".ajax-menu", function() {
    event.preventDefault(); // stop the element from behaving like a regular link
    let $this = $(this); 
    var remoteURL = "https://still-castle-63359.herokuapp.com/";
    console.log(remoteURL + $this.attr("data-src"));
    
    $.ajax({
        url: remoteURL + $this.attr("data-src"),
        type: "GET",
        contentTyple: "application/json"
    })
    .done(function (data) {
        $("#data").empty();  // Clear the contents of the "well" (id="data") element
        // Add the element <h3>Teams</h3> to the "well"
        $("#data").append("<h3>" + $this.attr("data-title") + "</h3>" + JSON.stringify(data));
    })
    .fail(function(err) {
        $("#data").empty();  // Clear the contents of the "well" (id="data") element
        $("#data").append("<h3>" + "Error: " + err.status.Text + "</h3>");
    });
});