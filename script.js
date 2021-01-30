//Define element that will be used as a trigger to active dark-mode
const themeIcon = document.getElementById("change-theme").firstElementChild

//Add event listener to toggle dark-mode class to <body>
themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
  themeIcon.classList.toggle("light-mode")
})

//Add event listener to change the "button" image when changing theme
themeIcon.addEventListener("click", () => { 
  themeIcon.className === "light-mode"
   ? themeIcon.src = "./assets/light-mode-icon.svg"
   : themeIcon.src = "./assets/dark-mode-icon.svg"
})