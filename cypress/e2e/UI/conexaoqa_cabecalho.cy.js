describe('cabecalho da pagina Home', () => {

    context('nao logado', () => {

        beforeEach(() => {
            cy.visit('/')
        })  
        
        it('valida o menu conexaoqa', () => {
            /**
             * clicar uma vez .click()
             * clicar duas vezes .dbclick()
             * clicar com botão direito .rightclick()
             */
            cy.get('[data-test=navbar-conexaoQA]')
                .should('have.attr', 'href', '/')
                .and('not.have.attr','target')
        })

        it('valida o menu QAs', () => {
            
            cy.get('[data-test=navbar-QAs]')
                .should('have.attr', 'href', '/perfis')
                .and('not.have.attr','target')
        })

        it('validar o menu sobre', () => {
            
            cy.get('[data-test=navbar-about]')
                .should('have.attr', 'href', '/sobre')
                .and('not.have.attr','target')
        })

        it('valida os menus utilizando array', () => {
            
            const menus = [
                { seletor: 'navbar-conexaoQA', link: '/' },
                { seletor: 'navbar-QAs', link: '/perfis'},
                { seletor: 'navbar-about', link: '/sobre' },
                { seletor: 'navbar-register', link: '/cadastrar'},
                { seletor: 'navbar-login', link: '/login'}
            ]

            //** forEach é uma estrutura de laço que faz interação com o seletor*/
             
            menus.forEach(({ seletor, link }) => {
                cy.get(`[data-test=${seletor}]`)
                    .should('have.attr', 'href', link)
                    .and('not.have.attr', 'target')
            })
        })

                //  teste dinâmico
        ;[
            { seletor: 'navbar-conexaoQA', link: '/', menu:  ' ConexãoQA' },
            { seletor: 'navbar-QAs', link: '/perfis', menu: 'QAs'},
            { seletor: 'navbar-about', link: '/sobre', menu: 'Sobre' },
            { seletor: 'navbar-register', link: '/cadastrar', menu: 'Cadastrar'},
            { seletor: 'navbar-login', link: '/login', menu: 'Login'}
        ].forEach(({ seletor, link, menu }) => {
            
            it(`Valida o menu ${menu}`, () => {
                cy.get(`[data-test=${seletor}]`)
                    .should('have.attr', 'href', link)
                    .and('not.have.attr', 'target', '_blank') 
                    .and('have.text', menu)
            })
        }) 
    })

    context('logado', () => {

        beforeEach(() => {
            
            cy.visit('/')
            cy.login(Cypress.env('email'), Cypress.env('password'))

        })        
    })
   
})