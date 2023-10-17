    $(document).ready(function() {

        $('#telefone').mask('(00) 00000-0000')

        $('#cpf').mask('000.000.000-00')

        $('#cep').mask('00000-000')

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                cpf: {
                    required: true
                },
                adress:{
                    required: true
                },
                cep:{
                    required: true
                }
            },
            messages: {
                nome: 'Campo obrigatório',
                telefone: 'Campo obrigatório',
                email: 'Campo obrigatório',
                cpf: 'Campo obrigatório',
                adress: 'Campo obrigatório',
                cep: 'Campo obrigatório'
            },
            submitHandler: function(form) {
                alert('Cadastro realizado com sucesso.')
                $('form input').val('')
                
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        })
    })
    