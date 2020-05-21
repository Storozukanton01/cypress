describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.facebook.com/login')

    //   cy.url().should('include', 'index.html')
    //   cy.get('.email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com')

    cy.get('#email')
    .type('Storozukanton01@gmail.com')
    .should('have.value', 'Storozukanton01@gmail.com')

    cy.get('#pass')
    .type('Qwerty123')
    .should('have.value', 'Qwerty123')

    cy.get('#loginbutton')
    .click()
    cy.go('back')

    cy.get('#forgot-password-link').click()
    cy.url().should('include', '/recover')
    cy.go('back')

    cy.get('#login_link > div:nth-child(3) > a').click()
    cy.contains('Створити обліковий запис')
    })
  })