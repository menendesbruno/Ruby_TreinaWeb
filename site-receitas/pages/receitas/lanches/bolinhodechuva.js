import Recipe from '../../../componentes/Recipes/recipe'


export default function BoloDeCenoura(){
    return(
        <div>
        <Recipe 
                name="Bolinho de Chuva"
                picture="https://cdn.panelinha.com.br/receita/963802800000-Bolinho-de-chuva.jpg"
                time="35 min"
                rendimento="6 porções"
            >
        <h2>Ingredientes</h2>
                <ul>
                    <li>2 1/2 xícaras (chá) de farinha de trigo peneirada</li>
                    <li>1 xícara (chá) de açúcar</li>
                    <li>1 xícara (chá) de leite</li>
                    <li>3 ovos</li>
                    <li>1 colher (sopa) rasa de fermento em pó</li>
                    <li>1/2 xícara (chá) açúcar misturado com uma colher (sopa) de canela em pó para polvilhar</li>
                </ul>
        <h2>Modo de Preparo</h2>
                <ol>
                  <li>Bata os ovos com o açúcar.</li>
                  <li>Acrescente o leite e a farinha. Misture bem até formar uma massa homogênea.</li>
                  <li>Por último, coloque o fermento.</li>
                  <li>Frite em óleo com temperatura média.</li>
                  <li>Passe no açúcar e canela.</li>
                </ol>
        </Recipe>

        
        </div>
    )
}