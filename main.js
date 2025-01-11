// Táblázat és részei létrehozása
const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez

// Fejléc sor hozzáadása
const th_tr = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a fejléc adatait
thead.appendChild(th_tr)// th_tr elemet hozzá adom a theadhez

const objektum = {   //objektumba eltárolom a cellák adatait
    th_ertek : "Nemzetiség",
    th_ertek1 : "Szerző",
    th_ertek2 : "Mű"
}


const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th1.innerHTML = objektum.th_ertek // megadom az objektumot és kiválasztom hogy melyik az értéke
th_tr.appendChild(th1) //hozzáfűzöm a sorhoz


const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th2.innerHTML =objektum.th_ertek1 // megadom az objektumot és kiválasztom hogy melyik az értéke
th_tr.appendChild(th2)//hozzáfűzöm a sorhoz


const th3 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th3.innerHTML = objektum.th_ertek2// megadom az objektumot és kiválasztom hogy melyik az értéke
th_tr.appendChild(th3)//hozzáfűzöm a sorhoz

const tablazat = {  //objektumba eltárolom a cellák adatait
    td_ertek1 :"Orosz",
    td_ertek2 :"Gogol",
    td_ertek3 :"A köpönyeg"

}

// Első adat sor 
const tr1 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr1) // a sort hozzáfüzöm a tbodyhoz


const td1 = document.createElement('td') //létrehozok egy tdt
td1.innerHTML = tablazat.td_ertek1 //megadom az objektumot és kiválasztom hogy melyik az értéke 
td1.rowSpan = 2 //összeolvasztok 2 cellát igy az orosz az 2 sorba lesz
tr1.appendChild(td1)//hozzáfűzöm a sorhoz


const td2 = document.createElement('td')//létrehozok egy tdt
td2.innerHTML = tablazat.td_ertek2//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr1.appendChild(td2)//hozzáfűzöm a sorhoz


const td3 = document.createElement('td')//létrehozok egy tdt
td3.innerHTML =tablazat.td_ertek3 //megadom az objektumot és kiválasztom hogy melyik az értéke 
tr1.appendChild(td3)//hozzáfűzöm a sorhoz

// Második adat sor 
const tr2 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr2)// a sort hozzáfüzöm a tbodyhoz

const tablazat1 = { //objektumba eltárolom a cellák adatait
    td_ertek4 :"Csehov",
    td_ertek5 :"A csinovnyik halála"

}


const td4 = document.createElement('td')//létrehozok egy tdt
td4.innerHTML = tablazat1.td_ertek4//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr2.appendChild(td4)//hozzáfűzöm a sorhoz


const td5 = document.createElement('td')//létrehozok egy tdt
td5.innerHTML = tablazat1.td_ertek5//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr2.appendChild(td5)//hozzáfűzöm a sorhoz

// Harmadik adat sor 
const tr3 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr3)// a sort hozzáfüzöm a tbodyhoz

const tabla = { //objektumba eltárolom a cellák adatait
    td_ertek6 :"Cseh",
    td_ertek7 :"Franz Kafka",
    td_ertek8 :"Az átváltozás"
}

const td6 = document.createElement('td')//létrehozok egy tdt
td6.innerHTML = tabla.td_ertek6//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr3.appendChild(td6)//hozzáfűzöm a sorhoz


const td7 = document.createElement('td')//létrehozok egy tdt
td7.innerHTML = tabla.td_ertek7//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr3.appendChild(td7)//hozzáfűzöm a sorhoz


const td8 = document.createElement('td')//létrehozok egy tdt
td8.innerHTML = tabla.td_ertek8//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr3.appendChild(td8)//hozzáfűzöm a sorhoz

// Negyedik adat sor 
const tr4 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr4)// a sort hozzáfüzöm a tbodyhoz

const tabla1 = {    //objektumba eltárolom a cellák adatait
    td_ertek9 :"Magyar",
    td_ertek10 :"Örkény István",
    td_ertek11 :"Egyperces Novellák"
}


const td9 = document.createElement('td')//létrehozok egy tdt
td9.innerHTML = tabla1.td_ertek9 //megadom az objektumot és kiválasztom hogy melyik az értéke 
td9.rowSpan = 2//összeolvasztok 2 cellát igy a magyar az 2 sorba lesz
tr4.appendChild(td9)//hozzáfűzöm a sorhoz


const td10 = document.createElement('td')//létrehozok egy tdt
td10.innerHTML = tabla1.td_ertek10//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr4.appendChild(td10)//hozzáfűzöm a sorhoz


const td11 = document.createElement('td')//létrehozok egy tdt
td11.innerHTML =tabla1.td_ertek11 //megadom az objektumot és kiválasztom hogy melyik az értéke 
tr4.appendChild(td11)//hozzáfűzöm a sorhoz

// Ötödik adat sor 
const tr5 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr5)// a sort hozzáfüzöm a tbodyhoz

const obj = {   //objektumba eltárolom a cellák adatait
    td_ertek12 :"József Attila",
    td_ertek13 :"Klárisok"
}

const td12 = document.createElement('td')//létrehozok egy tdt
td12.innerHTML = obj.td_ertek12//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr5.appendChild(td12)//hozzáfűzöm a sorhoz


const td13 = document.createElement('td')//létrehozok egy tdt
td13.innerHTML = obj.td_ertek13//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr5.appendChild(td13)//hozzáfűzöm a sorhoz

// Hatodik adat sor 
const tr6 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr6)// a sort hozzáfüzöm a tbodyhoz

const tabla2 = {    //objektumba eltárolom a cellák adatait
    td_ertek14 :"Svájc",
    td_ertek15 :"Friedrich Dürrenmatt",
    td_ertek16 :"A fizikusok"
}

const td14 = document.createElement('td')//létrehozok egy tdt
td14.innerHTML = tabla2.td_ertek14//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr6.appendChild(td14)//hozzáfűzöm a sorhoz


const td15 = document.createElement('td')//létrehozok egy tdt
td15.innerHTML = tabla2.td_ertek15//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr6.appendChild(td15)//hozzáfűzöm a sorhoz


const td16 = document.createElement('td')//létrehozok egy tdt
td16.innerHTML = tabla2.td_ertek16//megadom az objektumot és kiválasztom hogy melyik az értéke 
tr6.appendChild(td16)//hozzáfűzöm a sorhoz
