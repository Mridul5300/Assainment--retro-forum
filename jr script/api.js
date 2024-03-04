const loadFroum = async (categoryName = 'coding') => {
   const responsive = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const data = await responsive.json();
     const post = data.posts
    // console.log(data.posts);
        setTimeout(() => {
          displayFroum(post)
        },2000)
}
 
const displayFroum = (postes) => {
        // console.log(postes);
     const postContianer = document.getElementById('post-container')

     postContianer.textContent = ''
    postes.forEach(posted => {
        console.log(posted);
       const div = document.createElement("div")
        div.classList = `flex flex-col gap-10 my-8 mx-8`
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
        <div class="indicator">
          <span class="indicator-item badge badge-secondary"></span> 
          <div class="grid w-24 h-24 bg-base-300 place-items-center"><img src="${posted.image}" alt=""></div>
        </div>
          <div class="card-body">
            <div class="flex gap-2">
            <h2>#${posted.category}</h2>
              <h3>Author:${posted.author.name}</h3>
            </div>
            <h2 class="card-title">${posted.title}</h2>
            <p>${posted.description}</p>
            
            <div class="card-actions gap-16">
              <div class="flex gap-2">
                <img src="images/tabler-icon-message-2.png" alt=""><span>${posted.comment_count}</span>
                <img src="images/Group 16.png" alt=""><span>${posted.view_count}</span>
                <img src="images/Group 18.png" alt=""><span>${posted.posted_time}</span>
              </div>
                        <div>
                        <button class=" add-button btn  rounded-full"><img src="images/email 1.png" alt=""></button>
                      </div>
            </div>
          </div>
        </div>  
      `;
        postContianer.appendChild(div)
    });
    toggleSpiner(false);

    postContianer.addEventListener("click", function(event) {
        if (event.target.classList.parentnode.childnodes) {
            
            count++;
            setInnerText("counting", count); 
        }
    });
}
let count = 0;

function setInnerText(id, value) {
document.getElementById(id).innerText = value;
}

const handelsearch = () => {
  toggleSpiner(true)
     const searchFeild = document.getElementById('search-feild')
        const searchresult = searchFeild.value;
        console.log(searchresult);
        loadFroum(searchresult)
}
const toggleSpiner = (isloading) => {
  const loadingSpinner = document.getElementById("load-spiner") 


  if(isloading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
 }


const latestLoad =  async () =>{
    const responsive = await fetch (' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await responsive.json()
    // console.log(data);
    latestDisplay (data)
}
const latestDisplay = (upadate) => {
    //    console.log(upadate);
       const latestContainer = document.getElementById('latest-container')
       upadate.forEach(latest => {
          const div = document.createElement('div')
          div.classList = `card card-compact w-96 bg-base-100 shadow-xl`
          div.innerHTML = `
          <figure><img src="${latest.cover_image}" alt="" /></figure>
                  <div class="card-body">
                    <h2>${latest?.author?.posted_date || 'No publish date'}</h2>
                    <h2 class="card-title">${latest.title}</h2>
                    <p>${latest.description}</p>
                    <div class=>
                    <h2>${latest.author.name}</h2>
                    <h3>${latest?.author?.designation ||'undifined'}</h3>
                    </div>
                  </div>
          `;
          latestContainer.appendChild(div)
       });
}
latestLoad();
loadFroum();