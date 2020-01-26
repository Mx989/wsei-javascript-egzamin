const buttons = Array.from(document.querySelectorAll("button"));
const cont = document.getElementById("container");


buttons.forEach(x => x.onclick = () => {
    //console.log(x.dataset.text);
    cont.innerText = x.getAttribute("data-text");

});

function changeText(text) {

}