///////////////////////////////////////////////////////////////////////////////////// MODAL CONTENT VAR

var feedback_open = document.querySelector(".btn-feedback");

var feedback_popup = document.querySelector(".modal-content");
var feedback_close = feedback_popup.querySelector(".modal-content-close");

var overlay = document.querySelector(".modal-overlay");

var feedback_name = feedback_popup.querySelector("[name=name-feedback]");
var feedback_name_label = feedback_popup.querySelector("[for=name-feedback]");
var feedback_email = feedback_popup.querySelector("[name=email-feedback]");
var feedback_email_label = feedback_popup.querySelector("[for=email-feedback]");

////////////////////////////////////////////////////////////////////////////////////// SUBSCRIBE FORM VAR

var subscribe = document.querySelector(".subscribe");
var subscribe_email = subscribe.querySelector("[name=email]");
var subscribe_email_label = subscribe.querySelector("[for=email-input]");

////////////////////////////////////////////////////////////////////////////////////// HEADER VAR

var search = document.querySelector(".user-search");
var search_text = search.querySelector("[name=search]");
var search_text_label = search.querySelector("[for=search-input]");

var user_login = document.querySelector(".user-login");
var login = user_login.querySelector("[name=login]");
var login_label = user_login.querySelector("[for=login-email]");
var password = user_login.querySelector("[name=password]");
var password_label = user_login.querySelector("[for=login-password]");

////////////////////////////////////////////////////////////////////////////////////// MODAL CONTENT

feedback_open.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.add("modal-content-show");
  overlay.classList.add("overlay-show");
});

feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.remove("modal-content-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback_popup.classList.contains("modal-content-show")) {
        feedback_popup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-show");
    }
  }
});

feedback_name.onfocus = function() {
  feedback_name_label.classList.add("label-show");
};

feedback_name.onblur = function() {
  if (feedback_name.value) {
    feedback_name_label.classList.add("label-color");
    }
  else {
    feedback_name_label.classList.remove("label-show");
    feedback_name_label.classList.remove("label-color");
  }
};

feedback_email.onfocus = function() {
  feedback_email_label.classList.add("label-show");
};

feedback_email.onblur = function() {
  if (feedback_email.value) {
    feedback_email_label.classList.add("label-color");
    }
  else {
    feedback_email_label.classList.remove("label-show");
    feedback_email_label.classList.remove("label-color");
  }
};

////////////////////////////////////////////////////////////////////////////////////// SUBSCRIBE FORM

subscribe_email.onfocus = function() {
  subscribe_email_label.classList.add("label-show");
};

subscribe_email.onblur = function() {
  if (subscribe_email.value) {
    subscribe_email_label.classList.add("label-color");
    }
  else {
    subscribe_email_label.classList.remove("label-show");
    subscribe_email_label.classList.remove("label-color");
  }
};

////////////////////////////////////////////////////////////////////////////////////// HEADER

search_text.onfocus = function() {
  search_text_label.classList.add("label-show");
};

search_text.onblur = function() {
  if (search_text.value) {
    search_text_label.classList.add("label-color");
    }
  else {
    search_text_label.classList.remove("label-show");
    search_text_label.classList.remove("label-color");
  }
};

login.onfocus = function() {
  login_label.classList.add("label-show");
};

login.onblur = function() {
  if (login.value) {
    login_label.classList.add("label-color");
    }
  else {
    login_label.classList.remove("label-show");
    login_label.classList.remove("label-color");
  }
};

password.onfocus = function() {
  password_label.classList.add("label-show");
};

password.onblur = function() {
  if (password.value) {
    password_label.classList.add("label-color");
    }
  else {
    password_label.classList.remove("label-show");
    password_label.classList.remove("label-color");
  }
};
