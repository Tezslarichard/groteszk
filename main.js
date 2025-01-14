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
   tbody.innerHTML = " " //a tablazatom tartalmat ures stringreteszem , torlodik a tabla
    for (const futoka of tomb) { //vegig iterálok a cikluson 
        const tr_row = document.createElement('tr'); // letrehozok egy sort
        tbody.appendChild(tr_row); // ezt a sort hozzáadom a tbodyhoz

        const nemzetiseg = document.createElement('td'); //letre hozok egy cellat a nemzetisegeknek
        nemzetiseg.innerHTML = futoka.Nemzetiseg; // megadom az értékét
        tr_row.appendChild(nemzetiseg); //hozzaadom a sorhoz

        const szerzo1 = document.createElement('td');//letre hozok egy cellat a szerzo1nek
        szerzo1.innerHTML = futoka.szerzo;// megadom az értékét
        tr_row.appendChild(szerzo1);//hozzaadom a sorhoz

        const mu1 = document.createElement('td');//letre hozok egy cellat a mu1nek
        mu1.innerHTML = futoka.mu;// megadom az értékét
        tr_row.appendChild(mu1);//hozzaadom a sorhoz

        if (futoka.szerzo2 && futoka.mu2 ) { //hogyha van szero2 és mu2 akkor 
            const tr_row2 = document.createElement('tr');// letrehozok egy sort
            tbody.appendChild(tr_row2);// ezt a sort hozzáadom a tbodyhoz
            nemzetiseg.rowSpan = 2; // a nemzetisegek 2 cellányi legyen

            const szerzo3 = document.createElement('td'); //letre hozok egy cellat a szerzo2nek
            szerzo3.innerHTML = futoka.szerzo2;// megadom az értékét
            tr_row2.appendChild(szerzo3);

            const mu3 = document.createElement('td');//letre hozok egy cellat a mu2nek
            mu3.innerHTML = futoka.mu2;// megadom az értékét
            tr_row2.appendChild(mu3);//hozzaadom a sorhoz
        }
    }
}

rendermenu() //meghivom a fuggvenyem


const form = document.getElementById('form') // elkerem a form htmlelementet idval

form.addEventListener('submit',function(e){ // a formra irok egy esemenykezelot ami a submit lesz
    e.preventDefault(); //megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    const nemzetiseghtml = document.getElementById('szarmazas')//elkerem a htmlelementet, amely a szarmazas idval rendelkezik
    const szerzokhtml = document.getElementById('szerzo1')//elkerem a htmlelementet, amely a szerzo1 idval rendelkezik
    const szerzo1muve = document.getElementById('szerzo1mu')//elkerem a htmlelementet, amely a szero1mu idval rendelkezik
    const szerzo2muve = document.getElementById('szerzo2')//elkerem a htmlelementet, amely a szerzo2 idval rendelkezik
    const szerzo2html = document.getElementById('szerzo2mu')//elkerem a htmlelementet, amely a szerzo2mu idval rendelkezik

    const  forma = e.currentTarget //a currenttarget tulajdonsaga a formunkat tartalmazza
    const hiba = forma.querySelectorAll('.error') //az összes error classal ellátot htmlelemntet elkerjuk
    for(const errorhiba of hiba){ //vegigiiteralunk az osszes visszakapott errorhtmlelementen
        errorhiba.innerHTML = "" //töröljük az aktuális elem tartalmat
    }
    
    let valid = true//validot igazra allitjuk
    const nemzetiseghtmlValue = nemzetiseghtml.value // a value értékeket beteszem egy valtozoba
    const szerzokhtmlValue = szerzokhtml.value// a value értékeket beteszem egy valtozoba
    const szerzo1muveValue = szerzo1muve.value// a value értékeket beteszem egy valtozoba
    const szerzo2muveValue = szerzo2muve.value// a value értékeket beteszem egy valtozoba
    const szerzo2htmlValue = szerzo2html.value// a value értékeket beteszem egy valtozoba

    if(nemzetiseghtmlValue === ''){ //ha a nemzetiseg ures
        const parentElement = nemzetiseghtml.parentElement; //eltaroljuk a nemzetiseg elemjeit egy valtozoba
        const errorhely = parentElement.querySelector('.error')//az  error classal ellátot htmlelemntet belerakom egy valtozoba
        if(errorhely != undefined){ //ha talalunk ilyen mezot ami nem undefined
            errorhely.innerHTML = ' A származás kötelező'//hibauzenetet ir ki akkor
        }
        valid = false; //vissza allitom az erteket hamisra
    }

    if(szerzokhtmlValue === ''){//ha a szerzok elem ures
        const parentElement = szerzokhtml.parentElement; //eltaroljuk a szerzok elemjeit egy valtozoba
        const errorhely = parentElement.querySelector('.error')//az  error classal ellátot htmlelemntet belerakom egy valtozoba
        if(errorhely != undefined){//ha talalunk ilyen mezot ami nem undefined
            errorhely.innerHTML = ' A szerző neve kötelező'//hibauzenetet ir ki akkor
        }
        valid = false;//vissza allitom az erteket hamisra
    }

    if(szerzo1muveValue === ''){//ha a mu elem ures
        const parentElement = szerzo1muve.parentElement;//eltaroljuk a munek az elemjeit egy valtozoba
        const errorhely = parentElement.querySelector('.error')//az  error classal ellátot htmlelemntet belerakom egy valtozoba
        if(errorhely != undefined){//ha talalunk ilyen mezot ami nem undefined
            errorhely.innerHTML = ' A szerző műve kötelező' //hibauzenetet ir ki akkor
        }
        valid = false;//vissza allitom az erteket hamisra
    }

    if(valid){ //hogyha valid
    const new_elements = {  //az objektumba eltárolom az uj értékeket
        Nemzetiseg: nemzetiseghtmlValue,
        szerzo: szerzokhtmlValue,
        mu:szerzo1muveValue,
        szerzo2 : szerzo2muveValue,
        mu2 : szerzo2htmlValue
    }
    tomb.push(new_elements) // hozzaadom a tombhoz
    
    rendermenu() //ujra render fuggveny
}})