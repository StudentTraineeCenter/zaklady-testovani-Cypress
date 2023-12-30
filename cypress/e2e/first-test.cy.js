/// <reference types="cypress" />

describe('nazev celku', () => {


    it('nazev prvniho testu – ukazky prikazu', () => {

        cy.visit() // – navšítí webovou stránku; např. cy.visit('zanaldo.cz')
        cy.get() // – na základě obsahu v závorce vybere HTML element
        cy.contains() // – hledá element na základě textu; cy.contains('Potvrdit') bude hledat element, který obsahuje tento text
        cy.url() // – informace pro Cypress, že se bude pracovat s URL stránky


        
        .click() // – klikne na element
        .click({force: true}) // – klikne na element a to i v případě, že je překrýván jiným elementem (který nemusí být z pohledu uživatele viditelný)
        .first() // – vybere první element, pokud například vybereme pomocí cy.get('h1') nadpis úrovně h1 a přidáme .first(), tedy vznikne cy.get('h1').first(), bude vybrát první nadpis této úrovně, na který Cypress narazí, pořadí se určuje podle pořadí ve zdrojovém kódu
        .last() // – obdoba .first(), ale vybírá se poslední element
        .check() // – zaškrtne checkbox; aby tento příkaz fungoval, musí být použit na HTML značku <input> s vyspecifikovaným typem "checkbox" (= zaskrtávácí boxík, dá se vybrat více možností ze seznamu), nebo "radio" (= zaškrtávací kolečko, používá se v případě, kdy je možno vybrat pouze jednu odpověď)
                // pokud bude .check() použit na jiný element, test nám neprojde
        .uncheck() // – opak .check(), odlikne "checkboxy" (na radiobuttony nefunguje)
        .clear() // – vymaže textový obsah, použitelný pouze na HTML elementy <input> a <textarea>
        .submit() // odešle obsah formuláře, klikne na tlačítko s tímto typem ( "type=submit" )
        .parent() // – vebere mateřský element našeho zvoleného elementu (tedy o 1 úroveň výše)
                    // <div>
                    //       <h1>Nadpis</>
                    // </div>
                    // cy.get('h1').parent() – vybraný je element div
        .parents() // – vybere všechny mateřské elementy


        .should() // – jeden ze způsobů ověřování, nejčastěji obsahuje 2 hodnoty a to co konkrétně se má stát a samotný parametr ověřování
                // "contain", "not.contain", "be.visible", "have.class"
                // cy.get('h1').should('have.class', "red") – ověří, že nadpis h1 má třídu "red"
        .find() // hledá vnořený element, například najdeme div a v něm hledáme tlačítko 
                // cy.get('div').find('button')
        .parentsUntil() // – další z příkazů z "parent" série, zde ale musíme vyspecifikovat úroveň, značku, kam až se chceme dostat, vybrán bude element nejprve vnořený
                    
                    /*<div class="sekce-listek">
                        <div class="sekce-napoje">
                            <ul class="nealkoholicke">
                                <li>voda</li>
                                <li>čaj</li>
                                <li>džus</li>
                                <li>Fanta</li>
                            </ul>
                        </div> 
                    </div>*/  
                    
              // pokud použijeme: cy.get('.nealkoholicke).parentsUntil('.sekce-listek) vybrali jsme element se třídou "sekce-napoje"      
        .type() // – vepíše specifikovaný text
        .eq() // – vebere pořadí vybraného elementu, pokud se vrátíme k již jednou použitému HTML kódu a budeme chtít vybrat položku "džus" ze seznamu, postoupíme následovně:

        /*<div class="sekce-napoje">
            <ul class="nealkoholicke">
                <li>voda</li>
                <li>čaj</li>
                <li>džus</li>
                <li>Fanta</li>
            </ul>
        </div> */

        cy.get('li').eq(2)

        //"džus" je sice 3. položkou v seznamu, ale používá se indexování/počítání od 0, voda má tedy polohu č. 0, čaj má číslo 1 a džus číslo 2
        //zároveň je možné postupovat i zpětně, Fanta má číslo 3, nebo -1, džus 2, nebo -2 atd. 

        .wait() // – test se zastaví na specifikovaný čas, někdy se stává, že Cypress příkazy vykonává rychleji, než web / webová aplikace operuje; nastavená jednotka je v milisekundách



        // značka pro komentář, platí pouze na daném řádku
        
        /*značka pro komentář,
        která zakomentuje vše až po ukončující značku;
        nehledí na konce řádků
        */

        //vybírání elementů
        // elementy vybíráme pomocí cy.get(), kde samotné specifikace píšeme do páru jednoduchých uvozovek napsaných do závorek
        cy.get('h1') // pokud chceme vybrat html element, vypíšeme čistě jeho značku
        cy.get('.red') // vybere element se třídou red; je velice pravděpodobné, že tato třída bude na více prvcích, proto je jepší další specifikace například pomocí pořadí
        cy.get('#tlacitko') //vybere element s hodnotou unikátního identifikátoru id "tlacitko"; výhoda použití id je, že se na webu nachází nevýše jednou, proto pokud ho element má, máme vyhráno
        cy.get()


        //zvolení HTML elementu, 'do těchto uvozovek vepíšeme samotnou specifikaci', 
        cy.get('')

        //pomocí HTML elementu (vepíšeme čistě název značky)
        cy.get('input')

        // pomocí ID (použijeme symbol hashtagu #)
        cy.get('#inputEmail1')

        // pomocí třídy (použijeme tečku .)
        cy.get('.input-full-width')

        // pomocí názvu atributu (použijeme hranaté závorky, do kterých vepíšeme název atributu)
        cy.get('[placeholder]')

        // pomocí atributu a jeho hodnoty (použijeme hranaté závorky, do kterých vepíšeme název atributu, rovná se a hodnotu atributu napíšeme mezi uvozovky)
        cy.get('[placeholder="Email"]')

        // pomocí celé hodnoty třídy (v tomto případě třídu bereme jako atribut, jelikož přímo specifikujeme, že se jedná o atribut "class" – tedy nahrazujeme tečku) 
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //v tomto případě bude Cypress hledat elementy, které obsahují tyto třídy, kdežto kdybychom použili cy.get('input-full-width.size-medium.shape-rectangle'), tak by byly nalezeny elementy s těmito třídami, ale i například dalšími

        // pomocí HTML elementu a atributu s jeho hodnototu; pokud kombinujeme více různých způsobů zaměření (třída, atribut, id atd.), neoddělujeme je mezerou
        //správně
        cy.get('input[placeholder="Email"]')
        //špatně (s mezerou)!!!: cy.get('input [placeholder="Email"]')

        // pomocí dvou atributů s hodnotou
        cy.get('[placeholder="Email"][type="email"]')

        // pomocí HTML elementu, atributu s hodnotou, ID, a třídy
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // cypress nejvíce doporučuje přímo do zdrojového kódu dopsat vlastní atributy za účelem testování; ne vždy ale tuto možnost máme
        cy.get('[data-cy="imputEmail1"]')


        cy.get('[alt="Výlet"]')
        cy.get('[alt]')

        cy.get('#jmeno')


    })

    it('test number two', () => {

        //zde by byl obsah druhého testu

    })


})
