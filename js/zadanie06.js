document.addEventListener("DOMContentLoaded", function () {

    const list = document.getElementById("shopping-list");
    const breadButton = document.getElementById("button-1")
    const deleteButton = document.getElementById("button-2")
    const addButton = document.getElementById("button-3")

    breadButton.onclick = () => addElement('chleb');
    deleteButton.onclick = () => deleteLastElement();
    addButton.onclick = () => cloneSecondElement();

    function addElement(product) {
        const liElement = document.createElement('li');
        liElement.innerHTML = product;
        list.appendChild(liElement);
    }

    function deleteLastElement() {
        const children = list.children;
        if (children.length > 0) {
            list.removeChild(children[children.length - 1]);
        }
    }

    function cloneSecondElement() {
        const children = list.children;
        if (children.length > 1) {
            addElement(children[1].innerHTML);
        }
    }
});