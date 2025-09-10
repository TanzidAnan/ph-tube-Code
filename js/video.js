// // console.log(54545)

// /**
//  * 1.Fetch load and show categories on html
//  * 2.create loadCategories
//  * 3.create 
//  * */



// // create loadCategories

// const loadCategoride = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then(res => res.json())
//         .then(data => displayCategories(data.categories))
//         .catch((error) => console.log(error))
// }
 
// const removeActiveClass =() =>{
//     const buttons =document.getElementsByClassName('category-btn');
//     console.log(buttons)
//     for(let btn of buttons){
//         btn.classList.remove('active')
//     }
// }

// const loadCategorideVideos=(id) =>{
//      fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
//         .then(res => res.json())
//         .then((data) => {
//             removeActiveClass()
//             const activeBtn =document.getElementById(`btn-${id}`);
//             console.log(activeBtn)
//             activeBtn.classList.add('active')
//             displayVideos(data.category);

//         })
//         .catch((error) => console.log(error))
// }


// const displayCategories = (categories) => {
//     const categoriesContainer = document.getElementById('categories')
//     categories.forEach((item) => {
//         console.log(item)
//         const buttonContainer = document.createElement('div');
//         buttonContainer.innerHTML =`
//         <button id="btn-${item.category_id}" onclick="loadCategorideVideos(${item.category_id})" class='btn category-btn'>
//         ${item.category}
//         </button> 
//         `
        
//         categoriesContainer.append(buttonContainer)
//     })

// }


// const loadVideos = (searchText ='') => {
//     fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
//         .then(res => res.json())
//         .then(data => displayVideos(data.videos))
//         .catch((error) => console.log(error))
// }

// const object = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


// // function getTimeString(time) {
// //     const days =parseInt(time/86400)
// //     const hour = parseInt(time / 3600);
// //     let remainingSecond = time % 3600;
// //     const minute = parseInt(remainingSecond / 60);
// //     remainingSecond = remainingSecond % 60;
// //     return `${days} days ${hour} hour ${minute} minute ${remainingSecond} second age`
// // }

// function getTimeString(time) {
//   const days = parseInt(time / 86400); 
//   const hours = parseInt((time % 86400) / 3600); 
//   const minutes = parseInt((time % 3600) / 60); 
//   const seconds = time % 60;
//   return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
// }

// // function getTimeString(time) {
// //   const months = parseInt(time / 2592000); // 1 month = 30 days
// //   const days = parseInt((time % 2592000) / 86400); // বাকি সেকেন্ড থেকে দিন
// //   const hours = parseInt((time % 86400) / 3600); // বাকি সেকেন্ড থেকে ঘন্টা
// //   const minutes = parseInt((time % 3600) / 60); // বাকি সেকেন্ড থেকে মিনিট
// //   const seconds = time % 60; // বাকি সেকেন্ড

// //   return `${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
// // }


// // function getTimeString(time) {
// //   const years = parseInt(time / 31536000); // 1 year = 365 days
// //   const months = parseInt((time % 31536000) / 2592000); // মাস বের করা
// //   const days = parseInt((time % 2592000) / 86400); // বাকি দিন
// //   const hours = parseInt((time % 86400) / 3600); // বাকি ঘন্টা
// //   const minutes = parseInt((time % 3600) / 60); // বাকি মিনিট
// //   const seconds = time % 60; // বাকি সেকেন্ড

// //   return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
// // }


// const loadDetails = async(videoId) =>{
//     console.log(videoId);
//     const url =`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
//     const res =await fetch(url)
//     const data =await res.json();
//     console.log(data)
//     displayDetails(data.video);
// }


// const displayDetails =(video) =>{
//     console.log(video)
//     const detailContainer =document.getElementById('modal-content');

//     detailContainer.innerHTML =`
//     <img src=${video.thumbnail}>
//     <p>${video.description}</p>
//     `

//     document.getElementById('my_modal_5').showModal()
// }


// const displayVideos = (vidoes) => {
//     console.log(vidoes)
//     const videoContainer = document.getElementById('videos')
//     videoContainer.innerHTML =''

//     if(vidoes.length ===0){
//         videoContainer.classList.remove('grid')
//         videoContainer.innerHTML =`
//         <div class='min-h-[500px] flex flex-col gap-5 justify-center items-center'>
//         <img src='icon.png'>
//         <h2 class='text-2xl font-bold'>Content here in this catagery</h2>
//         </div>
//         `;
//         return
//     }
//     else{
//         videoContainer.classList.add('grid')
//     }

//     vidoes.forEach(video => {
//         const card = document.createElement('div')
//         card.classList = 'card card-compact shadow-sm bg-red-200'
//         card.innerHTML = `
//         <figure class='relative'>
//     <img
//     class="w-[100%] h-[25vh] rounded "
//       src=${video.thumbnail}
//       alt="Shoes" />
//       ${video.others.posted_date?.length === 0 ? '' : `<span class='absolute right-2 bottom-2 text-xs px-4 py-2 bg-black rounded-md text-white'>${getTimeString(video.others.posted_date)}</span>`}
      
//   </figure>
//   <div class="px-0 py-3 flex gap-2">
//     <div>
//     <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
//     </div>
//     <div>
//     <h2 class="font-bold ">${video.title}</h2>
//     <div class='flex gap-3  items-center'>
//     <p class='text-gray-600 text-lg'>${video.authors[0].profile_name}</p>
//     ${video.authors[0].verified === true ? `<img class='w-5 h-5 object-cover' src="https://img.icons8.com/?size=80&id=41816&format=png"> ` : ''}
    
