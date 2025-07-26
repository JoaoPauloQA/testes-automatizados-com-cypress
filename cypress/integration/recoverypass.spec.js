import forgotpasspage from '../support/pages/forgotpass'
import ResetPassPage from '../support/pages/resetpass'

describe(' resgate de senha', function () {


    before(function () {

        cy.fixture('recovery').then(function (recovery) {
            this.data = recovery

        })


    })

    context('quando o usuario esquece a senha', function () {

        before(function () {

            cy.postUser(this.data)
        })

        it('deve poder resgatar por email', function () {

            forgotpasspage.go()
            forgotpasspage.form(this.data.email)
            forgotpasspage.submit()

            const message = 'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada.'
            forgotpasspage.toast.shouldHaveTest(message)

        })


    })

    context.only(' quando o usuario solicita o resgate', function () {


        before(function () {


            cy.postUser(this.data)
            cy.RecoveryPass(this.data.email)
        })

        it('deve poder cadastrar uma nova senha', function () {

            const token = Cypress.env('RecoveryToken')

            ResetPassPage.go(token)
            ResetPassPage.form('abcd123', 'abcd123')
            ResetPassPage.submit()



            const message = 'Agora você já pode logar com a sua nova senha secreta.'
            ResetPassPage.toast.shouldHaveTest(message)
             
        })

    })
})