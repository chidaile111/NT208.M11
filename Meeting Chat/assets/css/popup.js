const btn_register = document.querySelector("#btn_register");
const btn_login = document.querySelector("#btn_login");
const modal = document.querySelector("#modal");
const register_form = document.querySelector("#register-form");
const login_form = document.querySelector("#login-form");
const btn_login_form = document.querySelector("#btn_login_form");
const btn_register_form = document.querySelector("#btn_register_form");
const btn_back = document.querySelectorAll(
  ".btn.btn--normal.auth-form__controls-back"
);

btn_register.onclick = function () {
  modal.style.display = "flex";
  register_form.style.display = "block";
  login_form.style.display = "none";
  btn_back[0].onclick = function () {
    modal.style.display = "none";
    register_form.style.display = "none";
    login_form.style.display = "none";
  };
};

btn_login.onclick = function () {
  modal.style.display = "flex";
  register_form.style.display = "none";
  login_form.style.display = "block";
  btn_back[1].onclick = function () {
    modal.style.display = "none";
    register_form.style.display = "none";
    login_form.style.display = "none";
  };
};

btn_login_form.onclick = function () {
  register_form.style.display = "none";
  login_form.style.display = "block";
};

btn_register_form.onclick = function () {
  register_form.style.display = "block";
  login_form.style.display = "none";
};
