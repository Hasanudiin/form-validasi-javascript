//

let password = document.getElementById("pass");
let submit = document.getElementById("submit-form");
let hiddenPass = document.getElementById("hidden-pass");
let showPass = document.getElementById("show-pass");

// Show & hidden password
hiddenPass.addEventListener("click", function () {
  hiddenPass.style.display = "none";
  showPass.style.display = "block";
  password.type = "text";
});

showPass.addEventListener("click", function () {
  showPass.style.display = "none";
  hiddenPass.style.display = "block";
  password.type = "password";
});

// validasi form

// 1. jika salah form kosong maka -> tidak bisa submit
function validation() {
  let userName = document.getElementById("user-name").value;
  let password = document.getElementById("pass").value;
  let warning = document.getElementById("warning");

    if (!userName == "" && !password == "") {
        submit.addEventListener("click", function (event) {
            event.preventDefault();
            warning.style.display = "flex";
            warning.style.color = "green";
            warning.innerHTML="login succes"
            // return true;
        });
    } else { 
        submit.addEventListener("click", function () {
            warning.style.display = "flex";
            warning.innerHTML="form belum lengkap. silahkan periksa form lagi"
        });
    }
}

// 2. jika password jumlahnya lebih kecil dari 6 maka ada peringatan dan tidak bisa masuk
// 3. password harus mengandung salah satu huruf besar

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.querySelector(".error");

  errorMessage.innerHTML = "";

  if (!username || !password) {
    errorMessage.innerHTML = "Form tidak boleh kosong";
    return;
  }

  if (password.length < 6) {
    errorMessage.innerHTML = "Password harus lebih dari 6 karakter";
    return;
  }

  if (!/[A-Z]/.test(password)) {
    errorMessage.innerHTML = "Password harus mengandung huruf besar";
    return;
  }

  // kode untuk mengirimkan form disini
});
