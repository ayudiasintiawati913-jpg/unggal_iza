// =============================
// PIN
// =============================

// Ganti PIN sesuai keinginan
const pinBenar = "150700";

function cekPin() {

    const input = document.getElementById("pinInput");
    const pesan = document.getElementById("salahsayang");
    const box = document.querySelector(".pinBox");

    if (input.value === pinBenar) {

        pesan.style.opacity = "0";

        document.getElementById("pinScreen").style.display = "none";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("music").play();

    } else {

        pesan.innerHTML = "❌ Salah Sayang ❤️";
        pesan.style.opacity = "1";

        box.classList.add("shake");
        input.classList.add("pinError");

        setTimeout(() => {
            box.classList.remove("shake");
            input.classList.remove("pinError");
        }, 500);

        input.value = "";
        input.focus();
    }
}
// =============================
// MULAI
// =============================

function mulai() {

    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";

    const musik = document.getElementById("music");

    musik.play().catch(function(error){
        console.log("Musik tidak bisa diputar:", error);
    });

    // Jalankan efek mengetik
    ketik();

}

// =============================
// TYPING EFFECT
// =============================

const text = `

Hari ini adalah hari yang sangat spesial.

Semoga semua impian unggal menjadi nyata.

Terima kasih sudah pernah hadir di hidup busu.

Busu akan selalu mendoakan unggal bahagia.

Maafin busu karna bilang mau pergi yg kemarin ya sayang.

busu sayang banget sama unggal

Happy Birthday unggal iza ❤️

`;

let i = 0;

function ketik() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(ketik, 45);

    }

}

// =============================
// HADIAH
// =============================

function hadiah() {

    alert(
`🎉 Happy Birthday ❤️

Semoga panjang umur,
selalu sehat,
bahagia,
dan semua impian unggal tercapai.
maaf ya sayangg 

Busu Sayang Unggal ❤️`
    );

}

// =============================
// LOVE EFFECT
// =============================

function buatLove(){

    const love = document.createElement("div");

    love.innerHTML = "❤️";

    love.style.position = "fixed";
    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.top = "-40px";

    love.style.fontSize = (20 + Math.random()*25) + "px";

    love.style.pointerEvents = "none";

    love.style.zIndex = "9999";

    love.style.transition = "transform 6s linear, opacity 6s linear";

    document.getElementById("love-container").appendChild(love);

    setTimeout(()=>{

        love.style.transform =
        "translateY(120vh) rotate(360deg)";

        love.style.opacity="0";

    },100);

    setTimeout(()=>{

        love.remove();

    },6000);

}

// =============================
// ENTER UNTUK LOGIN
// =============================

document.getElementById("pinInput").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        cekPin();

    }

});

// =============================
// GALERI ZOOM
// =============================

const gambar = document.querySelectorAll(".grid img");

gambar.forEach(function(img){

    img.addEventListener("click",function(){

        window.open(this.src,"_blank");

    });

});

// Love terus turun
setInterval(buatLove,250);