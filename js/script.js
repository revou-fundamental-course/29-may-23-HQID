var text = "Sudah Terkirim"

document.getElementById("kirim").addEventListener('click', function() {
    console.log(text)
}) 

document.getElementById("input-nama").addEventListener('input', function(){
    var nama = document.getElementById("input-nama").value
    console.log(nama)
})