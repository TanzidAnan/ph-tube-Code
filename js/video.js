// console.log(54545)

/**
 * 1.Fetch load and show categories on html
 * 2.create loadCategories
 * 3.create 
 * */



// create loadCategories

const loadCategoride = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
}



const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories')
    categories.forEach((item) => {
        console.log(item)
        const button = document.createElement('button');
        button.classList = 'btn bg-red-400 text-white font-bold text-lg hover:bg-blue-300';
        button.innerText = item.category;
        categoriesContainer.append(button)
    })

}


const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch((error) => console.log(error))
}


const displayVideos = (vidoes) => {
    console.log(vidoes)
    const videoContainer = document.getElementById('videos')
    vidoes.forEach(video => {
        const card = document.createElement('div')
        card.classList ='card card-compact'
        card.innerHTML = `
        <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;
        videoContainer.append(card)
    })
}



loadCategoride()
loadVideos()



















