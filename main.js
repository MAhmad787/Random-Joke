const categoryEls = document.querySelectorAll(".category");
const selectedCategoryEls = document.querySelectorAll(".s_category");
const selectedCategoriesEl = document.querySelector(".selected_categories");
const generateBtn = document.querySelector(".generate");
let category = {
  Programming: false,
  Miscellaneous: false,
  Dark: false,
  Pun: false,
};
categoryEls.forEach((el) => {
  el.addEventListener("click", () => {
    if (category[el.innerText]) {
      category[el.innerText] = false;
      updateSelectedCategories();
    } else {
      category[el.innerText] = true;
      updateSelectedCategories();
    }
    console.log(category);
    el.classList.toggle("category_active");
    el.classList.toggle("category");
  });
});

function updateSelectedCategories() {
  selectedCategoriesEl.innerHTML = "<h4>Selected Categories: </h4>";
  for (let key in category) {
    if (category[key]) {
      let div = document.createElement("div");
      div.classList.add("s_category");
      div.innerText = key;
      selectedCategoriesEl.appendChild(div);
    }
  }
}
// updateSelectedCategories()

generateBtn.addEventListener("click", () => {
  function categoriesInString() {
    let categories = "";
    for (let key in category) {
      if (category[key]) {
        categories += key + ",";
      }
    }
    let updateCategories = "";
    for (let i = 0; i < categories.length - 1; i++) {
      updateCategories += categories[i];
    }
    return updateCategories;
  }
  if (categoriesInString().length == 0) {
    let apiUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=single`;
    fetchJoke(apiUrl);
  } else {
    let apiUrl = `https://v2.jokeapi.dev/joke/${categoriesInString()}?type=single`;
    console.log(apiUrl);
    fetchJoke(apiUrl);
  }
});
function fetchJoke(url) {
    let joke = ""
    let jokeCategory = ""
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.joke);
        console.log(data.category);
        joke += data.joke
        jokeCategory += data.category
        let jokeDisplayEl = document.querySelector(".joke")
        let  jokeCategoryDisplayEl = document.querySelector(".generated_joke_category")
        console.log(jokeDisplayEl);
        jokeDisplayEl.innerHTML = joke
        jokeCategoryDisplayEl.innerHTML = jokeCategory
    });

}
