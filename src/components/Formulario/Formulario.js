import Botao from "../Botao/Botao"
import Heroes from "../Heroes"
import './Formulario.css'
import ListaSuspensa from "../ListaSuspensa"

function Formulario (){

    const criarPersonagem = (e) => {
        e.preventDefault()
        // aqui as imagens serão criadas cfe a classe
    }

    const personagens =[
        "Bárbaro",
        "Bardo",
        "Elfo",
        "Mago",
        "Princesa"
    ]

    const caracteristicas =[
        "Força",
        "Canto",
        "Flechas",
        "Magia",
        "Doçura"
    ]

    return(
        <section className="container-formulario">
                <form className="formulario" onSubmit={criarPersonagem}>
                <Heroes
                    label="Nome:"
                    placeholder="Digite o nome do seu herói..."            
                />
                <ListaSuspensa
                    label="Classe: "
                    itens={personagens}
                />
                
                <ListaSuspensa
                    label="Característica: "
                    itens={caracteristicas}
                    
                />

                <Botao>
                    Criar Personagem
                </Botao>
                

                </form>
        </section>
    )
}

export default Formulario