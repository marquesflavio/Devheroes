import Botao from "../Botao/Botao"
import Heroes from "../Heroes"
import './Formulario.css'
import ListaSuspensa from "../ListaSuspensa"

function Formulario (){
    
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
                <form className="formulario">
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