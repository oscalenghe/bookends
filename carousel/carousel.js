// const groups = document.getElementsByClassName("")

// const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

const button = document.querySelector("button")

button.addEventListener("click", () => {
  
    
  let el1 = document.querySelector(`[data-status="active"]`)
  let el2 = document.querySelector(`[data-status="left"]`)
  let el3 = document.querySelector(`[data-status="right"]`)
  
  el1.setAttribute("data-status", "left")
  el2.setAttribute("data-status", "right")
  el3.setAttribute("data-status", "active")

})
