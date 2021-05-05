// <reference type = "Cypress"/>

class BooksPage {

    getBookHeader() {
        return cy.get('.main-header')
    }

    getSearchBox() {
        return cy.get('#searchBox')
    }

    getSearchButton() {
        return cy.get('#basic-addon2')
    }

    getSearchNodata() {
        return cy.get('.rt-noData')
    }

    getSearchBook() {
        return cy.get('.mr-2')
    }

    getISBN() {
        return cy.get('#ISBN-wrapper > .col-md-9 > #userName-value')
    }

    getBookInfo() {
        return cy.get('.profile-wrapper')
    }

    getBackToBookStoreButton() {
        return cy.get('#addNewRecordButton')
    }

    obj = {
        //Search list
        titleHeaderBookStore: "Book Store",
        emptySearchResult: "No rows found",
        //Book  info
        bookURL: "https://demoqa.com/books?book=9781449325862",
        titleISBN: "ISBN :",
        titleTitle: "Title :",
        titleSubTitle: "Sub Title :",
        titleAuthor: "Author :",
        titlePublisher: "Publisher :",
        titleTotalPages: "Total Pages :",
        titleDesc: "Description :",
        titleWebsite: "Website :",
        infoISBN: "9781449325862",
        infoTitle: "Git Pocket Guide",
        infoSubTitle: "A Working Introduction",
        infoAuthor: "Richard E. Silverman",
        infoPublisher: "O'Reilly Media",
        infoTotalPages: "234",
        infoDesc: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
        infoWebsite: "http://chimera.labs.oreilly.com/books/1230000000561/index.html"

    }

}

export default BooksPage
