const loadFroum = async () => {
   const responsive = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    const data = await responsive.json();
     const post = data.posts
    // console.log(data.posts);
   displayFroum(post)
}
 
const displayFroum = (postes) => {
        // console.log(postes);
     const postContianer = document.getElementById('post-container')
    postes.forEach(posted => {
        // console.log(posted);
       const div = document.createElement("div")
        div.classList = `flex-row lg:flex justify-center gap-2`
        div.innerHTML = `
        <div class="flex-row lg:flex justify-center gap-2 ">
        <div class="border border-solid   lg:w-[650px]">
          <div class="flex my-2">
            <div class="indicator">
              <span class="indicator-item badge badge-secondary mx-3"></span>
              <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src="${posted.image}" alt=""></div>
            </div>
            <div class="flex mx-16 gap-4">
              <h1>${posted.category}</h1>
              <h2>Author:${posted.author.name}</h2>
            </div>
          </div>
             <h2 class="text-xl mx-28">${posted.title }</h2>
             <div class="flex gap-4 mx-28 my-4">
                <img src="images/tabler-icon-message-2.png" alt=""><p>${posted.comment_count}</p>
                <img src="images/Group 16.png" alt=""><p>${posted.view_count}</p>
                <img src="images/Group 18.png" alt=""><p>5 min</p>
                 <button class="btn mx-20 lg:mx-52 rounded-full"><img src="images/email 1.png" alt=""></button>
             </div>
            </div>
            <div>
              <div class="flex gap-10">
                <h2>Title</h2>
                <h3>Mark as read (4)</h3>
              </div>
              <div id="tital-container">
              </div>
             </div>
        </div>
         `;
        postContianer.appendChild(div)
    });
}
const latestLoad =  async () =>{
    const responsive = await fetch (' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await responsive.json()
    // console.log(data);
    latestDisplay (data)
}
const latestDisplay = (upadate) => {
       console.log(upadate);
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