var frame = document.getElementsByClassName("container");
var i = 0;
for (let i = 1; i < frame.length; i++) {
    frame[i].style.display = "none"

}

function myPrevious() {

    frame[i - 1].style.display = "flex";
    i--;
    frame[i + 1].style.display = "none"
}

function myNext() {

    frame[i + 1].style.display = "flex";
    i++;
    frame[i - 1].style.display = "none"
}
