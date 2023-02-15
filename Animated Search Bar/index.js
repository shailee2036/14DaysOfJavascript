// const navbarEl = document.querySelector(".navbar");

// const bottomContainerEl = document.querySelector(".bottom-container");

// console.log(navbarEl.offsetHeight);

// console.log(bottomContainerEl.offsetTop);

// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY >
//     bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
//   ) {
//     navbarEl.classList.add("active");
//   } else {
//     navbarEl.classList.remove("active");
//   }
// });
const searchBarConatinerEl =document.querySelector(".search-bar-container");
const magnifierEl=document.querySelector(".magnifier");
magnifierEl.addEventListener("click", ()=>{
  searchBarConatinerEl.classList.toggle("active");
})