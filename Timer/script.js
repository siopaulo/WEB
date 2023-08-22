var second = 0;


setInterval(function(){
    time.innerHTML = second++;
},1000)

function onLoad() {
    document.getElementById("butt-show").onclick = function() {
        var text = document.getElementById("newText").value;
        var showMeText = document.getElementById("butt-show");
        showMeText.innerHTML = text;
        document.body.style.backgroundColor = randomColor();

        function randomColor(){
            var color = "#"
            for (var i = 0; i < 6; i++){
                color += Math.floor(Math.random() * 9) + 1;
            }
            return color;
        }
    }
}
window.onload = onLoad;

