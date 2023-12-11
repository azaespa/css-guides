const flexWrap = document.querySelector("#flexWrap");
const flexItemsContainer = document.querySelector(".flex-items-container");

flexWrap.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        flexWrap.blur();
    }
})

flexWrap.addEventListener("blur", () => {
    flexItemsContainer.style.flexWrap = flexWrap.innerText;
})

console.log("this is working")