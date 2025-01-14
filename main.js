// Táblázat és részei létrehozása
const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez




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

rendermenu(tomb) //meghivom a fuggvenyem
generateform() //meghivom a fuggvenyt

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
    

    if(egyszeruvalidacio(nemzetiseghtml,szerzokhtml,szerzo1muve)){ //ha minden mező megvan adva
    
    const nemzetiseghtmlValue = nemzetiseghtml.value // a value értékeket beteszem egy valtozoba
    const szerzokhtmlValue = szerzokhtml.value// a value értékeket beteszem egy valtozoba
    const szerzo1muveValue = szerzo1muve.value// a value értékeket beteszem egy valtozoba
    const szerzo2muveValue = szerzo2muve.value// a value értékeket beteszem egy valtozoba
    const szerzo2htmlValue = szerzo2html.value// a value értékeket beteszem egy valtozoba
    const new_elements = {  //az objektumba eltárolom az uj értékeket
        Nemzetiseg: nemzetiseghtmlValue,
        szerzo: szerzokhtmlValue,
        mu:szerzo1muveValue,
        szerzo2 : szerzo2muveValue,
        mu2 : szerzo2htmlValue
    }
    tomb.push(new_elements) // hozzaadom a tombhoz
    form.reset()
    tbody.innerHTML = " " //a tablazatom tartalmat ures stringreteszem , torlodik a tabla
    rendermenu(tomb) //ujra render fuggveny
    
}})


fejlecem() //fuggvenyemet meghivom



