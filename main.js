// Táblázat és részei létrehozása
const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez

const tablazat = [{
    htmlfor : "szarmazas",
    labeltext : "Származás",
    inputType : "text"

},

{
    htmlfor : "szerzo1",
    labeltext : "1. Szerző",
    inputType : "text"
},
{
    htmlfor : "szerzo1mu",
    labeltext : "1. Szerző műve",
    inputType : "text"
},

{
    htmlfor : "szerzo2",
    labeltext : "2. Szerző",
    inputType : "text"
},
{
    htmlfor : "szerzo2mu",
    labeltext : "2. Szerző műve",
    inputType : "text"
}

]


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

rendermenu(tomb,tbody) //meghivom a fuggvenyem
generateform(tablazat) //meghivom a fuggvenyt

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
    
    let baj = true

   if(!validateForm(nemzetiseghtml, "Kőtelező megadni a nemzetiséget")){ //meghivom a validalas fuggvenyt
    baj = false
    }
    if(!validateForm(szerzokhtml, "Kőtelező megadni a szerzőt")){ //meghivom a validalas fuggvenyt
    baj = false
    }
    if(!validateForm(szerzo1muve, "Kőtelező megadni a szerző művét")){ //meghivom a validalas fuggvenyt
    baj = false
    }

  

    if (szerzo2muve.value !== "" || szerzo2html.value  !== "") {
    if (!validateForm(szerzo2muve, "Ha megadsz egy második szerzőt, a művet is kötelező kitölteni")) { 
        baj = false;
    }
    if (!validateForm(szerzo2html, "Ha megadsz egy második művet, a szerzőt is kötelező kitölteni")) { 
        baj = false;
    }
}

    if(baj){
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
    tbody.innerHTML = "" //a tablazatom tartalmat ures stringreteszem , torlodik a tabla
    rendermenu(tomb,tbody) //ujra render fuggveny
    
}})


fejlecem(thead) //fuggvenyemet meghivom



