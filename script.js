// Menunggu sampai seluruh halaman HTML selesai dimuat oleh browser
document.addEventListener("DOMContentLoaded", function() {
    
    // Mengambil elemen formulir transaksi jualan skincare
    const formSkincare = document.getElementById("formTransaksi");
    const kotakPeringatan = document.getElementById("kotakError");

    // Logika pengaman saat tombol "Simpan Transaksi Barang" diklik
    if (formSkincare) {
        formSkincare.addEventListener("submit", function(event) {
            // Mengambil isi dari kotak-kotak input form
            const namaProduk = document.getElementById("namaTrx").value.trim();
            const jumlahBeli = document.getElementById("jumlahTrx").value.trim();
            const kategoriProduk = document.getElementById("kategoriTrx").value;

            // Variabel untuk menampung pesan kesalahan
            let pesanError = "";

            // Kriteria: Validasi inputan data menggunakan JavaScript
            if (namaProduk === "") {
                pesanError += "📍 Nama produk skincare tidak boleh kosong!<br>";
            }
            if (jumlahBeli === "" || jumlahBeli <= 0) {
                pesanError += "📍 Jumlah beli (Qty) harus diisi dan minimal 1 barang!<br>";
            }
            if (kategoriProduk === "") {
                pesanError += "📍 Silakan pilih kategori produk skincare!<br>";
            }

            // Jika ada kolom form yang belum diisi oleh pengguna
            if (pesanError !== "") {
                // Menahan form agar tidak otomatis me-refresh halaman
                event.preventDefault();
                
                // Memunculkan kotak pink berisi pesan error yang rapi
                kotakPeringatan.innerHTML = pesanError;
                kotakPeringatan.style.backgroundColor = "#ffe3e3";
                kotakPeringatan.style.color = "#d93838";
                kotakPeringatan.style.padding = "12px";
                kotakPeringatan.style.borderRadius = "6px";
                kotakPeringatan.style.marginBottom = "15px";
                kotakPeringatan.style.border = "1px solid #d93838";
                kotakPeringatan.style.fontSize = "0.9rem";
                kotakPeringatan.style.fontWeight = "bold";
            } else {
                // Jika semua inputan sudah lengkap diisi
                alert("Selamat! Data transaksi barang Isabella Beauty'Skincare berhasil disimpan.");
            }
        });
    }
});