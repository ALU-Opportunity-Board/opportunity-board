describe('Navbar', () => {
    it('should navigate to home page when clicking on logo', () => {
      cy.visit('/home');
      cy.get('a[href="/home"]').click();
      cy.url().should('include', '/home');
    });
  
    it('should navigate to opportunities page when clicking on "Add Opportunities"', () => {
      cy.visit('/home');
      cy.get('a[href="/opportunity"]').click();
      cy.url().should('include', '/opportunity');
    });
  
    it('should navigate to support page when clicking on "FAQs"', () => {
      cy.visit('/home');
      cy.get('a[href="/support"]').click();
      cy.url().should('include', '/support');
    });
  
    it('should navigate to contact us page when clicking on "Contact us"', () => {
      cy.visit('/home');
      cy.get('a[href="/contactUs"]').click();
      cy.url().should('include', '/contactUs');
    });
  
    it('should show navigation links when clicking on hamburger menu', () => {
      cy.visit('/home');
      cy.get('.md\\:hidden').click();
      cy.get('.md\\:block').should('be.visible');
    });
  
    it('should hide navigation links when clicking on close icon', () => {
      cy.visit('/home');
      cy.get('.md\\:hidden').click();
      cy.get('.md\\:block').should('be.visible');
      cy.get('.md\\:hidden').click();
      cy.get('.md\\:block').should('not.be.visible');
    });
  });