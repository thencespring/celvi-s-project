// Mengambil elemen tombol berdasarkan ID 'sapaButton' dari HTML
const tombolSapa = document.getElementById('sapaButton');

// Menambahkan 'listener' agar tombol mendeteksi ketika diklik oleh pengguna
tombolSapa.addEventListener('click', function() {
    // Memunculkan kotak dialog pop-up saat tombol ditekan
    alert('Halo! Terima Kasih Sudah Stalking!');
});
