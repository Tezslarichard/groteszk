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



function rendermenu(){ //definialom a fuggvenyem
for (const futoka of tomb) { // vegigiteralok az arrayen
    const tr_row = document.createElement('tr'); //létrehozunk egy tr elemet
    tbody.appendChild(tr_row); //hozzáadom a tbodyhoz

    // Nemzetiség cella csak akkorlesz , ha van érték
    if (futoka.Nemzetiseg) {
        const td = document.createElement('td');//létrehozunk egy cellát
        td.innerHTML = futoka.Nemzetiseg;//megadjuk az értéket
        if (futoka.Nemzetiseg === "Orosz" || futoka.Nemzetiseg === "Magyar") { //ha eljut az oroszhoz és a magyarhoz akkor
            td.rowSpan = 2; // Sorok összekapcsolása
        }
        tr_row.appendChild(td); //ezt hozzáadjuk a trhez
    }

    // Szerző cella csak akkor, ha van érték
    if (futoka.szerzo) {
        const td1 = document.createElement('td');//létrehozunk egy cellát
        td1.innerHTML = futoka.szerzo;//megadjuk az értéket
        tr_row.appendChild(td1);//ezt hozzáadjuk a trhez
    }

    // Mű cella csak akkor, ha van érték
    if (futoka.mu) {
        const td2 = document.createElement('td');//létrehozunk egy cellát
        td2.innerHTML = futoka.mu;//megadjuk az értéket
        tr_row.appendChild(td2);//ezt hozzáadjuk a trhez
    }
}
}
rendermenu() //meghivom a fuggvenyem