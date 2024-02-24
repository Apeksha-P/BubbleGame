/*document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll('.a');
    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            div.remove();
        });
    });
});*/
document.addEventListener("DOMContentLoaded",function (){
    var divName = document.querySelectorAll('.a');
    divName.forEach(function (div){
        div.addEventListener("click",function (){
            div.remove();
        })
    })
})