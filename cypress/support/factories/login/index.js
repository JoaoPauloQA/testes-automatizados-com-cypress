exports.user = {

    name: "jassa paulo",
    email: "jassa@samuraibs.com",
    password: "pwd1234",
    is_provider: true


},

    exports.invalid_emails = [

        "papipto.com.br",
        "joao123",
        "@",
        "xpto56",
        "111",
        "~~dasd",
        "74637",
        "@gmail.com"

    ],

    exports.wrongLogin = {

        ...exports.user,
        password: 'abc'
    }

exports.message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

exports.alertmessages = [

    'E-mail é obrigatório',
    'Senha é obrigatória',

]