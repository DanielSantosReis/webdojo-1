    //Describe = vai agrupar testes.
describe('login', ()=>{
    it('Deve logar com sucesso', ()=> {  //It = um caso de teste!
     
    cy.iniciar()  
    cy.submeterLogin('papito@webdojo.com', 'katana123')
       /* cy.viewport(1440,900)
        cy.visit('http://localhost:3000')*/

        //Para buscar um elemento usar a função GET.// 
        //Para inserir informações no elemento utilizar a função TYPE.

        /* cy.get('#email').type ('papito@webdojo.com')
           cy.get('#password').type ('katana123')
           cy.contains('button', 'Entrar').click() 
        */
    cy.get('[data-cy="user-name"]')
          .should('be.visible')
          .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
          .should('be.visible')
          .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.wait(3000)
  })
})

describe('login', ()=>{
    it('Não deve logar com sucesso', ()=> {  //It = um caso de teste!
    cy.iniciar()  
    cy.submeterLogin('papito@webdojo.com', 'katana321')

        //Only é utilizado para priorizar um test!
      cy.contains('Acesso negado! Tente novamente.')
          .should('be.visible')

      cy.wait(3000)  
    })
})

describe('login', ()=>{
    it('Não deve logar com email inválido', ()=> {  //It = um caso de teste!
    cy.iniciar()  
    cy.submeterLogin('404@webdojo.com', 'katana123')

      cy.contains('Acesso negado! Tente novamente.').should('be.visible')

    })
})
