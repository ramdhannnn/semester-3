let matematika = 85;
let bahasainggris = 90;
let ipa = 78;

let nilairatarata = (matematika+bahasainggris+ipa)/3;

console.log(`Nilai Rata Rata siswa adalah: ${nilairatarata}`);
console.log(`Tipe data dari Nilai Rata Rata adalah: ${typeof nilairatarata}`);

let statuskelulusan;
if (nilairatarata >= 80) {
    statuskelulusan = "Lulus"
} else {
    statuskelulusan = "Tidak Lulus"
}

console.log(`status kelulusan siswa: ${statuskelulusan}`);