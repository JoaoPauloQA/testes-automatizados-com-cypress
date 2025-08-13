import signupPage from '../support/pages/signup'

describe('cadastro', function () {



    before(function () {

        cy.fixture('signup').then(function (signup) {
            this.success = signup.success
            this.email_dup = signup.email_dup
            this.email_inv = signup.email_inv
            this.short_password = signup.short_password


        })
    })

    context('quando o usuario e novato ', function () {



        before(function () {
            cy.task('removeUser', this.success.email)
                .then(function (result) {
                    
                })

        })

        it('deve cadastrar com sucesso', function () {



            signupPage.go()
            signupPage.form(this.success)
            signupPage.submit()
            signupPage.toast.shouldHaveTest('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')

        })
    })

    context('Quando o email já existe', function () {

        before(function () {

            cy.postUser(this.email_dup)

        })


        it('Deve confirmar usuario cadastrado', function () {

            signupPage.go()
            signupPage.form(this.email_dup)
            signupPage.submit()
            signupPage.toast.shouldHaveTest('Email já cadastrado para outro usuário.')


        })
    })


context(' Quando o email é incorreto', function () {

    

    it('deve exibir mensagem de alerta', function () {

        signupPage.go()
        signupPage.form(this.email_inv)
        signupPage.submit()
        signupPage.alert.HaveText('Informe um email válido')


    })

})




context('Quando a senha é muito curta', function () {

    const passwords = ['1', '1a', '1bc', '12g4', '12bc5']


    passwords.forEach(function (p) {

       
 it('nao deve cadastrar com a senha: ' + p, function () {

           this.short_password.password = p
           signupPage.go()
            signupPage.form(this.short_password)
            signupPage.submit()

        })

    })

    afterEach(function () {

        signupPage.alert.HaveText('Pelo menos 6 caracteres')


    })

})


context('Quando não preencho nenhum dos campos', function () {

    const alertMessages = [
        'Nome é obrigatório',
        'E-mail é obrigatório',
        'Senha é obrigatória'
    ]

    before(function () {
        signupPage.go()
        signupPage.submit()

    })

    alertMessages.forEach(function (alert) {

        it('deve exibir ' + alert.toLowerCase(), function () {

            signupPage.alert.HaveText(alert)


        })

    })
})

})