//loga na aplicação via API
Cypress.Commands.add('login', (email, password) => {

    cy.session([email], () => {
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email,      //aqui chama a variável que está lá em cima. Como tem o mesmo nome, fica iqual a variável
                password    //aqui chama a variável que está lá em cima. Como tem o mesmo nome, fica iqual a variável
            }
        })

    }, {cacheAcrossSpecs: true }) 
    

})