describe('LandingPage', () => {
    it('displays the LandingPage content', () => {
      cy.visit('/');
  
      cy.get('.navbar').should('be.visible');
  
      cy.get('.text-gray-800')
        .should('be.visible')
        .and('contain.text', 'Explore below verified opportunities with a new search experience');
      cy.get('.cta-pr-btn')
        .should('be.visible')
        .and('contain.text', 'Learn more');

      cy.get('.cta-pr-btn').click();
      cy.url().should('include', '/support');
  
      cy.get('.filter').should('be.visible');
  
      cy.get('.opportunity-card').should('be.visible');
    });
  });