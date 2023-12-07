// JavaScript specific to the index.html file

document.addEventListener("DOMContentLoaded", function () {
    // Code that runs after the DOM has fully loaded

    var groupContainer2 = document.getElementById("groupContainer2");
    if (groupContainer2) {
        groupContainer2.addEventListener("click", function (e) {
            // Please sync "HomePageUser" to the project
            console.log("Group Container Clicked");
        });
    }

    var ngKText = document.getElementById("ngKText");
    if (ngKText) {
        ngKText.addEventListener("click", function (e) {
            window.location.href = "./register-page.html";
        });
    }
});
