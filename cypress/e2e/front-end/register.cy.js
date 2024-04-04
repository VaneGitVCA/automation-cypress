/// <reference types="cypress" />
//coment
describe('Validaciones en regitrar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // it('TC-009: FE | Filter by phones', () => {
  //     cy.contains('Phones').click();
  //     cy.get('#tbodyid').should('be.visible');
  //     cy.screenshot();
  // })
  // it('TC-010: FE | Filter by laptops', () => {
  //     cy.contains('Laptops').click();
  //     cy.get('#tbodyid').should('be.visible');
  //     cy.screenshot();
  // })
  // it('TC-011: FE | Filter by monitors', () => {
  //     cy.contains('Monitors').click();
  //     cy.get('#tbodyid').should('be.visible');
  //     cy.screenshot();
  // })
  const randomuser = Math.random().toString(5).substring(2.2) + "vca"

  // it('TC-01: FE | Registrar un nuevo usuario', () => {     
  //   cy.get('#username').type(randomuser)
  //   cy.get('#firstName').type('Cruz')
  //   cy.get('#lastName').type('Arce')
  //   cy.get('#password').type ('!@#$123Vane')
  //   cy.get('#confirmPassword').type('!@#$123Vane')
  //   cy.get('.btn-default').click()
  //   cy.get('.result').should('be.visible')
  // });

  // it('TC-02 FE | Registrar un usuario con un password diferente', () => {
  //   cy.get('#username').type(randomuser)
  //   cy.get('#firstName').type('Cruz')
  //   cy.get('#lastName').type('Arce')
  //   cy.get('#password').type ('!@#$123Vane')
  //   cy.get('#confirmPassword').type('!@#$123')
  //   cy.get(':nth-child(5) > .alert').should('be.visible')
  // });

  //it('TC-03 FE | Registrar usuario que no cumpla con las politicas del password.', () => {
  //  cy.get('#username').type(randomuser)
  //  cy.get('#firstName').type('Cruz')
  //  cy.get('#lastName').type('Arce')
  //  cy.get('#password').type('!@#$123vane')
  //  cy.get('#confirmPassword').type('!@#$123vane')
  //  cy.get('.btn-default').click()
  //  cy.get('.result').should('be.visible')
  //});

  //it('TC-04 FE | Ingresar un usuario ya registrado', () => {
  //  cy.get('#username').type('VaneCA09')
  //  cy.get('#firstName').type('Cruz')
  //  cy.get('#lastName').type('Arce')
  //  cy.get('#password').type('!@#$%12Va')
  //  cy.get('#confirmPassword').type('!@#$%12Va')
  //  cy.get('.btn-default').click() 
  //  cy.get('.result').should('be.visible')
  //});

  it('TC-05 FE | Votor por un auto ', () => {
    cy.visit('https://buggy.justtestit.org/')
    cy.get('.input-sm').type('VaneCA09')
    cy.get('[name="password"]').type('!@#$%12Va')
    cy.get('.btn-success').click()
    cy.get(':nth-child(3) > .card > a > .img-fluid').click()
    cy.get(':nth-child(1) > .thumbnail > a > .img-thumbnail').click()
    cy.get(':nth-child(3) > .card > a > .img-fluid').type('COMENTARIO')

  });

});