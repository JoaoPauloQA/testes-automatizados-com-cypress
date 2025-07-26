import {el} from './elements'
import toast from '../../components/toast'
class  ResetPassPage {

 constructor(){

     this.toast = toast
 }
go(token) {

    cy.visit('/reset-password?token=' + token)
}

form(newPass , ConfirmPass){
     cy.get(el.Password).clear().type(newPass)

     cy.get(el.ConfirmPass).clear().type(ConfirmPass)


} 

submit(){

    cy.contains(el.ChangePassButon).click()
}

}

export default new ResetPassPage()