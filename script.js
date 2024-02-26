var count = 0;
document.addEventListener("DOMContentLoaded",function (){
    var divName = document.querySelectorAll('.a');
    divName.forEach(function (div){
        div.addEventListener("click",function (){
            count = count + 5;
            div.remove();
            var display = document.getElementById('mark');
            var over = document.getElementById('end');
            //over.css('display','none');
            if(display){
                display.textContent = "Score : " + count;
            }
        })
    })
})