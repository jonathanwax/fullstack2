(function(){
// this is how we wait until document is fully loaded
$(document).ready(function () {

    // select an element by class
    var hiddenBox = $(".hidden-box");

    // attach click event to all button elements
    $("button").on("click", function (event) {

        var t = this;

        // show() changes elements display property to block;
        hiddenBox.toggle();
    });
});
})();
