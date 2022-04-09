function balikKata(kata){
    var str = "Niomic!";
    var str2 = "JavaScript";
    var str3 = "alohahola";
    var str4 = "Jawa_Barat";
    var hasil = "";

    for(var i = kata.length - 1; i>=0; i--){
        hasil += kata[i];
    }
   return hasil;
}
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));