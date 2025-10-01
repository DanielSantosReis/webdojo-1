describe("Formulário de Consultoria", () => {

    it('Deve solicitar consultoria individual', () => {
        cy.iniciar()
        cy.submeterLogin('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Daniel Reis')
        cy.get('input[placeholder="Digite seu email"]').type('daniel@teste.com.br')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('(11) 94832-6714')
            .should('have.value', '(11) 94832-6714')


    })

})

