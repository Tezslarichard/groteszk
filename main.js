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
const thertekek =[ //eltárolom az értékeket egy tömbben
        "Nemzetiség",
        "Szerző",
        "Mű"
    ]
function fejlecem(thertekek){
    

    const th_tr = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a fejléc adatait
    thead.appendChild(th_tr)// th_tr elemet hozzá adom a theadhez

    for (const futulu of thertekek){ //végig iterálunk a tömbbön
    const th1 = document.createElement('th') //csinálunk th cellákat
    th1.innerHTML = futulu //megadom az értékeket
    th_tr.appendChild(th1) //hozzáfüzöm a sorhoz a cellát
    }
}


function rendermenu(tomb){ //definialom a fuggvenyem
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

function generateform(){ //létrehozom a függvényt
    
    const form1 = document.createElement('form') //létrehozok egy formot
    form1.id = 'form' //megadom az idt
    document.body.appendChild(form1) //ezt hozzáfüzöm a html törzséhez

    const div = document.createElement('div') //létrehozok egy divet
    div.classList.add('field')//megadom a classját

    const label1 = document.createElement('label') //létrehozok egy labelt
    label1.htmlFor = 'szarmazas' //megadom a forját
    label1.innerText = "Származás: " //megadom a tartalmát
    div.appendChild(label1) //hozzáadom a divemhez az egész labelt
    var br = document.createElement('br') //sortörést létrehozok
    label1.appendChild(br) //hozzáadom a labelhez


    const input = document.createElement('input') //létrehozok egy inputot
    input.type = 'text' //megadom a típusát hogy text
    input.id = 'szarmazas' //megadom az idját
    input.name = ' szarmazas' // a namet is megadom
    div.appendChild(input) //hozzáfüzöm az inputot a divemhez



    const span = document.createElement('span') // létrehozok egy spant
    span.classList.add('error')                 //adok neki egy classt
    div.appendChild(span)                       // ezt hozzáfüzöm a divemhez


    const div1 = document.createElement('div')//létrehozok egy divet
    div1.classList.add('field')//megadom a classját

    const label2 = document.createElement('label')//létrehozok egy labelt
    label2.htmlFor = 'szerzo1'//megadom a forját
    label2.innerText = "1. szerző: "//megadom a tartalmát
    div1.appendChild(label2)//hozzáadom a divemhez az egész labelt
    var br1 = document.createElement('br')//sortörést létrehozok
    label2.appendChild(br1)//hozzáadom a labelhez


    const input1 = document.createElement('input')//létrehozok egy inputot
    input1.type = 'text'//megadom a típusát hogy text
    input1.id = 'szerzo1'//megadom az idját
    input1.name = 'szerzo1'// a namet is megadom
    div1.appendChild(input1)//hozzáfüzöm az inputot a divemhez



    const span1 = document.createElement('span')// létrehozok egy spant
    span1.classList.add('error')//adok neki egy classt
    div1.appendChild(span1)    // ezt hozzáfüzöm a divemhez

    const div2 = document.createElement('div')//létrehozok egy divet
    div2.classList.add('field')//megadom a classját


    const label3 = document.createElement('label')//létrehozok egy labelt
    label3.htmlFor = 'szerzo1mu'//megadom a forját
    label3.innerText = "1. szerző műve: "//megadom a tartalmát
    div2.appendChild(label3)//hozzáadom a divemhez az egész labelt
    var br2 = document.createElement('br')//sortörést létrehozok
    label3.appendChild(br2)//hozzáadom a labelhez

    const input2 = document.createElement('input')//létrehozok egy inputot
    input2.type = 'text'//megadom a típusát hogy text
    input2.id = 'szerzo1mu'//megadom az idját
    input2.name = ' szerzo1mu'// a namet is megadom
    div2.appendChild(input2)//hozzáfüzöm az inputot a divemhez

    const span2 = document.createElement('span')// létrehozok egy spant
    span2.classList.add('error')//adok neki egy classt
    div2.appendChild(span2)// ezt hozzáfüzöm a divemhez

    const div3 = document.createElement('div')//létrehozok egy divet
    div3.classList.add('field')//megadom a classját

    const label4 = document.createElement('label')//létrehozok egy labelt
    label4.htmlFor = 'szerzo2'//megadom a forját
    label4.innerText = "2. szerző: "//megadom a tartalmát
    div3.appendChild(label4)//hozzáadom a divemhez az egész labelt

    var br3 = document.createElement('br')//sortörést létrehozok
    label4.appendChild(br3)//hozzáadom a labelhez

    const input3 = document.createElement('input')//létrehozok egy inputot
    input3.type = 'text'//megadom a típusát hogy text
    input3.id='szerzo2'//megadom az idját
    input3.name = 'szerzo2'// a namet is megadom
    div3.appendChild(input3)//hozzáfüzöm az inputot a divemhez

    const div4 = document.createElement('div')//létrehozok egy divet
    div4.classList.add('field')//megadom a classját

    const label5 = document.createElement('label')//létrehozok egy labelt
    label5.htmlFor = 'szerzo2mu'//megadom a forját
    label5.innerText = "2. szerző műve: "//megadom a tartalmát
    div4.appendChild(label5)//hozzáadom a divemhez az egész labelt

    var br4 = document.createElement('br')//sortörést létrehozok
    label5.appendChild(br4) //hozzáadom a labelhez

    const input4 = document.createElement('input')//létrehozok egy inputot
    input4.type = 'text'//megadom a típusát hogy text
    input4.id='szerzo2mu'//megadom az idját
    input4.name = 'szerzo2mu'// a namet is megadom
    div4.appendChild(input4)//hozzáfüzöm az inputot a divemhez


    const button = document.createElement('button') //létrehozok egy buttont
    button.type = 'submit' //megadom a típusát hogy submit
    button.innerHTML = "Hozzáadás"//megadom a tartalmát


    form1.appendChild(div) // a diveket hozzáfüzöm a formomhoz igy megjelenik már minden
    form1.appendChild(div1)// a diveket hozzáfüzöm a formomhoz igy megjelenik már minden
    form1.appendChild(div2)// a diveket hozzáfüzöm a formomhoz igy megjelenik már minden
    form1.appendChild(div3)// a diveket hozzáfüzöm a formomhoz igy megjelenik már minden
    form1.appendChild(div4)// a diveket hozzáfüzöm a formomhoz igy megjelenik már minden
    form1.appendChild(button)//a gombomat hozzáadom a formomhoz



}

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
    
    rendermenu(tomb) //ujra render fuggveny
}})

