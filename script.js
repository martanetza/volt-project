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
    e.firstname + "" + e.lastname;
  user.querySelector(".summeryItemEmail").textContent = e.email;
  user.querySelector(".summeryItemPhone").textContent = e.phone;
  user.querySelector(".summeryItemCountry").textContent = e.country;
}
//  cart items

if (document.querySelector("#numberOfChargers").value == 0) {
  document.querySelector("#deliveryItems").classList.add("hide");
}
console.log(document.querySelector("#numberOfServices"));

document
  .querySelector("#numberOfServices")
  .addEventListener("change", showPriceServices);

function showPriceServices() {
  document.querySelector(".services-number p").textContent =
    179 * document.querySelector("#numberOfServices").value;
  document.querySelector(".services-number span p").textContent =
    250 * document.querySelector("#numberOfServices").value;
  document.querySelector(
    ".finalPriceService"
  ).textContent = document.querySelector(".services-number p").textContent;
  document.querySelector(".finalPriceAll").textContent =
    Number(document.querySelector(".finalPriceService").textContent) +
    Number(document.querySelector(".finalPriceChargers").textContent);
}
document
  .querySelector("#numberOfChargers")
  .addEventListener("change", showPriceChargers);

function showPriceChargers() {
  document.querySelector(".items-number p").textContent =
    200 * document.querySelector("#numberOfChargers").value;
  document.querySelector(
    ".finalPriceChargers"
  ).textContent = document.querySelector(".items-number p").textContent;
  document.querySelector(".finalPriceAll").textContent =
    Number(document.querySelector(".finalPriceService").textContent) +
    Number(document.querySelector(".finalPriceChargers").textContent);
  if (document.querySelector("#numberOfChargers").value > 0) {
    document.querySelector("#deliveryItems").classList.remove("hide");
    document.querySelector("#deliveryItems").classList.add("show");

    // document.querySelector("#checkboxCharger").checked = false;
    // showDeliveryOptions();
  }
  if (document.querySelector("#numberOfChargers").value == 0) {
    document.querySelector("#deliveryItems").classList.remove("show");
    document.querySelector("#deliveryItems").classList.add("hide");
  }
}

// document
//   .querySelector("#checkboxCharger")
//   .addEventListener("click", showDeliveryOptions);

function showDeliveryOptions() {
  if (document.querySelector("#checkboxCharger").checked == true) {
    document.querySelector("#deliveryItems").classList.add("hide");
    document.querySelector("#numberOfChargers").value = "0";
    document.querySelector(".items-number p").textContent =
      200 * document.querySelector("#numberOfChargers").value;
    document.querySelector(".finalPriceChargers").textContent = "0";
    document.querySelector(".finalPriceAll").textContent =
      Number(document.querySelector(".finalPriceService").textContent) +
      Number(document.querySelector(".finalPriceChargers").textContent);
  } else {
    document.querySelector("#deliveryItems").classList.remove("hide");
    // document.querySelector("#cartItem-charger").classList.remove("hide");
    document.querySelector(
      ".finalPriceChargers"
    ).textContent = document.querySelector(".items-number p").textContent;
    document.querySelector(".finalPriceAll").textContent =
      Number(document.querySelector(".finalPriceService").textContent) +
      Number(document.querySelector(".finalPriceChargers").textContent);
  }
}
