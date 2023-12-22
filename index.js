const flexWrap = document.querySelector("#flexWrapValue");
const flexDirection = document.querySelector("#flexDirectionValue");
const justifyContent = document.querySelector("#justifyContentValue");
const alignItems = document.querySelector("#alignItemsValue");

const itemsFlexWrap = document.querySelector("#itemsFlexWrap");
const itemsFlexDirection = document.querySelector("#itemsFlexDirection");
const itemsJustifyContent = document.querySelector("#itemsJustifyContent");
const itemsAlignItems = document.querySelector("#itemsAlignItems");

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

justifyContent.addEventListener("keypress", (event) =>  {
    if (event.key == "Enter") {
        event.preventDefault()
        justifyContent.blur();
    }
})

alignItems.addEventListener("keypress", (event) =>  {
    if (event.key == "Enter") {
        event.preventDefault()
        alignItems.blur();
    }
})

flexWrap.addEventListener("blur", () => {
    itemsFlexWrap.style.flexWrap = flexWrap.innerText;
})

flexDirection.addEventListener("blur", () => {
    itemsFlexDirection.style.flexDirection = flexDirection.innerText;
})

justifyContent.addEventListener("blur", () => {
    itemsJustifyContent.style.justifyContent = justifyContent.innerText;
})

alignItems.addEventListener("blur", () => {
    itemsAlignItems.style.alignItems = alignItems.innerText;
})