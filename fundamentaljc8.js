function berapaTahun(pen_awal, lahir, pen_pertahun, target){

    var pertahun_tambah =  (pen_awal * (lahir/100)) + pen_pertahun 
    var totaltarget = target - pen_awal
    var hasil = parseFloat(totaltarget / pertahun_tambah
    )
    return `kota akan mencapai ${target} dalam waktu ${hasil} tahun`

}

console.log(berapaTahun(1000,5,50,1200))
//test
