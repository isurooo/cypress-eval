import BooksPage from '../pageObject/BooksPage.js'

const Form_books_URL = '/books/'

describe('Books form', () => {
    const booksPage = new BooksPage()

    before(() => {
        cy.visit(Form_books_URL)

        cy.url()
            .should('eq', Cypress.config().baseUrl + Form_books_URL)
    })

    it('should display the book store title', () => {
        // cy.wait(5000)
        booksPage.getBookHeader()
            .should('contain', booksPage.obj.titleHeaderBookStore)
    })

    it('Check if the search returns wrong values', () => {
        //Check only null
        booksPage.getSearchBox().type('  ')
            .type('{enter')
        booksPage.getSearchButton().click()
        booksPage.getSearchNodata()
            .should('contain', booksPage.obj.emptySearchResult)
        booksPage.getSearchBox().clear()
    })

    it('Check only Special characters', () => {
        const typeText = '@#$%^&∑´ƒßåœøµ√∂√¥'
        booksPage.getSearchBox().type(typeText)
            .should('have.value', typeText)
            .type('{enter')
        booksPage.getSearchButton().click()

        booksPage.getSearchNodata()
            .should('contain', booksPage.obj.emptySearchResult)
        booksPage.getSearchBox().clear()
    })

    it('Check only Numbers', () => {
        const typeText = "1234567890"
        booksPage.getSearchBox().type(typeText)
            .should('have.value', typeText)
            .type('{enter')
        booksPage.getSearchButton().click()
        booksPage.getSearchNodata()
            .should('contain', booksPage.obj.emptySearchResult)
        booksPage.getSearchBox().clear()
    })


    it('Check for XXS', () => {
        const typeText = "<script>alert('hello')</script>"
        booksPage.getSearchBox().type(typeText)
            .should('have.value', typeText)
            .type('{enter')
        booksPage.getSearchButton().click()

        booksPage.getSearchNodata()
            .should('contain', booksPage.obj.emptySearchResult)
        booksPage.getSearchBox().clear()
    })

    it('Search for a book and access the result', () => {
        const typeText = 'git pocket'
        booksPage.getSearchBox()
            .type(typeText)
            .should('have.value', typeText)
        booksPage.getSearchBook()
        cy.contains(booksPage.obj.infoTitle)
            .should('be.visible')
            .click()
    })

    it('Check the ISBN is visible', () => {
        booksPage.getISBN()
        cy.contains(booksPage.obj.infoISBN)
            .should('be.visible')
    })

    it('Check if accesing the correct url with validated ISBN', () => {
        cy.url()
            .should('be.equal', booksPage.obj.bookURL)

    })

    it('validate the book info', () => {


        booksPage.getBookInfo()
            .should('contain', booksPage.obj.titleISBN)
            .and('contain', booksPage.obj.titleTitle)
            .and('contain', booksPage.obj.titleSubTitle)
            .and('contain', booksPage.obj.titleAuthor)
            .and('contain', booksPage.obj.titlePublisher)
            .and('contain', booksPage.obj.titleTotalPages)
            .and('contain', booksPage.obj.titleDesc)
            .and('contain', booksPage.obj.titleWebsite)
            .and('contain', booksPage.obj.infoISBN)
            .and('contain', booksPage.obj.infoTitle)
            .and('contain', booksPage.obj.infoSubTitle)
            .and('contain', booksPage.obj.infoAuthor)
            .and('contain', booksPage.obj.infoPublisher)
            .and('contain', booksPage.obj.infoTotalPages)
            .and('contain', booksPage.obj.infoDesc)
            .and('contain', booksPage.obj.infoWebsite)

    })

    it('Access back to store button', () => {
        booksPage.getBackToBookStoreButton()
            .should('be.visible')
            .click()
    })

})