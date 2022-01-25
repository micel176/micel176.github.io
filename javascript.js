function tampilFoto() {
    var fotoUpload = document.getElementById('foto');   //mencari elemen dg id 'foto'
    var reader = new FileReader();      //membaca file yang dipilih dari perangkat yg dipake

    reader.onload = function(foto) {
        document.getElementById('tampil').src = foto.target.result;
        //mengganti src dari elemen img dengan id 'tampil sesuai dg yg diupload
    }
    reader.readAsDataURL(fotoUpload.files[0]);
}