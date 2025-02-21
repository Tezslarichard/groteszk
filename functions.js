/**
 * csinálok egy tömböt amiben eltárolom az értékeket, utánna létrehozok egy sort amiben majd a for vegigiterál 
 * a tömbömön és ahány elem van annyi cellát csinál majd beirja az értékeit
 */
function fejlecem(thead){
    const thertekek =[ //eltárolom az értékeket egy tömbben
        "Nemzetiség",
        "Szerző",
        "Mű"
    ]

    const th_tr = document.createElement('tr')// létrehozunk egy tr elemet amibe tárolni fogjuk a fejléc adatait
    thead.appendChild(th_tr)// th_tr elemet hozzá adom a theadhez

    for (const futulu of thertekek){ //végig iterálunk a tömbbön
    const th1 = document.createElement('th') //csinálunk th cellákat
    th1.innerHTML = futulu //megadom az értékeket
    th_tr.appendChild(th1) //hozzáfüzöm a sorhoz a cellát
    }
}
/**
 * Ez a függvényem lefogja generálni a táblázatomat ami megint ugyan ugy fog történni mint a fejlécnél, és ha van szerzo2 és
 *  mu2 akkor létrehoz egy sort hogyha nincsen akkor nem fog
 * @param {Array} tomb 
 */
function rendermenu(tomb,tbody){ //definialom a fuggvenyem
   
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
/**
 * 
 * @param {Array} tablazat 
 * legenerálom a formomat amiben minden elem benne van gomb stb meg ahol megtudjuk adni az adatokat amit feltudunk tölteni. 
 * Ehhez minden idt namet es fort megkellet adni
 */
 
function generateform(tablazat){ //létrehozom a függvényt
    
    const form1 = document.createElement('form') //létrehozok egy formot
    form1.id = 'form' //megadom az idt
    document.body.appendChild(form1) //ezt hozzáfüzöm a html törzséhez

    for(const futoka of tablazat){ //végig iterálok a cikluson
        const div = document.createElement('div') //létrehozok egy divet
        div.classList.add('field') //hozzáadom a divhez a form-group class-t
        form1.appendChild(div) //hozzáadom a formhoz a divet
       
        const label = document.createElement('label') //létrehozok egy labelt
        label.innerHTML = futoka.labeltext //megadom az értékét
        label.htmlFor = futoka.htmlfor //megadom az idt
        div.appendChild(label) //hozzáadom a divhez a labelt

        const input = document.createElement('input') //létrehozok egy inputot
        input.id = futoka.htmlfor //megadom az idt
        input.name = futoka.htmlfor //megadom a namet
        input.type = futoka.inputType //megadom a typet
        div.appendChild(input) //hozzáadom a divhez az inputot

        const error = document.createElement('div') //létrehozok egy divet
        error.classList.add('error') //hozzáadom a divhez a error class-t
        div.appendChild(error) //hozzáadom a divhez az errort

}
const button = document.createElement('button') //létrehozok egy buttont
button.type = 'submit' //megadom a typet
button.innerHTML = 'hozzáadás' //megadom az értékét
form1.appendChild(button) //hozzáadom a formhoz a buttont
}
/**
 * hogyha nem igaz az ez alatti fuggveny akkor kiirja a hibauzenetemet
 * 
 * @param {HTMLElement} nemzetiseg_input 
 * @param {HTMLElement} szerzo_input 
 * @param {HTMLElement} mu_input 
 * @returns {boolean}
 */
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
/**
 * hogyha az inputhtmlElement ures akkor eltarolom ezt és megkeressük azt az első elemet amin  egy class van ha megtörténik ez akkor beleirjuk a hibauzenetet
 * @param {HTMLElement} inputhtmlElement 
 * @param {string} erroruezenet 
 * @returns {boolean}
 */
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