const contentUtama = document.getElementById('content-utama');

const namaOrangTua = ['Wawan', 'Ajat', 'Saiul', 'dodo']

for(let i = 0; i < namaOrangTua.length; i++){
  console.log(namaOrangTua[i]
}

const gantiNama = (params) => {
  params ? console.log('parameternya ada', params) : console.log('paramternya tidak ada');
}

const hitungRumusSegitiga = (panjang, tinggi) => {
  const luas = 0.5 * panjang * tinggi;
  console.log(`
  panjang segitiga : ${panjang}
  tinggi segititga : ${tinggi}
  luasnya adalah   : ${luas}
  `)
}

const hitungPersegi = (sisi) => {
  const luas = sisi * sisi;
  console.log(`
  sisi persegi   : ${sisi}cm
  luas persegi   : ${luas}
  `)
}

gantiNama('hidup jokowi');