//     </div>
//     <button onclick="loadDetails('${video.video_id}')" class='btn btn-sm border-t-cyan-300'>Show Details</button>
//     </div>
//   </div>
//         `;
//         videoContainer.append(card)
        
//     })
// }


// document.getElementById('search-input').addEventListener('keyup',(e) =>{
// loadVideos(e.target.value)
// })

// const apiUrl = 'https://openapi.programming-hero.com/api/phero-tube/videos';
// let videos = [];

// // 1️⃣ API theke data fetch function
// async function fetchVideos() {
//     try {
//         const res = await fetch(apiUrl);
//         const data = await res.json();
//         videos = data.videos;
//         displayVideo(videos);
//     } catch (err) {
//         console.error('Error fetching videos:', err);
//     }
// }

// // 2️⃣ Data display function
// function displayVideo(videosArray) {
//     const container = document.getElementById('videoContainer');
//     container.innerHTML = '';
//     videosArray.forEach(video => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <h3>${video.title}</h3>
//             <p>Views: ${video.views}</p>
//         `;
//         container.appendChild(div);
//     });
// }

// // 3️⃣ Sort function
// function sortVideosByViews() {
//     const sorted = [...videos].sort((a, b) => b.views - a.views);
//     displayVideo(sorted);
// }

// // Event listener for button
// document.getElementById('sortBtn').addEventListener('click', sortVideosByViews);

// // Initial fetch


// loadCategoride()
// loadVideos()

// fetchVideos();




// ===============================
// 📌 Category Load
// ===============================
const loadCategoride = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('category-btn');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
}

const loadCategorideVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then((data) => {
            removeActiveClass()
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add('active')
            videos = data.category || [];   // ✅ global videos update
            displayVideos(videos);
        })
        .catch((error) => console.log(error))
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories')
    categories.forEach((item) => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategorideVideos(${item.category_id})" class='btn category-btn'>
            ${item.category}
        </button> 
        `
        categoriesContainer.append(buttonContainer)
    })
}

// ===============================
// 📌 Load & Search Videos
// ===============================
let videos = []; // ✅ Global রাখলাম যেন sort করতে পারি

const loadVideos = (searchText = '') => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then(data => {
            videos = data.videos || []; // ✅ global update
            displayVideos(videos);
        })
        .catch((error) => console.log(error))
}

// ===============================
// 📌 Time Format
// ===============================
function getTimeString(time) {
    const days = parseInt(time / 86400);
    const hours = parseInt((time % 86400) / 3600);
    const minutes = parseInt((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// ===============================
// 📌 Video Details Modal
// ===============================
const loadDetails = async (videoId) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    const res = await fetch(url)
    const data = await res.json();
    displayDetails(data.video);
}

const displayDetails = (video) => {
    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `
        <img src=${video.thumbnail}>
        <p>${video.description}</p>
    `
    document.getElementById('my_modal_5').showModal()
}

// ===============================
// 📌 Display Videos
// ===============================
const displayVideos = (vidoes) => {
    const videoContainer = document.getElementById('videos')
    videoContainer.innerHTML = ''

    if (vidoes.length === 0) {
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
        <div class='min-h-[500px] flex flex-col gap-5 justify-center items-center'>
            <img src='icon.png'>
            <h2 class='text-2xl font-bold'>Content not found in this category</h2>
        </div>
        `;
        return
    } else {
        videoContainer.classList.add('grid')
    }

    vidoes.forEach(video => {
        const card = document.createElement('div')
        card.classList = 'card card-compact shadow-sm bg-red-200'
        card.innerHTML = `
        <figure class='relative'>
            <img class="w-[100%] h-[25vh] rounded" src=${video.thumbnail} alt="thumbnail" />
            ${video.others.posted_date?.length === 0 ? '' : `<span class='absolute right-2 bottom-2 text-xs px-4 py-2 bg-black rounded-md text-white'>${getTimeString(video.others.posted_date)}</span>`}
        </figure>
        <div class="px-0 py-3 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
            </div>
            <div>
                <h2 class="font-bold ">${video.title}</h2>
                <div class='flex gap-3 items-center'>
                    <p class='text-gray-600 text-lg'>${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified === true ? `<img class='w-5 h-5 object-cover' src="https://img.icons8.com/?size=80&id=41816&format=png">` : ''}
                </div>
                <p class="text-sm">Views: ${video.others.views}</p>
                <button onclick="loadDetails('${video.video_id}')" class='btn btn-sm border-t-cyan-300'>Show Details</button>
            </div>
        </div>
        `;
        videoContainer.append(card)
    })
}

// ===============================
// 📌 Sorting Function (Views অনুযায়ী)
// ===============================
function sortVideosByViews() {
    const sorted = [...videos].sort((a, b) => {
        // Views কে number এ convert করতে হবে
        const getViews = (viewStr) => parseInt(viewStr.replace(/[^0-9]/g, ""));
        return getViews(b.others.views) - getViews(a.others.views);
    });
    displayVideos(sorted);
}

// ===============================
// 📌 Search Input
// ===============================
document.getElementById('search-input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value)
})

// ===============================
// 📌 Sort Button
// ===============================
document.getElementById('sortBtn').addEventListener('click', sortVideosByViews);

// ===============================
// 📌 Initial Load
// ===============================
loadCategoride()
loadVideos()
















