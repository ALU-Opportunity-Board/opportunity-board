describe('Add Opportunity Page', () => {
    beforeEach(() => {
      cy.visit('/add-opportunity');
    });
  
    it('renders the correct page elements', () => {
      cy.get('.navbar').should('be.visible');
      cy.contains('What kind of opportunity are you posting?').should('be.visible');
      cy.contains('Opportunity Type *').should('be.visible');
      cy.contains('Where is the company located?*').should('be.visible');
      cy.contains('Please select').should('be.visible');
      cy.contains('What is the *').should('be.visible');
      cy.contains('Deadline *').should('be.visible');
      cy.contains('Add the link *').should('be.visible');
      cy.get('button#options-menu').should('be.visible');
    });
  
    it('submits the form successfully', () => {
      cy.get('input[placeholder="Please"]').eq(0).type('Internship');
      cy.get('input[placeholder="Please select"]').eq(0).type('Los Angeles');
      cy.get('input[placeholder="Please select "]').eq(0).type('Software Engineer');
      cy.get('input[placeholder="Please select "]').eq(1).type('2023-06-30');
      cy.get('input[placeholder="Please select"]').eq(2).type('https://example.com');
      cy.get('button[type="submit"]').click();
      cy.contains('Your opportunity has been submitted.').should('be.visible');
    });
  });