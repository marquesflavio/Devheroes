import Botao from "../Botao/Botao"
import Heroes from "../Heroes"
import './Formulario.css'
import ListaSuspensa from "../ListaSuspensa"

function Formulario (){



    return(
        <section className="container-formulario">
                <form className="formulario">
                <Heroes
                    label="Nome:"
                    placeholder="Digite o nome do seu herói..."            
                />
                <ListaSuspensa
                    label="Classe: "
                />
                
                <ListaSuspensa
                    label="Característica: "
                />

                <Botao>
                    Criar Personagem
                </Botao>
                

                </form>
        </section>
    )
}

export default Formulario