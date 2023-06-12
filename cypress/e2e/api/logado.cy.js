describe('POSTS', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    it('Cria um post', () => {

        
        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: 'Criado por Silvio aula de cypress VSCode'
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201)
            expect(body.text).to.eq('Criado por Silvio aula de cypress VSCode')

        }) 
                
    })  

    it.only('Deletar um post', () => {

        let valorCometario = 'Criado por Silvio aula de cypress VSCode II'

        cy.api({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorCometario
            }
        }).then(({ body }) => {
            
            cy.request({

                method: 'DELETE',
                url: `/api/posts/${body._id}`
            }).then(({ status }) => {
                expect(status).to.eq(200)
            })
        })
    })

   
})