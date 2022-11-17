
// IN JAVASCRIPT EVERYTING IS OBJECT
// cy == Object


describe('VERIFY THE LOG IN FUNCTIONALITY', ()=>{

    it('VERIFY THE LOG IN PAGE WITH VALID CREDENTIALS',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('img[alt ="client brand banner"]').should('be.visible')

    })

    it.only ('VERIFY THE LOG IN PAGE WITH IN-VALID CREDENTIALS',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123456')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('be.visible')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})