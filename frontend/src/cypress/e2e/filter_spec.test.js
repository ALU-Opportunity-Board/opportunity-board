describe('Filter', () => {
    it('should filter items based on selected options', () => {
      cy.visit('/my-page-with-filter-component');
  
      cy.get('[data-testid="dropdown-field"]').click();
      cy.get('[data-testid="dropdown-field-option-1"]').click();
  
      cy.get('[data-testid="dropdown-location"]').click();
      cy.get('[data-testid="dropdown-location-option-2"]').click();
  
      cy.get('[data-testid="dropdown-time"]').click();
      cy.get('[data-testid="dropdown-time-option-3"]').click();

      cy.contains('Filtered results based on options: field-1, location-2, time-3');
    });
  });
  