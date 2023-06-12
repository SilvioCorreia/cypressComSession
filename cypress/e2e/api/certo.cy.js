describe('Test API', () => {

    context('Incluir Pet', () => {

        it('PET', () => {

            cy.api({
                url:'/pet',
                method: 'post',
                body:{
                    id: '202306',
                    category: {
                        id: 1,
                        name: 'dog',

                    },
                    name: 'banguela',
                 
                }
            }).then(({ status, body, duration }) => {
                expect(status, 'Status Code').to.eq(200)
                expect(body.category.id).to.eq(1)
                expect(body.id).to.eq(202306)
                expect(duration).to.be.lessThan(1000)
            })
        })        
    })

    context('Consultar PET', () => {

        it('PET', () => {

            cy.api({
                url: 'pet/202306',
                method: 'GET',
                body:
                {
                    id: 0,
                    category: {
                        id: 0,
                        name: 'string'
                    },
                    name: 'doggie',
                    photoUrls: [
                        ''
                    ],
                    tags: [
                        {
                            id: 0,
                            name: 'string'
                        }
                    ],
                    status: 'available'
                }
            }).then(({ body, status, duration }) => {
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(1000)
                expect(body.category.id).to.eq(1)
                expect(body.id).to.eq(202306)
                expect(body.name).to.eq('banguela')

            })
        })      
        
        it('Unsuário não válido', () => {
            cy.api({
                url: '/pet/0',
                method: 'GET',
                failOnStatusCode: false
            }).then(({status, body}) => {
                expect(status).to.eq(404)
                expect(body.message).to.be('Pet not found')

            })            
        })
    })

})