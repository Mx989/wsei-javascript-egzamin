
//zadanie 1
const result = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    let array = [];
    elements = Array.from(elements);
    console.log(elements);
    elements.forEach((x) => {
        array.push(x.tagName);
    });
    console.log(array);
    return array;
}

getTagsOfElements(result);

//zadanie 2
const sampleIdElement = document.getElementById("sample_id");

function getClassesOfElement(element) {
    console.log(Array.from(element.classList));
    return Array.from(element.classList);
}

getClassesOfElement(sampleIdElement);

//zadanie 3
const ex3 = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements) {
    let result = [];
    elements.forEach((x) => {
        result.push(x.textContent);
    });

    console.log(result);
    return result;
}

getInnerTextsOfElements(ex3);

//zadanie 4

const links = document.links;

function getAddressesOfElements(elements) {
    let result = [];
    Array.from(elements).forEach((x) => {
        result.push(x.href);
    });
    console.log(result);
    return result;
}

getAddressesOfElements(links);

//zadanie 5

const children = Array.from(document.getElementsByClassName("sample_class_3")[0].children);

getTagsOfElements(children);

