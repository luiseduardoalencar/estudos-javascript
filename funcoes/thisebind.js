
const pessoa = {
    saudacao: "Bom dia ",
    falar (){
        console.log(this.saudacao)
    }
}
pessoa.falar()

//conflito entre paradigmas: funcional e OO
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falardepessoa = pessoa.falar.bind(pessoa) //bind amarra o objeto ao this
falardepessoa()