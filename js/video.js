// console.log(54545)

/**
 * 1.Fetch load and show categories on html
 * 2.create loadCategories
 * 3.create 
 * */



// create loadCategories

const loadCategoride = () => {
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then(res =>res.json())
.then(data =>console.log(data))
.catch((error) =>console.log(error))
}

const displayCategories = () => {

}




loadCategoride()



















