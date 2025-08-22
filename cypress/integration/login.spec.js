import loginPage from '../support/pages/login'
import DashPage from '../support/pages/dash'
import { user, invalid_emails, wrongLogin, message, alertmessages } from '../support/factories/login/index'


describe('login', function () {


    context('quando o usuario é muito bom', function () {

        before(function () {

            cy.postUser(user)

        })

        it('deve logar com sucesso', function () {

            cy.uiLogin(user)

        })

    })



    context('quando o usuario é bom mas a senha esta incorreta', function () {



        before(function () {

            cy.postUser(user)

        })

        it('deve notificar erro de credenciais', function () {

            cy.sucessLogin(wrongLogin)

            loginPage.toast.shouldHaveTest(message)

        })


        context('quando o formato do email é invalido', function () {

            before(function () {


                loginPage.go()

            })

            invalid_emails.forEach(function (email) {
                it(`não deve logar com email:${email}`, function () {



                    const user = {

                        email: email, password: 'pwd1234'
                    }

                    loginPage.form(user)
                    loginPage.submit()
                    loginPage.alert.HaveText('Informe um email válido')

                })


            })

        })

        context('Quando não preencho nenhum dos campos', function () {

            before(function () {
                loginPage.go()
                loginPage.submit()

            })

            alertmessages.forEach(function (alert) {

                it('deve exibir ' + alert.toLowerCase(), function () {

                    loginPage.alert.HaveText(alert)

                })

            })


        })

    })
})