describe('GET API - Profile', () => {

    context('Valida API de perfis', () => {

        let urlApiPerfil = '/api/profile/user'

        it('todos os pefis', () => {

            cy.request({
                url: '/api/profile',
                method: 'GET'
            }).then(({ status, duration, body }) => {
                expect(status, 'Status Code').to.eq(200)
                expect(body[0].status, 'Cargo usuário 0').to.eq('QA Senior')
                expect(body[1].user.name).to.eq('Usuário Iterasys')
                expect(body[0].skills).to.have.lengthOf(3)
                expect(duration, 'Duração').to.be.lessThan(10000)
            })
        })

        it('seleciona usuário inválido', () => {

            let usuarioId = '1'

            cy.request({
                method: 'GET',
                url: `${urlApiPerfil}/${usuarioId}`,
                failOnStatusCode: false
            }).then(({ status, body }) => {
                expect(status, 'Status Code').to.eq(404)
                expect(body.errors[0].msg, 'Mensagem de erro').to.eq('Perfil não encontrado')
            })
            
        })
        
        it('Seleciona usuários válidos', () => {
            let usuarioId = '64372f517135f63cd486aaa8'
 
            cy.request({
                method: 'GET',
                url: `${urlApiPerfil}/${usuarioId}`
            }).then(({ body, status, duration }) => {
                expect(body.user.name).to.eq('Usuário Iterasys')
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(10000)
            })
            
        })        
    })
    
})