// 1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
// Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
// Lakukan FOR LOOP pada Javascript.

let user = 1;
for (user; user <= 100; user++){
    document.write ("user ke : " + user);
    document.write("<br/>")
}
console.log(user);

// 2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
// Nilai awal = 0
// Pengulangan = 10 kali
// Nilai awal ditambah 2 setiap pengulangan
// Tampilan hasil penambahan pada setiap pengulangan

for (let nilai = 0; nilai<20; nilai++){
    if ( nilai %2 == 0){
        console.log(nilai);
    }
} 

// 3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

for(let angka = 0; angka<= 20; angka++){
    if (angka===0){
        console.log(angka+"adalah angka genap");
    }else if(angka %2===0){
        console.log(angka+"adalah angka genap");
    }else{
        console.log(angka+"adalah angka ganjil");
    }
}


// 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
// Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
// Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
// Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user
//variabel isinya confrim, variabel count, while didalamnya ngecek confrim, 
//setiap cklik ngitung count, count++ setiap klik
let user = confirm('Apa anda mau menggulang?');
let count = 0;

while(user){
    count++;
    user =  confirm('Apa anda mau menggulang?');
}
console.log("Perulangan sudah dilakukan sebanyak" + count +"kali");



// 5. Buat sebuah program kuis.
// Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
// Lakukan pengecekan apakah jawaban dari user sudah benar
// Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
// Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
//variabel isinya prompt, while, prompt, mulai bener, break.
let user = prompt('Sebutkan Kepanjangan Dari Nama IB?','');

while(user){
    if (user=='Impact Byte'){
    user = alert ('Selamat jawaban Kamu Benar'); 
    }else{
    user = prompt('Sebutkan Kepanjangan Dari Nama IB?');    
    }
}
