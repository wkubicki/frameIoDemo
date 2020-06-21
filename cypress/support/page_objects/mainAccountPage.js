class MainAccountPage{

    verifyLoggedUser(user){
        //cy.contains(user + '\'s Account').then ( result =>{
        cy.get('span[class="Truncate-sc-73uiy1-0 TopBarNav__AccountName-r5w6kv-1 fwEGwn"]').then( result =>{
            cy.wrap(result).should('contain', user + '\'s Account');
        })
    }

    clickOnTheProject(projectInx){
        cy.get('div[role="presentation"]').then( presentation =>{
            var ind = 0;
            cy.wrap(presentation).find('figure').each (video => {
                ind = ind + 1;
                cy.wait(500);
                if(ind.toString().includes(projectInx))
                    cy.wrap(video).click();
            })
        })
    }

    doubleClickOnTheProject(projectInx){
        cy.get('div[role="presentation"]').then( presentation =>{
            var ind = 0;
            cy.wrap(presentation).find('figure').each (video => {
                ind = ind + 1;
                cy.wait(500);
                if(ind.toString().includes(projectInx))
                    cy.wrap(video).dblclick();
            })
        })
    }
}

export const onMainAccountPage = new MainAccountPage();