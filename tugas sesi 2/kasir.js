
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const daftarHarga = [];


function hitungTotalDanDiskon() {
  console.log("\n--- Menghitung Total ---");

  if (daftarHarga.length === 0) {
    console.log("Tidak ada barang yang diinput.");
    return;
  }

  const totalBelanja = daftarHarga.reduce((total, harga) => total + harga, 0);

  let hargaAkhir = totalBelanja;
  let diskonPersen = 0;
  
  if (totalBelanja > 1000000) {
    diskonPersen = 15;
    hargaAkhir = totalBelanja - (totalBelanja * 0.15);
  } else if (totalBelanja > 500000) {
    diskonPersen = 10;
    hargaAkhir = totalBelanja - (totalBelanja * 0.10);
  }

  const formatRupiah = (angka) => `Rp${angka.toLocaleString('id-ID')}`;

  console.log(`Total Harga Asli      : ${formatRupiah(totalBelanja)}`);

  if (diskonPersen > 0) {
    console.log(`Selamat! Anda mendapat diskon sebesar ${diskonPersen}%.`);
    console.log(`Harga Akhir Setelah Diskon: ${formatRupiah(hargaAkhir)}`);
  } else {
    console.log("Belanja Anda tidak memenuhi syarat untuk mendapatkan diskon.");
    console.log(`Harga yang Harus Dibayar  : ${formatRupiah(hargaAkhir)}`);
  }
}

function tanyaHarga() {
  rl.question("Masukkan harga barang (atau ketik 'selesai' untuk menghitung): ", (input) => {
    // Jika pengguna mengetik 'selesai', hentikan bertanya dan hitung totalnya
    if (input.toLowerCase() === 'selesai') {
      hitungTotalDanDiskon();
      rl.close();
      return;
    }

    const harga = parseFloat(input);

    if (!isNaN(harga) && harga > 0) {
      daftarHarga.push(harga);
      console.log(`-> Barang dengan harga Rp${harga.toLocaleString('id-ID')} ditambahkan.`);
    } else {
      console.log("Input tidak valid. Harap masukkan angka yang benar.");
    }

    tanyaHarga();
  });
}

console.log("Selamat datang di sistem kasir!");
console.log("Silakan masukkan harga setiap barang satu per satu.");
tanyaHarga();
