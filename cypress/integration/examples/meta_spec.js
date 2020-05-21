describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.meta.ua')

    cy.get('.mail-sign-in')
    .click()

    cy.get('input[name=login]')
    .type('Storozukanton01@gmail.com')
    .should('have.value', 'Storozukanton01@gmail.com')

    cy.get('input[name=password]')
    .type('Qwerty123')
    .should('have.value', 'Qwerty123')

    cy.get('.btn-login')
    .click()
    cy.go('back')

    cy.get('#login-lifetime')
    .check()

    cy.get('.login-remember').click()
    cy.url().should('eq', 'https://passport.meta.ua/remember/')
    cy.go('back')
    
    cy.get('.reg-link').click()
    cy.url().should('eq', 'https://passport.meta.ua/reg/')
    cy.go('back')
    // cy.get('#login_link > div:nth-child(3) > a').click()
    // cy.contains('Створити обліковий запис')
    })
  })