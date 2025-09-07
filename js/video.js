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
.then(data =>displayCategories(data.categories))
.catch((error) =>console.log(error))
}

const displayCategories = (categories) => {
    const categoriesContainer =document.getElementById('categories')
    categories.forEach((item)=> {
        console.log(item)
        const button =document.createElement('button');
        button.classList ='btn bg-red-400 text-white font-bold text-lg hover:bg-blue-300';
        button.innerText =item.category;
        categoriesContainer.append(button)
    })
    
}




loadCategoride()



















