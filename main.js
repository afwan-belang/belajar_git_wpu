const namaOrangTua = ['Wawan', 'Ajat', 'Saiul', 'dodo']

for(let i = 0; i < namaOrangTua.length; i++){
  console.log(namaOrangTua[i]
}

const gantiNama = (params) => {
  params ? console.log('parameternya ada', params) : console.log('paramternya tidak ada');
}

gantiNama('hidup jokowi');
