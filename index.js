const flexWrap = document.querySelector("#flexWrapValue");
const flexDirection = document.querySelector("#flexDirectionValue");
const justifyContent = document.querySelector("#justifyContentValue");
const alignItems = document.querySelector("#alignItemsValue");
const flexOrderItem1 = document.querySelector("#flexOrderItem1Value");
const flexOrderItem2 = document.querySelector("#flexOrderItem2Value");
const flexOrderItem3 = document.querySelector("#flexOrderItem3Value");
const flexOrderItem4 = document.querySelector("#flexOrderItem4Value");

const itemsFlexWrap = document.querySelector("#itemsFlexWrap");
const itemsFlexDirection = document.querySelector("#itemsFlexDirection");
const itemsJustifyContent = document.querySelector("#itemsJustifyContent");
const itemsAlignItems = document.querySelector("#itemsAlignItems");
const itemsFlexOrder = document.querySelector("#itemsFlexOrder");

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

justifyContent.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        justifyContent.blur();
    }
})

alignItems.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        alignItems.blur();
    }
})

flexOrderItem1.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexOrderItem1.blur();
    }
})

flexOrderItem2.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexOrderItem2.blur();
    }
})

flexOrderItem3.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexOrderItem3.blur();
    }
})

flexOrderItem4.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexOrderItem4.blur();
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

flexOrderItem1.addEventListener("blur", () => {
    const item1 = itemsFlexOrder.querySelector("#flexOrderItem1");
    item1.style.order = flexOrderItem1.innerText;
})

flexOrderItem2.addEventListener("blur", () => {
    const item1 = itemsFlexOrder.querySelector("#flexOrderItem2");
    item1.style.order = flexOrderItem2.innerText;
})

flexOrderItem3.addEventListener("blur", () => {
    const item1 = itemsFlexOrder.querySelector("#flexOrderItem3");
    item1.style.order = flexOrderItem3.innerText;
})

flexOrderItem4.addEventListener("blur", () => {
    const item1 = itemsFlexOrder.querySelector("#flexOrderItem4");
    item1.style.order = flexOrderItem4.innerText;
})