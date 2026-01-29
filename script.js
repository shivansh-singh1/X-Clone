//Left Sidebar
let hamburger = document.getElementById("hamburger");
let Xmark = document.getElementById("Xmark");
let drawer = document.getElementById("drawer");
let RightDrawer = document.getElementById("drawerRight");

hamburger.addEventListener("click", () => {
    hamburger.classList.add("hidden");
    Xmark.classList.remove("hidden");
    drawer.classList.remove("hidden")
    if (!RightDrawer.classList.contains("hidden")) {
        RightDrawer.classList.add("hidden");
    }

})
Xmark.addEventListener("click", () => {
    hamburger.classList.remove("hidden");
    Xmark.classList.add("hidden");
    drawer.classList.add("hidden")
})

//follow container

let followBtn = document.querySelectorAll(".followBtn");
let unfollowBtn = document.querySelectorAll(".unfollowBtn");
followBtn.forEach((element, index) => {
    let element2 = unfollowBtn[index];
    element.addEventListener("click", () => {
        element.classList.add("hidden");
        element2.classList.remove("hidden");
    })

    element2.addEventListener("click", () => {
        element2.classList.add("hidden");
        element.classList.remove("hidden");
    })
});

// right sidebar
let rightSidebar = document.getElementById("trending");
let drawerRight = document.getElementById("drawerRight");
let Xmark2 = document.getElementById("Xmark2");
rightSidebar.addEventListener("click", () => {
    drawerRight.classList.replace("hidden", "flex");
    drawerRight.classList.add("flex-col");
    rightSidebar.classList.add("hidden");
    Xmark2.classList.remove("hidden");
    if (!drawer.classList.contains("hidden")) {
        drawer.classList.add("hidden");
    }
})
Xmark2.addEventListener("click", () => {
    rightSidebar.classList.remove("hidden");
    Xmark2.classList.add("hidden");
    drawerRight.classList.add("hidden")
})

//Media Upload
let MediaBtn = document.getElementById("mediaBtn");
let mediaUpload = document.getElementById("mediaUpload");
MediaBtn.addEventListener("click", () => {
    mediaUpload.click();
})

//Post
let username = "yashwant7.siuu";
let namee = "Yashwant Kumar Rai";
let imgg;
let fileType;
document.getElementById("mediaPreview");
document.getElementById('mediaUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        imgg = URL.createObjectURL(file);
        fileType = file.type
    }
    if (fileType.startsWith("image/")) {
        mediaPreview.innerHTML = `
          <img src="${imgg}" alt="Preview"
            class="max-h-[25vh] max-w-[77vw] sm:max-w-[35vw] sm:max-h-[45vh] 
                   object-contain rounded-2xl border-1 border-gray-600 mt-2">`;
    } 
    else if (fileType.startsWith("video/")) {
        mediaPreview.innerHTML = `
          <video controls
            class="max-h-[25vh] max-w-[77vw] sm:max-w-[35vw] sm:max-h-[45vh] 
                   object-contain rounded-2xl border-1 border-gray-600 mt-2">
            <source src="${imgg}" type="${fileType}">
          </video>`;
    }
})

let page = document.getElementById("tweets");
let firstElement = document.getElementById("writePosts");
document.getElementById("postBtn").addEventListener("click", () => {
    console.log("click succesful");
    let content = document.getElementById("ContentInput").value;
    let html = `<div class="flex flex-col demoTweet h-fit border-b-1 border-gray-600 p-3">
                <div class="header flex w-[inherit] gap-3 items-center">
                    
                    <i
                    class="fa-solid fa-circle-user flex text-black bg-white rounded-full text-[40.1px] h-10 w-10 cursor-pointer"></i>
                    
                    <div class="name text-white font-semibold">${namee}</div>
                    <div class="username text-xs text-neutral-300">@${username}</div>
                    <div class="dot text-xs text-neutral-300">·</div>
                    <div class="TimeAgo text-xs text-neutral-300">x h</div>
                </div>
                <div class="mainContent text-white pl-[54px]">
                    ${content}
                    ${imgg && fileType.startsWith("image/") ? 
   `<img src="${imgg}" alt="Uploaded image"
      class="max-h-[25vh] max-w-[77vw] sm:max-w-[35vw] sm:max-h-[45vh] 
             object-contain rounded-2xl border-1 border-gray-600 mt-2">` 
: ""}

${imgg && fileType.startsWith("video/") ? 
   `<video controls
      class="max-h-[25vh] max-w-[77vw] sm:max-w-[35vw] sm:max-h-[45vh] 
             object-contain rounded-2xl border-1 border-gray-600 mt-2">
      <source src="${imgg}" type="${fileType}">
   </video>` 
: ""}

                </div>
                <div class="footer flex gap-17 sm:gap-37 text-neutral-300/50 text-[14px] pl-[54px] mt-4">
                    <i class="fa-solid fa-heart cursor-pointer hover:bg-pink-600/50 p-1 rounded-lg"></i>
                    <i
                        class="fa-solid fa-comment cursor-pointer hover:bg-[#6bc278] hover:text-black p-1 rounded-lg"></i>
                    <i
                        class="fa-solid fa-arrows-turn-to-dots cursor-pointer hover:bg-[#6bc278] hover:text-black p-1 rounded-lg"></i>
                    <i class="fa-solid fa-eye cursor-pointer hover:bg-[#6bc278] hover:text-black p-1 rounded-lg"></i>
                </div>
            </div>`

    firstElement.insertAdjacentHTML("afterend", html);
    document.getElementById("ContentInput").value = "";
    imgg = null;
    document.getElementById("mediaUpload").value = "";
})

//like functionality ->
page.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {
        e.target.classList.toggle("text-red-500");
    }
});