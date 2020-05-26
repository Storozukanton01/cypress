describe('RoundCube1 Test', () => {
    it('email-adress', () => {
      cy.visit('http://104.236.232.96/roundcube/')

      cy.get('#rcmloginuser')
      .type('qa-test@arixess.com')
      .should('have.value', 'qa-test@arixess.com')

      cy.get('#rcmloginpwd')
      .type('catch123')
      .should('have.value', 'catch123')

      cy.get('#rcmloginsubmit')
      .click()
      cy.url().should('eq', 'http://104.236.232.96/roundcube/?_task=mail&_mbox=INBOX')

      cy.wait(500)
      cy.get('#rcmbtn107')
      .click()

      cy.get('#_to')
      .type('Test1@gmail.com')
      .should('have.value', 'Test1@gmail.com')

      var subject='Greating'
      cy.get('#compose-subject')
      .type(subject)
      .should('have.value', subject)

      cy.get('#followupto-link')
      .click()
      cy.contains('Followup-To')
      cy.get('#_followupto')
      .type('qa-test')
      .should('have.value', 'qa-test')

      cy.get('#cc-link')
      .click()
      cy.contains('Cc')
      cy.get('#_cc')
      .type('123')
      .should('have.value', '123')

      cy.get('#bcc-link')
      .click()
      cy.contains('Bcc')
      cy.get('#_bcc')
      .type('G234')
      .should('have.value', 'G234')

      cy.get('#replyto-link')
      .click()
      cy.contains('Reply-To')
      cy.get('#_replyto')
      .type('qa-test@arixess.com')
      .should('have.value', 'qa-test@arixess.com')

      cy.get('select[name=editorSelector]')
      .select('plain')
      
      cy.get('select[name=_priority]')
      .select('5')
      .should('have.value', '5')
    //   .should('have.value', 'html')

      cy.get('input[name=_mdn]')
      .check()

      cy.get('#rcmbtn121')
      .click()

      cy.get('.ui-button-icon-primary.ui-icon.ui-icon-closethick')
      .click()
      cy.wait(500)

      cy.get('#composebody')
      .type('Test')
      .should('have.value', 'Test')

      const time = Cypress.moment().format('HH:mm')
      console.log(time)

      cy.get('#rcmbtn107')
      .click()
      cy.visit('http://104.236.232.96/roundcube/?_task=mail&_mbox=Sent')
    
      cy.get('#rcmdate')
      .click()

      cy.get('tr.message:first-child').find('td.date').should('have.text', `Today ${time}`)
      cy.get('tr.message:first-child').find('td.subject a span').should('have.text', subject)
    //   cy.get('tr.message:last-child').find('td.date').should('have.text', `Today ${time}`)
    })
  })