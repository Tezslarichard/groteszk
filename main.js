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

const tomb = [{   //tombba eltárolom a cellák adatait
        th_ertek : "Nemzetiség",
        th_ertek1 : "Szerző",
        th_ertek2 : "Mű"
    },
    {  
        Nemzetiseg:"Orosz",
        szerzo :"Gogol",
        mu :"A köpönyeg"
        
    },
    { 
        szerzo :"Csehov",
        mu :"A csinovnyik halála"
    
    },
    { 
        Nemzetiseg :"Cseh",
        szerzo :"Franz Kafka",
        mu :"Az átváltozás"
    },
    {    
        Nemzetiseg :"Magyar",
        szerzo :"Örkény István",
        mu :"Egyperces Novellák"
    },
    {   
        Nemzetiseg :"József Attila",
        szerzo :"Klárisok"
    },
    {    
        Nemzetiseg :"Svájc",
        szerzo :"Friedrich Dürrenmatt",
        mu :"A fizikusok"
    }
    
        
]


const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th1.innerHTML = tomb[0].th_ertek //megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th1) //hozzáfűzöm a sorhoz


const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th2.innerHTML =tomb[0].th_ertek1 //megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th2)//hozzáfűzöm a sorhoz


const th3 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th3.innerHTML = tomb[0].th_ertek2//megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th3)//hozzáfűzöm a sorhoz



// Első adat sor 
const tr1 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr1) // a sort hozzáfüzöm a tbodyhoz


const td1 = document.createElement('td') //létrehozok egy tdt
td1.innerHTML = tomb[1].Nemzetiseg //megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
td1.rowSpan = 2 //összeolvasztok 2 cellát igy az orosz az 2 sorba lesz
tr1.appendChild(td1)//hozzáfűzöm a sorhoz


const td2 = document.createElement('td')//létrehozok egy tdt
td2.innerHTML = tomb[1].szerzo//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr1.appendChild(td2)//hozzáfűzöm a sorhoz


const td3 = document.createElement('td')//létrehozok egy tdt
td3.innerHTML =tomb[1].mu //megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr1.appendChild(td3)//hozzáfűzöm a sorhoz

// Második adat sor 
const tr2 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr2)// a sort hozzáfüzöm a tbodyhoz

 


const td4 = document.createElement('td')//létrehozok egy tdt
td4.innerHTML = tomb[2].szerzo//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr2.appendChild(td4)//hozzáfűzöm a sorhoz


const td5 = document.createElement('td')//létrehozok egy tdt
td5.innerHTML = tomb[2].mu//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr2.appendChild(td5)//hozzáfűzöm a sorhoz

// Harmadik adat sor 
const tr3 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr3)// a sort hozzáfüzöm a tbodyhoz

const td6 = document.createElement('td')//létrehozok egy tdt
td6.innerHTML = tomb[3].Nemzetiseg//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr3.appendChild(td6)//hozzáfűzöm a sorhoz


const td7 = document.createElement('td')//létrehozok egy tdt
td7.innerHTML =tomb[3].szerzo //megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr3.appendChild(td7)//hozzáfűzöm a sorhoz


const td8 = document.createElement('td')//létrehozok egy tdt
td8.innerHTML = tomb[3].mu//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr3.appendChild(td8)//hozzáfűzöm a sorhoz

// Negyedik adat sor 
const tr4 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr4)// a sort hozzáfüzöm a tbodyhoz

const td9 = document.createElement('td')//létrehozok egy tdt
td9.innerHTML = tomb[4].Nemzetiseg //megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
td9.rowSpan = 2//összeolvasztok 2 cellát igy a magyar az 2 sorba lesz
tr4.appendChild(td9)//hozzáfűzöm a sorhoz


const td10 = document.createElement('td')//létrehozok egy tdt
td10.innerHTML = tomb[4].szerzo//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr4.appendChild(td10)//hozzáfűzöm a sorhoz


const td11 = document.createElement('td')//létrehozok egy tdt
td11.innerHTML =tomb[4].mu //megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr4.appendChild(td11)//hozzáfűzöm a sorhoz

// Ötödik adat sor 
const tr5 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr5)// a sort hozzáfüzöm a tbodyhoz



const td12 = document.createElement('td')//létrehozok egy tdt
td12.innerHTML = tomb[5].szerzo//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr5.appendChild(td12)//hozzáfűzöm a sorhoz


const td13 = document.createElement('td')//létrehozok egy tdt
td13.innerHTML = tomb[5].mu//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr5.appendChild(td13)//hozzáfűzöm a sorhoz

// Hatodik adat sor 
const tr6 = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a táblázat adatait
tbody.appendChild(tr6)// a sort hozzáfüzöm a tbodyhoz


const td14 = document.createElement('td')//létrehozok egy tdt
td14.innerHTML = tomb[6].Nemzetiseg//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr6.appendChild(td14)//hozzáfűzöm a sorhoz


const td15 = document.createElement('td')//létrehozok egy tdt
td15.innerHTML = tomb[6].szerzo//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr6.appendChild(td15)//hozzáfűzöm a sorhoz


const td16 = document.createElement('td')//létrehozok egy tdt
td16.innerHTML = tomb[6].mu//megadom a cellának az adatát úgy hogy kiválasztom hanyadik elem és a helyes adatot beirom
tr6.appendChild(td16)//hozzáfűzöm a sorhoz
