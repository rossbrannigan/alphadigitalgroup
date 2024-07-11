// cypress/e2e/blogPage.spec.js

describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/src/app/blog'); // Adjust URL if your blog page has a different route
  });

  it('should have a meta title and description', () => {
    cy.get('head title').should('contain', 'Alpha Digital Group Blog');
    cy.get('head meta[name="description"]').should('have.attr', 'content', 'Latest insights and articles from Alpha Digital Group');
  });

  it('should display recent blog posts', () => {
    cy.get('aside h2').should('contain', 'Recent Posts');
    cy.get('aside ul li').should('have.length.gt', 0); // Ensure there are blog posts listed in the sidebar
  });

  it('should navigate to individual blog posts', () => {
    cy.get('main article').first().within(() => {
      cy.get('h3 a').click(); // Click on the first blog post link
    });
    cy.url().should('include', '/blog/'); // Ensure navigation to the blog post page
  });

  // Additional tests can be added to check specific content or functionality
});
