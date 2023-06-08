describe('Opportunitycard', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should toggle like state when like button is clicked', () => {
      cy.get('[data-testid="like-button"]').first().as('likeButton');
      cy.get('[data-testid="like-count"]').first().as('likeCount');
  
      // Verify initial state
      cy.get('@likeButton').should('have.attr', 'aria-label', 'Like');
      cy.get('@likeCount').should('have.text', '0');
  
      // Click like button and verify updated state
      cy.get('@likeButton').click();
      cy.get('@likeButton').should('have.attr', 'aria-label', 'Unlike');
      cy.get('@likeCount').should('have.text', '1');
  
      // Click like button again and verify updated state
      cy.get('@likeButton').click();
      cy.get('@likeButton').should('have.attr', 'aria-label', 'Like');
      cy.get('@likeCount').should('have.text', '0');
    });
  
    it('should filter opportunities by job type', () => {
      cy.get('[data-testid="job-type-select"]').select('Full-time');
  
      // Verify that only full-time opportunities are displayed
      cy.get('[data-testid="opportunity-card"]').each((card) => {
        cy.wrap(card)
          .find('[data-testid="job-type"]')
          .should('have.text', 'Full-time');
      });
    });
  });
  