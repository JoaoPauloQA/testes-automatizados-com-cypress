import loginPage from '../support/pages/login'
import DashPage from '../support/pages/dash'


describe('login', function () {


    before(function () {

        cy.fixture('login').then(function (login) {

            this.login = login.login
            this.invalid_emails = login.invalid_emails


        })

    })

    context('quando o usuario é muito bom', function () {

        before(function () {

            cy.postUser(this.login)

        })

        it('deve logar com sucesso', function () {

            loginPage.go()
            loginPage.form(this.login)
            loginPage.submit()

            DashPage.header.userLoggedIn(this.login.name)


        })

    })



    context('quando o usuario é bom mas a senha esta incorreta', function () {



        before(function () {


            cy.postUser(this.login)

        })

        it('deve notificar erro de credenciais', function () {

            const wrongLogin = {

                ...this.login,
                password: 'abc'
            }

            loginPage.go()
            loginPage.form(wrongLogin)
            loginPage.submit()


            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.toast.shouldHaveTest(message)

        })


        context('quando o formato do email é invalido', function () {



            before(function () {


                loginPage.go()

            })




            it('não deve logar com email:', function () {

                this.invalid_emails.forEach(function (email) {

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

            const alertMessages = [

                'E-mail é obrigatório',
                'Senha é obrigatória',

            ]

            before(function () {
                loginPage.go()
                loginPage.submit()

            })

            alertMessages.forEach(function (alert) {

                it('deve exibir ' + alert.toLowerCase(), function () {

                    loginPage.alert.HaveText(alert)


                })

            })


        })

    })
})