import  Header from '../../header'
import {el} from './elements'

class DashPage {

    constructor(){


        this.header = Header
    }

    calendarShouldBeVisible(){


        cy.get(el.calendar, {timeout : 7000} )
             .should('be.visible')


    } 
    selectDay(day){ 
        const target =  new RegExp('^' + day + '$' , 'g')
        cy.contains(el.BoxDay , target)
        .click()
    } 

    appointmentShouldBeVisible(customer, hour){
      cy.contains('div', customer.name)
           .should('be.visible')
           .parent()
           .contains(el.BoxHour, hour)
           .should('be.visible')
      

    }
}


export default new  DashPage()