// navigate between step with the buttons next and back

document.querySelector(".back").style.display = "none";
document.querySelector(".buttons").style.justifyContent = "flex-end";
document.querySelector(".next").addEventListener("click", openStep2);

function openStep2() {
  console.log(document.querySelector(".formNavigation li:nth-child(2):after"));
  document
    .querySelector(".formNavigation li:nth-child(2)")
    .classList.add("acitve");
  document.querySelector(".step-1").classList.add("hide");
  document.querySelector(".step-2").classList.remove("hide");
  document.querySelector(".step-2").classList.add("show");
  document.querySelector(".back").style.display = "block";
  document.querySelector(".buttons").style.justifyContent = "space-between";
  document.querySelector(".back").addEventListener("click", goBack);
  document.querySelector(".next").addEventListener("click", openStep3);
}

function goBack() {
  if (document.querySelector(".step-2").classList.contains("show")) {
    document
      .querySelector(".formNavigation li:nth-child(2)")
      .classList.remove("acitve");
    document.querySelector(".step-1").classList.remove("hide");
    document.querySelector(".step-2").classList.remove("show");
    document.querySelector(".step-2").classList.add("hide");
    document.querySelector(".back").style.display = "none";
    document.querySelector(".buttons").style.justifyContent = "flex-end";
    document.querySelector(".next").removeEventListener("click", openStep3);
    document.querySelector(".next").addEventListener("click", openStep2);
  }
  if (document.querySelector(".step-3").classList.contains("show")) {
    document
      .querySelector(".formNavigation li:nth-child(3)")
      .classList.remove("acitve");
    document.querySelector(".step-3").classList.remove("show");
    document.querySelector(".step-3").classList.add("hide");
    document.querySelector(".step-2").classList.remove("hide");
    document.querySelector(".step-2").classList.add("show");
    document.querySelector(".next").textContent = "next";
    document.querySelector(".next").addEventListener("click", openStep3);
  }
}
function openStep3() {
  console.log(3);
  createData();
  document
    .querySelector(".formNavigation li:nth-child(3)")
    .classList.add("acitve");
  document.querySelector(".step-2").classList.remove("show");
  document.querySelector(".step-2").classList.add("hide");
  document.querySelector(".step-3").classList.remove("hide");
  document.querySelector(".step-3").classList.add("show");
  document.querySelector(".summeryItemsAccount").classList.remove("hide");
  document.querySelector(".summeryItemsAccount").classList.add("show");

  document.querySelector(".next").textContent = "confirm payent";
  document.querySelector(".next").removeEventListener("click", openStep3);

  document.querySelector(".back").addEventListener("click", goBack);
}

// post data of a new user

const form = document.querySelector("form");
console.log(form.elements);

function createData() {
  event.preventDefault();
  const data = {
    email: form.elements.email.value,
    firstname: form.elements.firstName.value,
    lastname: form.elements.lastName.value,
    country: form.elements.country.value,
    phone: form.elements.phone.value
  };
  console.log(data);
  post(data);
}

function post(data) {
  const postData = JSON.stringify(data);

  fetch("https://keastuff-650b.restdb.io/rest/voltform", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5ca212d8df5d634f46ecb115",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => showData(data));
}

function showData(e) {
  console.log(e);
  const user = document.querySelector(".account");
  user.querySelector(".summeryItemName").textContent =
    e.firstame + "" + e.lastname;
  user.querySelector(".summeryItemEmail").textContent = e.email;
  user.querySelector(".summeryItemPhone").textContent = e.phone;
  user.querySelector(".summeryItemCountry").textContent = e.country;

  //   document.querySelector(".summeryItemsAccount").appendChild(user);
  // remove();
}
