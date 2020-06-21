class PlayerPage{

    clickPlayButton(){
        cy.wait(3000);
        cy.get('div[aria-label="Play"]').click();
    }

    moveSliderInPercent(){

    }

    moveSliderToPercent(){
        cy.wait(3000);
        cy.get('.Seek__SeekProgressBar-sc-1qgkqx-0.dQZQCs').then( function($divElem){
            $divElem[0].setAttribute('style','width: 10.00000%;');
        })
    }


}

export const onPlayerPage = new PlayerPage();