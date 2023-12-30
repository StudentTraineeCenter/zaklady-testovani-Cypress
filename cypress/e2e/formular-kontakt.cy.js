/// <reference types="cypress" />

describe('formulář na stránce Kontakt', () => {
    
    it('vyplnění a odeslání formuláře na stránce kontakt', () => {

        //načteme stránku
        cy.visit('https://studentskyspolek.netlify.app/')

        //kliknutí na položku Kontakt v menu:
        //a) pomocí cy.contains
        //cy.contains('Kontakt').click({force: true})

        //b) pomocí cy.get; zde máme více způsobů, jak na tlačítko Kontakt kliknout
        cy.get('.pc-menu-polozka').last().click()       //1. způsob
        //cy.get('.pc-menu-polozka').eq(4).click()      //2. způsob
        //cy.get('.pc-menu-polozka').eq(-1).click()     //3. způsob

        //Ověrení, že byla načtena sekce webu "O nás"
        cy.url().should('contain', 'studentskyspolek.netlify.app/kontakt/')

        //Vyplnění polí formuláře
        cy.get('#jmeno').clear().type('Jan Novák')
        cy.get('#email').clear().type('jan.novak@nevim.nevim')
        cy.get('#policko').clear().type('Zkouška příkladu poznámky.')

        //kliknutí na tlačítko "Odeslat"
        cy.get('[type="submit"]').click()

        //jelikož budeme přesměrováni na doménu poskytovatele formuláře, musíme cypress upozornit, že dojde ke změně url
        cy.origin('submitted.formspark.io', () => {

            //ověrení, že bude zobrazena potvrzovací hláška ohledně odeslání formuláře
            cy.get('h1').should('contain', 'Your form has been submitted.')
        })      

    })

})