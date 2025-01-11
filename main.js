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

const th_ertek = "Nemzetiség" // az adatot külön változóba rakom
const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th1.innerHTML = th_ertek // megadom a változó nevét amiben az adat van
th_tr.appendChild(th1) //hozzáfűzöm a sorhoz

const th_ertek1 = "Szerző"// az adatot külön változóba rakom
const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th2.innerHTML =th_ertek1 // megadom a változó nevét amiben az adat van
th_tr.appendChild(th2)//hozzáfűzöm a sorhoz

const th_ertek2 = "Mű"// az adatot külön változóba rakom
const th3 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th3.innerHTML = th_ertek2// megadom a változó nevét amiben az adat van
th_tr.appendChild(th3)//hozzáfűzöm a sorhoz

// Első adat sor 
const tr1 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr1) // a sort hozzáfüzöm a tbodyhoz

const td_ertek1 ="Orosz"// az adatot külön változóba rakom
const td1 = document.createElement('td') //létrehozok egy tdt
td1.innerHTML = td_ertek1 //megadom a változó nevét amiben az adat van a cellának
td1.rowSpan = 2 //összeolvasztok 2 cellát igy az orosz az 2 sorba lesz
tr1.appendChild(td1)//hozzáfűzöm a sorhoz

const td_ertek2 ="Gogol"// az adatot külön változóba rakom
const td2 = document.createElement('td')//létrehozok egy tdt
td2.innerHTML = td_ertek2//megadom a változó nevét amiben az adat van a cellának
tr1.appendChild(td2)//hozzáfűzöm a sorhoz

const td_ertek3 ="A köpönyeg"// az adatot külön változóba rakom
const td3 = document.createElement('td')//létrehozok egy tdt
td3.innerHTML =td_ertek3 //megadom a változó nevét amiben az adat van a cellának
tr1.appendChild(td3)//hozzáfűzöm a sorhoz

// Második adat sor 
const tr2 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr2)// a sort hozzáfüzöm a tbodyhoz

const td_ertek4 ="Csehov" // az adatot külön változóba rakom
const td4 = document.createElement('td')//létrehozok egy tdt
td4.innerHTML = td_ertek4//megadom a változó nevét amiben az adat van a cellának
tr2.appendChild(td4)//hozzáfűzöm a sorhoz

const td_ertek5 ="A csinovnyik halála" // az adatot külön változóba rakom
const td5 = document.createElement('td')//létrehozok egy tdt
td5.innerHTML = td_ertek5//megadom a változó nevét amiben az adat van a cellának
tr2.appendChild(td5)//hozzáfűzöm a sorhoz

// Harmadik adat sor 
const tr3 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr3)// a sort hozzáfüzöm a tbodyhoz

const td_ertek6 ="Cseh" // az adatot külön változóba rakom
const td6 = document.createElement('td')//létrehozok egy tdt
td6.innerHTML = td_ertek6//megadom a változó nevét amiben az adat van a cellának
tr3.appendChild(td6)//hozzáfűzöm a sorhoz

const td_ertek7 ="Franz Kafka" // az adatot külön változóba rakom
const td7 = document.createElement('td')//létrehozok egy tdt
td7.innerHTML = td_ertek7//megadom a változó nevét amiben az adat van a cellának
tr3.appendChild(td7)//hozzáfűzöm a sorhoz

const td_ertek8 ="Az átváltozás"// az adatot külön változóba rakom
const td8 = document.createElement('td')//létrehozok egy tdt
td8.innerHTML = td_ertek8//megadom a változó nevét amiben az adat van a cellának
tr3.appendChild(td8)//hozzáfűzöm a sorhoz

// Negyedik adat sor 
const tr4 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr4)// a sort hozzáfüzöm a tbodyhoz

const td_ertek9 ="Magyar"// az adatot külön változóba rakom
const td9 = document.createElement('td')//létrehozok egy tdt
td9.innerHTML =td_ertek9 //megadom a változó nevét amiben az adat van a cellának
td9.rowSpan = 2//összeolvasztok 2 cellát igy a magyar az 2 sorba lesz
tr4.appendChild(td9)//hozzáfűzöm a sorhoz

const td_ertek10 ="Örkény István"// az adatot külön változóba rakom
const td10 = document.createElement('td')//létrehozok egy tdt
td10.innerHTML = td_ertek10//megadom a változó nevét amiben az adat van a cellának
tr4.appendChild(td10)//hozzáfűzöm a sorhoz

const td_ertek11 ="Egyperces Novellák"// az adatot külön változóba rakom
const td11 = document.createElement('td')//létrehozok egy tdt
td11.innerHTML =td_ertek11 //megadom a változó nevét amiben az adat van a cellának
tr4.appendChild(td11)//hozzáfűzöm a sorhoz

// Ötödik adat sor 
const tr5 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr5)// a sort hozzáfüzöm a tbodyhoz

const td_ertek12 ="József Attila"// az adatot külön változóba rakom
const td12 = document.createElement('td')//létrehozok egy tdt
td12.innerHTML = td_ertek12//megadom a változó nevét amiben az adat van a cellának
tr5.appendChild(td12)//hozzáfűzöm a sorhoz

const td_ertek13 ="Klárisok"// az adatot külön változóba rakom
const td13 = document.createElement('td')//létrehozok egy tdt
td13.innerHTML = td_ertek13//megadom a változó nevét amiben az adat van a cellának
tr5.appendChild(td13)//hozzáfűzöm a sorhoz

// Hatodik adat sor 
const tr6 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr6)// a sort hozzáfüzöm a tbodyhoz

const td_ertek14 ="Svájc"// az adatot külön változóba rakom
const td14 = document.createElement('td')//létrehozok egy tdt
td14.innerHTML = td_ertek14//megadom a változó nevét amiben az adat van a cellának
tr6.appendChild(td14)//hozzáfűzöm a sorhoz

const td_ertek15 ="Friedrich Dürrenmatt"// az adatot külön változóba rakom
const td15 = document.createElement('td')//létrehozok egy tdt
td15.innerHTML = td_ertek15//megadom a változó nevét amiben az adat van a cellának
tr6.appendChild(td15)//hozzáfűzöm a sorhoz

const td_ertek16 ="A fizikusok"// az adatot külön változóba rakom
const td16 = document.createElement('td')//létrehozok egy tdt
td16.innerHTML = td_ertek16//megadom a változó nevét amiben az adat van a cellának
tr6.appendChild(td16)//hozzáfűzöm a sorhoz
