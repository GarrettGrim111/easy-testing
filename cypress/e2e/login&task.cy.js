import 'cypress-file-upload';
/* eslint-disable no-undef */

Cypress.on("uncaught:exception", () => false);


describe('Easy testing', () => {
  it('login', () => {
    cy.visit('https://65e3c74d9b.bigfin1-full.easyredmine.com/')
    cy.get("#username").type("qa-applicant@easy.cz")
    cy.get("#password").type("easy848")
    cy.get("button[type=submit]").click();
  })

  it('create task', () => {

const imgFile = "./doggo.jpg";
cy.intercept("POST", /^.*\/uploads.js/).as("watchUploadFile");


   cy.get("span.easy-top-menu-more-toggler").last().click();
   cy.get("[data-cy=menu-button__issues_new]").eq(1).click({ timeout: 30000 });
   cy.get("#issue-form", { timeout: 20000 }).should("be.visible");
   cy.get("div.ck-content").type("Základní popisek")
   cy.get("#issue_subject").click({ force: true }).type("Základní předmět")
   
   
     cy.get('input.file_selector')
     .attachFile({ filePath: imgFile });
     
     cy.wait("@watchUploadFile"); 

     cy.get("[name=commit]").last().click()

  })
})