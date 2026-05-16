// Pesan selamat datang
alert("Selamat Datang di Web Jerwelo");

// Tombol
const tombol = document.querySelector("button");

tombol.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});

// Event klik
tombol.addEventListener("click", function() {

    // Warna random
    const warna = [
        "lightblue",
        "lightgreen",
        "lightyellow",
        "lightpink"
    ];

    // Ambil random
    const random = Math.floor(Math.random() * warna.length);

    // Ubah background
    document.body.style.backgroundColor = warna[random];

});

// untuk menambahkan validasi untuk formm
const form = document.getElementById("formMahasiswa");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let pesan = document.getElementById("pesan");

    // VALIDASI
    if (nama === "") {
        pesan.innerHTML = "Nama tidak boleh kosong";
        pesan.style.color = "red";
    }

    else if (!email.includes("@")) {
        pesan.innerHTML = "Email tidak valid";
        pesan.style.color = "red";
    }

    else if (password.length < 8) {
        pesan.innerHTML = "Password minimal 8 karakter";
        pesan.style.color = "red";
    }

    else {
        pesan.innerHTML = "Data berhasil dikirim";
        pesan.style.color = "green";

        // simulasi database (console)
        console.log({
            nama: nama,
            email: email,
            password: password
        });
    }

});