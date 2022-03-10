var a = 5;
let b = "kampus merdeka";
const nama = "Budi"
let terdaftar = true; //Nomor 1 bag b (nilainya diubah menjadi true ,sebelumnya bernilai false)
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " + 
        nama +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}


// Jawaban nomor 1
// bagian b : melakukan perubahan pada variabel terdaftar menjadi nilai true.
// bagain d start
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; dihilangkan karena akan error, karena nama menggunakan keyword const.

console.log("array = " + lengkap_arr[2]); //bagain a : menampilkan index ke-2 dari perintah baris 5.
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); // Bagian c : melakukakan pemanggilan fungsi perkenalan.
// bagain d end

// Jawaban Nomor 2
// 1. Karena kondisinya tidak terpenuhi sebelumnya, dimana variable terdaftar sebelumnya dideklarasikan bernilai false.
// 2. Variable nama menggunakan keyword "const" sehingga tidak dapat di reassigment.
// 3. Tidak dapat dieksekusi, Karena tidak saling berhubungan. Alasan variabel asal tidak dapat di gunakan karena variabel asal adalah variabel local dari fungsi perkenalan sehingga scopenya hanya berada di dalam fungsi tersebut.










