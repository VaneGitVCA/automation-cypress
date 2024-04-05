/// <reference types="cypress" />
//coment
describe('Validaciones en regitrar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  const randomuser = Math.random().toString(36).substring(2.15) + "vca"

   it('TC-01: FE | Registrar un nuevo usuario', () => {     
     cy.get('#username').type(randomuser)
     cy.get('#firstName').type('Cruz')
     cy.get('#lastName').type('Arce')
     cy.get('#password').type ('!@#$123Vane')
     cy.get('#confirmPassword').type('!@#$123Vane')
     cy.get('.btn-default').click()
     cy.get('.result').should('contain.text', 'Registration is successful');
   });
   

   it('TC-02 FE | Registrar un usuario con un password diferente', () => {
     cy.get('#username').type(randomuser)
     cy.get('#firstName').type('Cruz')
     cy.get('#lastName').type('Arce')
     cy.get('#password').type ('!@#$123Vane')
     cy.get('#confirmPassword').type('!@#$123')
     cy.get(':nth-child(5) > .alert').should('contain.text', 'Passwords do not match');
   });
   

  it('TC-03 FE | Registrar usuario que no cumpla con las politicas del password.', () => {
    cy.get('#username').type(randomuser)
    cy.get('#firstName').type('Cruz')
    cy.get('#lastName').type('Arce')
    cy.get('#password').type('!@#$123vane')
    cy.get('#confirmPassword').type('!@#$123vane')
    cy.get('.btn-default').click()
    cy.get('.result').should('contain.text', 'InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters');
  });
  

  it('TC-04 FE | Ingresar un usuario ya registrado', () => {
    cy.get('#username').type('VaneCA09')
    cy.get('#firstName').type('Cruz')
    cy.get('#lastName').type('Arce')
    cy.get('#password').type('!@#$%12Va')
    cy.get('#confirmPassword').type('!@#$%12Va')
    cy.get('.btn-default').click() 
    cy.get('.result').should('contain.text', 'UsernameExistsException: User already exists');    
  });
  

  it('TC-05 FE | Validar voto ', () => {
    cy.visit('https://buggy.justtestit.org/')
    cy.get('.input-sm').type('VaneCA09')
    cy.get('[name="password"]').type('!@#$%12Va')
    cy.get('.btn-success').click()
    cy.get(':nth-child(3) > .card > a > .img-fluid').click()
    cy.get(':nth-child(1) > .thumbnail > a > .img-thumbnail').click()   
    cy.get('.card-text').should('contain.text', 'Thank you for your vote!');
  });
});