describe('', () => {
    
    beforeEach(() => {
        cy.visit('/') 
    })
    it('Valida o título da página inicial', () => {

                   
        cy.get('[data-test=landing-title]')
            .should('have.text', 'Conectando QAs ...')
            .and('have.class', 'x-large')
    })

    it('Seleciona o elemento com o constains', () => {

         
        cy.contains('h1', 'QAs')
            .should('have.text', 'Conectando QAs ...')

    })

    it('Valida propriedade css', () => {

        cy.get('[data-test=landing-register]')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        
    })

    it.only('Seleciona um elemento utilizando filter', () => {
        
        cy.get('a')                
            .filter('.btn-primary')
            .should('have.text', 'Cadastrar')

        cy.get('a')
            .eq('6')
            .should('have.text', 'Login')
    })
})