describe('RoundCube2 Test', () => {
    it('first mail', () => {
        cy.visit('http://104.236.232.96/roundcube/')

       cy.get('#rcmloginuser')
      .type('qa-test@arixess.com')
      .should('have.value', 'qa-test@arixess.com')

      cy.get('#rcmloginpwd')
      .type('catch123')
      .should('have.value', 'catch123')

      cy.get('#rcmloginsubmit')
      .click()

      cy.visit('http://104.236.232.96/roundcube/?_task=mail&_mbox=INBOX')
      cy.get('tr.message:first-child')
      .dblclick()

      cy.get('#rcmbtn106')
      .click()
      cy.url().should('eq', 'http://104.236.232.96/roundcube/?_task=mail&_mbox=INBOX')

      cy.get('tr.message:first-child')
      .click()
      cy.get('#markmessagemenulink')
      .click()
      cy.get('#rcmbtn124 > span')
      .click()

      cy.get('tr.message:first-child')
      .should('have.class', 'unread')

      cy.get('#markmessagemenulink')
      .click()
      cy.get('#rcmbtn123 > span')
      .click()

      cy.get('tr.message:first-child')
      .should('not.have.class', 'unread')
    })
})