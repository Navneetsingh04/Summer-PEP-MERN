


const form = (document.getElementsByTagName("form")[0].style.backgroundColor = "green");

// add class
document.getElementsByTagName("form")[0].classList.add("myform");

// remove class
document.getElementsByTagName("form")[0].classList.remove("myForm2");

// toggle class
function toggle() {
  const form = document.getElementsByTagName("form")[0];

  form.classList.toggle("form2");
}
