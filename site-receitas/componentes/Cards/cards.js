import Link from 'next/link'



export default function Cards (props){
    return(
        <figure className="recipe-card">
        <Link href={props.link}>
          <a>

            <img className="recipe-picture" src={props.imagem}/>
          </a>
        </Link>
        <div className="recipe-categorie">
            {props.categoria}
        </div>
        <figcaption className="recipe-name">{props.nome}</figcaption>
      </figure>
    )
}