const categoryEls = document.querySelectorAll(".category")
const selectedCategoryEls = document.querySelectorAll(".s_category")
const selectedCategoriesEl = document.querySelector(".selected_categories")
let category = {
    Programming: false,
    Miscellaneous: false,
    Dard: false,
    Pun: false,
    Spooky: false
}
categoryEls.forEach((el) => {
    el.addEventListener("click", ()=>{
        if(category[el.innerText]){
            category[el.innerText] = false
            updateSelectedCategories()
        }else{
            category[el.innerText] = true
            updateSelectedCategories()
        }
        console.log(category);
        el.classList.toggle("category_active")
        el.classList.toggle("category")
    })
})


function updateSelectedCategories(){
    selectedCategoriesEl.innerHTML = "<h2>Selected Categories: </h2>"
    for(let key in category){
        if(category[key]){
            let div = document.createElement("div")
            div.classList.add("s_category")
            div.innerText = key
            selectedCategoriesEl.appendChild(div)
        }
    }
}
// updateSelectedCategories()