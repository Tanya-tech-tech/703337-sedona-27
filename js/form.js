var link = document.querySelector(".search");
var popup = document.querySelector(".modal");
var close = document.querySelector(".map");
var arrival = popup.querySelector("[name=date-of-arrival]");
var departure = popup.querySelector("[name=date-of-departure]");
var form = popup.querySelector("form");
var adult = popup.querySelector("[name=adult]");
var isStorageSupport = true;
var storage = "";
  
  try {
    storage = localStorage.getItem("adult");
  } catch (err) {
    isStorageSupport = false;
  }
  
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
      adult.value = storage;
      children.focus();
    }
    else {
	arrival.focus();
    }
  });
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    });
    
form.addEventListener("click", function (evt) {
	if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    }
    else {
		if (isStorageSupport) {
	localStorage.setItem("adult", adult.value);	
	}
		}
  });
  
   window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
