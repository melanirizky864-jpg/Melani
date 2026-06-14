document.addEventListener('DOMContentLoaded', function() {
    fetch('data/isi-teks.json')
        .then(response => response.json())
        .then(data => {
            // Mengganti teks di HTML berdasarkan ID
            document.getElementById('judul').textContent = data.judul;
            document.getElementById('subjudul').textContent = data.subjudul;
            document.getElementById('p1').textContent = data.p1;
            document.getElementById('p2').textContent = data.p2;
        })
        .catch(err => console.error('Error:', err));
});