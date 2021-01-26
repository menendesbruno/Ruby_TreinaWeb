import Recipe from '../../../componentes/Recipes/recipe'


export default function BoloDeCenoura(){
    return(
        <div>
        <Recipe 
                name="Bolo de Cenoura"
                picture="https://s2.glbimg.com/mVrs_HXux7pgYIt7xotYUg_0d5A=/0x0:1550x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/q/j/gkbXFDTk2WK7TznmMO7Q/bolo-de-cenoura-de-liquidificador.jpg"
                time="40 min"
                rendimento="8 porções"
            >
        <h2>Ingredientes</h2>

            <h3>Massa</h3>
                <ul>
                    <li>1/2 xícara (chá) de óleo</li>
                    <li>3 cenouras médias raladas</li>
                    <li>4 ovos</li>
                    <li>2 xícaras (chá) de açúcar</li>
                    <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento em pó</li>
                </ul>
            <h3>Cobertura</h3>
                <ul>
                 <li>1 colher (sopa) de manteiga</li>
                  <li>3 colheres (sopa) de chocolate em pó</li>
                  <li>1 xícara (chá) de açúcar</li>
                  <li>1 xícara (chá) de leite</li>
                </ul>
        <h2>Modo de Preparo</h2>

            <h3>Massa</h3>

                <ol>
                 <li>Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.</li>
                 <li>Acrescente o açúcar e bata novamente por 5 minutos.</li>
                  <li>Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.</li>
                  <li>Acrescente o fermento e misture lentamente com uma colher.</li>
                  <li>Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.</li>
                </ol>

            <h3>Cobertura</h3>

                <ol>
                    <li>Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.</li>
                    <li>Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.</li>
                </ol>

        </Recipe>

        
        </div>
    )
}