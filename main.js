const toggleBtn = document.querySelector(".sidebar-toggle");
const crossBtn = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})
crossBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})