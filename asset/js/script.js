// Sweetalert Login
//const login = document.getElementById("login");
//login.addEventListener("click", function () {
//  Swal.fire("Selamat!", "Kamu berhasil login!", "success");
//});

// Typed Animation
var typed = new Typed(".typedAnimation", {
  strings: ["Udah siap hadapi UTBK 2023?", "Mari raih cita bersama Amaranta"],
  typeSpeed: 60,
  delaySpeed: 100,
  loop: true,
});

// Sweetalert Pilih Paket
function paketAlert() {
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Apakah kamu memilih paket ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Selamat!", "Kamu telah berlangganan.", "success");
    }
  });
}
