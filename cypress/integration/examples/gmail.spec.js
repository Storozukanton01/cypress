<<<<<<< HEAD
describe('Gmail Test', () => {
    it('Wrong sign up', () => {
      cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')

    cy.get('input[name=firstName]')
    .type('Anton')
    .should('have.value', 'Anton')

    cy.get('input[name=lastName]')
    .type('Storozhuk')
    .should('have.value', 'Storozhuk')

    cy.get('input[name=Passwd]')
    .type('Qwerty123!')
    .should('have.value', 'Qwerty123!')
    
    cy.get('input[name=ConfirmPasswd]')
    .type('Qwerty123!')
    .should('have.value', 'Qwerty123!')

    cy.get('input[name=Username]')
    .type('Storozhukanton11@gmai.com')
    .should('have.value', 'Storozhukanton11@gmai.com')
    
    cy.get('.RveJvd')
    .click()

    cy.get('.o6cuMc')
    .should('exist')
    })
    it('Sign up', () => {
        cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')
  
      cy.get('input[name=firstName]')
      .type('Anton')
      .should('have.value', 'Anton')
  
      cy.get('input[name=lastName]')
      .type('Storozhuk')
      .should('have.value', 'Storozhuk')
  
      cy.get('input[name=Passwd]')
      .type('Qwerty123!')
      .should('have.value', 'Qwerty123!')
      
      cy.get('input[name=ConfirmPasswd]')
      .type('Qwerty123!')
      .should('have.value', 'Qwerty123!')
  
      cy.get('input[name=Username]')
      .type('Storozhukanton11@gmail.com')
      .should('have.value', 'Storozhukanton11@gmail.com')
      
      cy.get('.RveJvd')
      .click()
      cy.url().should('eq', 'https://accounts.google.com/signup/v2/webgradsidvphone?flowName=GlifWebSignIn&flowEntry=SignUp')

      cy.get('.o6cuMc')
      .should('not.exist')

    //   cy.get('.ry3kXd.YuHtjc')
    //   .click()
    //   cy.wait(1000)
    //   cy.get('div[data-value=f-ua]')
    //   .click({multiple: true})

      cy.get('input[type=tel]')
      .type('625555555')
      .should('have.value', '625555555')
    //   cy.wait(500)
    //   cy.get('div[data-value=dz]')
    //   .click({ multiple: true, force: true })
      cy.get('.CwaK9')
      .click({ multiple: true })
      })
      it('Wrong sign in', () => {
        cy.visit('https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AddSession')
        cy.get('button[jsname=Cuz2Ue]')
        .click()
        cy.url().should('eq', 'https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        
        cy.get('#recoveryIdentifierId')
        .type('weebwb')
        .should('have.value', 'weebwb')

        cy.get('.CwaK9')
        .click()
        cy.url().should('eq', 'https://accounts.google.com/signin/v2/queryname?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        
        cy.get('#firstName')
        .type('Anton')
        .should('have.value', 'Anton')

        cy.get('#lastName')
        .type('Storozhuk')
        .should('have.value', 'Storozhuk')

        cy.get('.CwaK9')
        .click()
        cy.go('back')
        cy.go('back')

        cy.get('#identifierId')
        .type('rthnethn')
        .should('have.value', 'rthnethn')

        cy.get('.CwaK9')
        .click()
        cy.get('.jibhHc')
        .should('exist')
    })
  })
=======
describe('Gmail Test', () => {
    it('Wrong sign up', () => {
      cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')

    cy.get('input[name=firstName]')
    .type('Anton')
    .should('have.value', 'Anton')

    cy.get('input[name=lastName]')
    .type('Storozhuk')
    .should('have.value', 'Storozhuk')

    cy.get('input[name=Passwd]')
    .type('Qwerty123!')
    .should('have.value', 'Qwerty123!')
    
    cy.get('input[name=ConfirmPasswd]')
    .type('Qwerty123!')
    .should('have.value', 'Qwerty123!')

    cy.get('input[name=Username]')
    .type('Storozhukanton11@gmai.com')
    .should('have.value', 'Storozhukanton11@gmai.com')
    
    cy.get('.RveJvd')
    .click()

    cy.get('.o6cuMc')
    .should('exist')
    })
    it('Sign up', () => {
        cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')
  
      cy.get('input[name=firstName]')
      .type('Anton')
      .should('have.value', 'Anton')
  
      cy.get('input[name=lastName]')
      .type('Storozhuk')
      .should('have.value', 'Storozhuk')
  
      cy.get('input[name=Passwd]')
      .type('Qwerty123!')
      .should('have.value', 'Qwerty123!')
      
      cy.get('input[name=ConfirmPasswd]')
      .type('Qwerty123!')
      .should('have.value', 'Qwerty123!')
  
      cy.get('input[name=Username]')
      .type('Storozhukanton11@gmail.com')
      .should('have.value', 'Storozhukanton11@gmail.com')
      
      cy.get('.RveJvd')
      .click()
      cy.url().should('eq', 'https://accounts.google.com/signup/v2/webgradsidvphone?flowName=GlifWebSignIn&flowEntry=SignUp')

      cy.get('.o6cuMc')
      .should('not.exist')

    //   cy.get('.ry3kXd.YuHtjc')
    //   .click()
    //   cy.wait(1000)
    //   cy.get('div[data-value=f-ua]')
    //   .click({multiple: true})

      cy.get('input[type=tel]')
      .type('625555555')
      .should('have.value', '625555555')
    //   cy.wait(500)
    //   cy.get('div[data-value=dz]')
    //   .click({ multiple: true, force: true })
      cy.get('.CwaK9')
      .click({ multiple: true })
      })
      it('Wrong sign in', () => {
        cy.visit('https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AddSession')
        cy.get('button[jsname=Cuz2Ue]')
        .click()
        cy.url().should('eq', 'https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        
        cy.get('#recoveryIdentifierId')
        .type('weebwb')
        .should('have.value', 'weebwb')

        cy.get('.CwaK9')
        .click()
        cy.url().should('eq', 'https://accounts.google.com/signin/v2/queryname?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        
        cy.get('#firstName')
        .type('Anton')
        .should('have.value', 'Anton')

        cy.get('#lastName')
        .type('Storozhuk')
        .should('have.value', 'Storozhuk')

        cy.get('.CwaK9')
        .click()
        cy.go('back')
        cy.go('back')

        cy.get('#identifierId')
        .type('rthnethn')
        .should('have.value', 'rthnethn')

        cy.get('.CwaK9')
        .click()
        cy.get('.jibhHc')
        .should('exist')
    })
  })
>>>>>>> 107435ab495e50459d2fd68c4b5ca9769f1b4101
  