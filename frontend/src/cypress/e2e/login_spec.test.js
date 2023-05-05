describe('LoginPage', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('displays the welcome message', () => {
      cy.findByText('Welcome to').should('be.visible');
      cy.findByText('Opportunity Board').should('be.visible');
    });
  
    it('displays the login button', () => {
      cy.findByText('Continue with Google').should('be.visible');
    });
  
    it('redirects to home page after successful login', () => {
      cy.intercept('GET', 'http://127.0.0.1:5000/user-data').as('userData');
  
      cy.findByText('Continue with Google').click();
  
      cy.wait('@userData').then((interception) => {
        const currentUser = interception.response.body;
  
        expect(interception.response.statusCode).to.eq(200);
        expect(currentUser).to.not.be.null;
        expect(currentUser).to.have.property('email');
        expect(currentUser).to.have.property('displayName');
        expect(currentUser).to.have.property('photoURL');
      });
  
      cy.url().should('include', '/home');
    });
  });
  