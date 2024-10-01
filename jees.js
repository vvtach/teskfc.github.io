const list = document.querySelector(".list");

// action
document.querySelector("#menu").onclick = () => {
  list.classList.toggle("active");
};

let luar = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!luar.contains(e.target) && !list.contains(e.target)) {
    list.classList.remove("active");
  }
});

// tag klik

document.querySelector("#ex").onclick = () => {
  list.classList.remove("active");
};
