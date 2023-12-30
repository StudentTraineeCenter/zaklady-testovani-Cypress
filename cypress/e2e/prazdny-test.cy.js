/// <reference types="cypress" />


describe('hlavní stránka – tlačítka "Zjistit více" a "Chci se přidat"', () => {
    
    //první varianta načtení stránky
    beforeEach(() => {
       
        //Před každým testem bude načten web studentskyspolek.netlify.app
        cy.visit('https://studentskyspolek.netlify.app/')
      })
    
    it('modré tlačítko "Zjistit více', () => {

        //druhá varianta načtení stránky
        //cy.visit('https://studentskyspolek.netlify.app/')

        //hledání a kliknutí na tlačítko "Zjistit více"
        cy.get('.tlacitko--modra').click()

        //Ověrení, že byla načtena sekce webu "O nás"
        cy.url().should('contain', 'studentskyspolek.netlify.app/onas/')
        //Druhá varianta ověření
        cy.get('h1').should('contain', 'O nás')

    })

})  