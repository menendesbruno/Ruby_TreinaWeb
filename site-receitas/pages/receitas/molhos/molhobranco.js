import Recipe from '../../../componentes/Recipes/recipe'


export default function BoloDeCenoura(){
    return(
        <div>
        <Recipe 
                name="Molho Branco"
                picture="https://portal-amb-imgs.clubedaana.com.br/2019/04/molho-branco-ana-maria-braga-600x400.jpg"
                time="30 min"
                rendimento="4 porções"
            >
        <h2>Ingredientes</h2>
                <ul>
                    <li>4 colheres (sopa) de margarina</li>
                    <li>8 colheres (sopa) de farinha de trigo</li>
                    <li>1 litro de leite quente</li>
                    <li>1 cebola ralada</li>
                    <li>sal e noz-moscada moída na hora a gosto</li>
                    
                </ul>
        <h2>Modo de Preparo</h2>
                <ol>
                    <li>Numa panela derreta a margarina.</li>
                    <li>Acrescente a cebola ralada e deixe amolecer.</li>
                    <li>Depois acrescente a farinha e deixe dourar.</li>
                    <li>Fora do fogo, misture aos poucos o leite (tenha paciência), sem parar de mexer (para o molho não formar grumos)</li>
                    <li>Depois de dissolvido tempere com sal e noz-moscada mexendo sempre.</li>
                    <li>Cozinhe por cerca de 10 a 15 minutos em fogo baixo até formar um creme.</li>
                </ol>
        </Recipe>

        
        </div>
    )
}