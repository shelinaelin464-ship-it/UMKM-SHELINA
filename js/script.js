// ===================================
// GORENGAN NONA CHECHE
// CUSTOM JAVASCRIPT
// ===================================

// Ubah data berikut sesuai informasi usaha.

const KONTAK = {

    whatsapp: "628388320525",

    // Contoh:
    // whatsapp: "6281234567890"

    instagram: "https://www.instagram.com/shelinelalaa10/",

    // Contoh:
    // instagram: "https://www.instagram.com/username/"

    maps: "https://www.google.com/maps/search/?api=1&query=Dolok+Ilir%2C+Sumatera+Utara%2C+Indonesia"

    // Isi dengan tautan Google Maps lokasi usaha.

};


document.addEventListener("DOMContentLoaded", function () {

    // Tahun otomatis pada footer.
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // Mengatur tautan kontak.
    document.querySelectorAll("[data-contact]").forEach(function (link) {

        const type = link.dataset.contact;
        let url = KONTAK[type];

        // Membuat tautan WhatsApp.
        if (type === "whatsapp" && url) {

            url = "https://wa.me/" + url.replace(/\D/g, "") +
                "?text=" +
                encodeURIComponent(
                    "Halo Nona Cheche, saya ingin bertanya tentang menu gorengan."
                );

        }

        // Jika kontak sudah diisi.
        if (url) {

            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

        } else {

            // Jika kontak belum diisi.
            link.href = "#";

            link.addEventListener("click", function (event) {

                event.preventDefault();

                alert(
                    "Informasi kontak belum diatur. " +
                    "Silakan isi data pada file js/script.js."
                );

            });

        }

    });


    // Menutup navbar setelah menu dipilih di HP.
    document.querySelectorAll(
        ".navbar-nav .nav-link, .navbar-nav .btn"
    ).forEach(function (link) {

        link.addEventListener("click", function () {

            const navbar = document.getElementById("navbarMenu");

            if (
                navbar &&
                navbar.classList.contains("show") &&
                window.bootstrap
            ) {

                bootstrap.Collapse
                    .getOrCreateInstance(navbar)
                    .hide();

            }

        });

    });

});