function egyszeruvalidacio(nemzetiseg_input, szerzo_input,mu_input){//definiálom a függvényem
    let valid = true//validot igazra allitjuk

    if(!validateForm(nemzetiseg_input, "A nemzetiség kötelező")) //validáljuk a nemzetiség mezőt
    {
        valid = false //validot hamisra allitom
    }
    if(!validateForm(szerzo_input, "A szerző kötelező"))//validáljuk a szerző mezőt
        {
            valid = false//validot hamisra allitom
        }
    if(!validateForm(mu_input, "A mű kötelező"))//validáljuk a mű mezőt
        {
            valid = false//validot hamisra allitom
        }

        return valid
}

function validateForm(inputhtmlElement, erroruezenet){ // definialjuk a validateForm fuggvenyt
    let valid = true; // a valid erteket igazra allitom
    if(inputhtmlElement.value === ''){ // ha a parameterben kapott beviteli mezo ures
        const parentElement = inputhtmlElement.parentElement; // eltaroljuk egy valtozoba 
        const errormaskara = parentElement.querySelector('.error'); // megkeressuk azt az elso elemet ami error classal van
        if(errormaskara != undefined) { // Ha talaltunk ilyen mezot
            errormaskara.innerHTML = erroruezenet; // Akkor beleirjuk a hibauzenetunket
        }
        valid = false; // a valid valtozo erteket hamisra csereljuk
    }

    return valid; // visszaterek a valid valtozoval
}
fejlecem(thertekek)



