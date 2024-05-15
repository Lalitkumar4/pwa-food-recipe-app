if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not registered", err))
}

const form = document.querySelector("form")
const recipeContainer = document.querySelector(".recipes")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.getElementById("title").value
  const ingredients = document.getElementById("ingredients").value

  const element = `
    <div class="card-panel recipe white row">
    <img src="/img/dish.png" alt="recipe thumb" />
    <div class="recipe-details">
      <div class="recipe-title">${title}</div>
      <div class="recipe-ingredients">${ingredients}</div>
    </div>
    <div class="recipe-delete">
      <i class="material-icons delete-icon">delete_outline</i>
    </div>
    `
  recipeContainer.innerHTML += element
  form.reset()
})

recipeContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-icon")) {
    const recipe = e.target.parentElement.parentElement
    recipe.remove()
  }
})
