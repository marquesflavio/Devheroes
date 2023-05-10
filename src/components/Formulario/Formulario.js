import Botao from "../Botao/Botao"
import Heroes from "../Heroes"
import './Formulario.css'

function Formulario (){
    return(
        <section className="formulario">
                <form>
                <Heroes
                    label="Nome:"
                    placeholder="digite o nome do seu herói..."            
                />
                <Heroes
                    label="Classe:"
                                
                />
                
                
                <Botao>
                    "Criar Personagem"
                </Botao>
                

                </form>
        </section>
    )
}

export default Formulario