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

const thertekek =[{
    th_ertek : "Nemzetiség",
    th_ertek1 : "Szerző",
    th_ertek2 : "Mű"
}]
const tomb = [   //tombba eltárolom a cellák adatait
    {  
        Nemzetiseg:"Orosz",
        szerzo :"Gogol",
        mu :"A köpönyeg",
        szerzo2:"Csehov",
        mu2 :"A csinovnyik halála"
    },
        
    
    
    { 
        Nemzetiseg :"Cseh",
        szerzo :"Franz Kafka",
        mu :"Az átváltozás"
    },
    {    
        Nemzetiseg :"Magyar",
        szerzo :"Örkény István",
        mu :"Egyperces Novellák",
        szerzo2:"József Attila",
        mu2 :"Klárisok"
    },
    {    
        Nemzetiseg :"Svájc",
        szerzo :"Friedrich Dürrenmatt",
        mu :"A fizikusok"
    }
    
        
]


const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th1.innerHTML = thertekek[0].th_ertek //megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th1) //hozzáfűzöm a sorhoz


const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th2.innerHTML =thertekek[0].th_ertek1 //megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th2)//hozzáfűzöm a sorhoz


const th3 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik cellája
th3.innerHTML = thertekek[0].th_ertek2//megadom a tömböt és kiválasztom melyik kell
th_tr.appendChild(th3)//hozzáfűzöm a sorhoz



function rendermenu(){ //definialom a fuggvenyem
    for (const futoka of tomb) {
        const tr_row = document.createElement('tr');
        tbody.appendChild(tr_row);

        const nemzetiseg = document.createElement('td');
        nemzetiseg.innerHTML = futoka.Nemzetiseg;
        tr_row.appendChild(nemzetiseg);

        const szerzo1 = document.createElement('td');
        szerzo1.innerHTML = futoka.szerzo;
        tr_row.appendChild(szerzo1);

        const mu1 = document.createElement('td');
        mu1.innerHTML = futoka.mu;
        tr_row.appendChild(mu1);

        if (futoka.szerzo2 && futoka.mu2 ) {
            const tr_row2 = document.createElement('tr');
            tbody.appendChild(tr_row2);
            nemzetiseg.rowSpan = 2;

            const szerzo3 = document.createElement('td');
            szerzo3.innerHTML = futoka.szerzo2;
            tr_row2.appendChild(szerzo3);

            const mu3 = document.createElement('td');
            mu3.innerHTML = futoka.mu2;
            tr_row2.appendChild(mu3);
        }
    }
}

rendermenu() //meghivom a fuggvenyem


//const form = document.createElement('form')
//
//form.addEventListener('submit',function(e){
//    e.preventDefault();
//    const nemzetiseghtml = document.getElementById('szarmazas')
//    const szerzokhtml = document.getElementById('szerzo1')
//    const szerzo1muve = document.getElementById('szerzo1mu')
//    const szerzo2muve = document.getElementById('szerzo2')
//    const szerzo2html = document.getElementById('szerzo2mu')
//
//
//    const nemzetiseghtmlValue = nemzetiseghtml.value
//    const szerzokhtmlValue = szerzokhtml.value
//    const szerzo1muveValue = szerzo1muve.value
//    const szerzo2muveValue = szerzo2muve.value
//    const szerzo2htmlValue = szerzo2html.value
//
//
//    const new_elements = {
//        Nemzetiseg: nemzetiseghtmlValue,
//        szerzo: szerzokhtmlValue,
//        mu:szerzo1muveValue
//    }




//})