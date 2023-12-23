//buat fungsi
//ambil nilai username
//ambil nilai password
//kita cek apakah username dan passwordnya benar dengan yang kita kasih nilainya
//jika username dan password benar 
//maka berikah alert berhasil login dan arahkan ke file index
//jika pw dan username kosong
//maka berikan alert pw dan usename kosong
//jika pawword dan usernam salah
//tampilkan username dan password salah

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "anandasilvia05" && password == "0110123172"){
        alert("Anda berhasil login");
        window.location="index.html"
        return false;
    }
    else if (username =="" || password == ""){
        alert("Username/password tidak boleh kosong")
        return false;
    }
    else{
        alert("Username/password yang anda inputkan salah")
    
    }
    
}