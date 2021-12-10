const textarea = document.getElementById("textarea");
const count = document.getElementById("count");

textarea.addEventListener("keyup", () =>{
  count.innerHTML = textarea.value.length;
})