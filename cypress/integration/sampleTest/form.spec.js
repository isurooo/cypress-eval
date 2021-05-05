const Form_URL = '/automation-practice-form/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Practice Form')
  })


})


//https://demoqa.com/books




{isbn: "9781449337711", title: "Designing Evolvable Web APIs with ASP.NET",…}
author: "Glenn Block et al."
description: "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft"
isbn: "9781449337711"
pages: 238
publish_date: "2020-06-04T09:12:43.000Z"
publisher: "O'Reilly Media"
subTitle: "Harnessing the Power of the Web"
title: "Designing Evolvable Web APIs with ASP.NET"
website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html"