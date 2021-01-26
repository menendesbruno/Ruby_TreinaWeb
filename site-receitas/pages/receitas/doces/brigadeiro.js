import Recipe from '../../../componentes/Recipes/recipe'


export default function Brigadeiro(){
    return(
        <div>
        <Recipe 
                name="Brigadeiro"
                picture="https://img.itdg.com.br/tdg/images/recipes/000/121/597/220759/220759_original.jpg?mode=crop&width=710&height=400"
                time="30 min"
                rendimento="20 porções"
            >
        <h2>Ingredientes</h2>
                <ul>
                    <li>400 ml de água</li>
                    <li>4 colheres (sopa) de leite em pó desnatado</li>
                    <li>4 colheres (sopa) de adoçante culinário</li>
                    <li>2 colheres (sopa) bem cheias de cacau em pó</li>
                    <li>1 colher (sopa) cheia de amido de milho</li>
                    <li>1 colher (sopa) de farelo de aveia (opcional)</li>
                    <li>1 colher (chá) de essência de baunilha</li>
                    <li>cacau em pó, amendoim triturado ou coco seco ralado sem açúcar para enrolar</li>
                    
                </ul>

        <h2>Modo de Preparo</h2>

                <ol>
                 <li>Em uma panela, adicione todos os ingredientes e mexa bem até que todos estejam uniformes.
                 </li>
                 <li>
                 Acrescente mais adoçante se achar necessário e leve ao fogo.
                 </li>
                  <li>
                  Mexa sem parar para não formar grumos.
                  </li>
                  <li>Diminua as mexidas quando o brigadeiro começar a ferver para deixa-lo cozinhar, prestando atenção sempre para não queimar.
                  </li>
                  <li>Espere mais 5 minutos, retire do fogo e deixe esfriar.
                  </li>
                  <li>Faça as bolinhas e passe-as pelo cacau em pó, amendoim triturado ou coco seco ralado sem açúcar.
                  </li>
                </ol>
        </Recipe>

        
        </div>
    )
}