import {el} from './elements'
import toast from '../../components/toast'
import alert from '../../components/alert'

class loginPage  {

    constructor(){

        this.toast = toast 
        this.alert = alert 
    }

    go(){
        cy.visit('/')
    }

   form(user){
            
    cy.get(el.email).clear().type(user.email)
    cy.get(el.password).clear().type(user.password)
      

   }
   submit(){

      cy.contains(el.SignIn).click()

   } 
    


  
}

export default new loginPage()