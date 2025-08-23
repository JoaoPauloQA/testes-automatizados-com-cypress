import Header from '../../header'
import { el } from './elements'

class DashPage {

    constructor() {


        this.header = Header
    }

    calendarShouldBeVisible() {


        cy.get(el.calendar, { timeout: 7000 })
            .should('be.visible')


    }
    selectDay(appointmenteDate) {


        let today = new Date()
        let lastDayofMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

        if (today.getDate() === lastDayofMonth.getDate()) {


            cy.get(el.nextMonthButton)
                .should('be.visible')
                .click()


            let MonthName
            switch (appointmenteDate.getMonth()) {

                case 0:
                    MonthName = 'Janeiro'
                    break
                case 1:
                    MonthName = 'Fevereiro'
                    break
                case 2:
                    MonthName = 'Março'
                    break
                case 3:
                    MonthName = 'Abril'
                    break
                case 4:
                    MonthName = 'maio'
                    break
                case 5:
                    MonthName = 'Junho'
                    break
                case 6:
                    MonthName = 'Julho'
                    break
                case 7:
                    MonthName = 'Agosto'
                    break
                case 8:
                    MonthName = 'Setembro'
                    break
                case 9:
                    MonthName = 'Outubro'
                    break
                case 10:
                    MonthName = 'Novembro'
                    break
                case 11:
                    MonthName = 'Dezembro'
                    break


            }

            cy.contains(el.monthYearName , MonthName)
                  .should('be.visible')
        } else {
            cy.log(' Hoje não é o ultimo dia do mes')
        }

        const target = new RegExp('^' + appointmenteDate.getDate() + '$', 'g')
        cy.contains(el.BoxDay, target)
            .click()
    }

    appointmentShouldBeVisible(customer, hour) {
        cy.contains('div', customer.name)
            .should('be.visible')
            .parent()
            .contains(el.BoxHour, hour)
            .should('be.visible')


    }
}


export default new DashPage()