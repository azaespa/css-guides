const flexWrap = document.querySelector("#flexWrapValue");
const flexDirection = document.querySelector("#flexDirectionValue");
const itemsFlexWrap = document.querySelector("#itemsFlexWrap");
const itemsFlexDirection = document.querySelector("#itemsFlexDirection");
const typingSim = document.querySelector(".typing-simulator");

flexWrap.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexWrap.blur();
    }
})

flexDirection.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexDirection.blur();
    }
})

flexWrap.addEventListener("blur", () => {
    itemsFlexWrap.style.flexWrap = flexWrap.innerText;
})

flexDirection.addEventListener("blur", () => {
    itemsFlexDirection.style.flexDirection = flexDirection.innerText;
})
