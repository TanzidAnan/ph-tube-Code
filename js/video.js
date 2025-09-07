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

const object = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}


const displayVideos = (vidoes) => {
    console.log(vidoes)
    const videoContainer = document.getElementById('videos')
    vidoes.forEach(video => {
        const card = document.createElement('div')
        card.classList = 'card card-compact shadow-sm bg-red-200'
        card.innerHTML = `
        <figure>
    <img
    class="w-[100%] h-[25vh] rounded "
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-3 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
    </div>
    <div>
    <h2 class="font-bold ">${video.title}</h2>
    <div class='flex gap-3  items-center'>
    <p class='text-gray-600 text-lg'>${video.authors[0].profile_name}</p>
    <img class='w-5 h-5 object-cover' src="https://img.icons8.com/?size=80&id=41816&format=png"> 
    </div>
    
    </div>
  </div>
        `;
        videoContainer.append(card)
    })
}



loadCategoride()
loadVideos()



















