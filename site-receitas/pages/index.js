import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>TreinaCook</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>

      </Head>
      <header className="header">
        <Link href="/">

          <a>

          <img alt="Logo TreinaCook" src="/img/logo.svg"></img>
          </a>
        </Link>
      </header>

      <main>
        <figure className="recipe-card">
          <Link href="/receitas/doces/brigadeiro">

            <a>

              <img className="recipe-picture" src="https://img.itdg.com.br/tdg/images/recipes/000/121/597/220759/220759_original.jpg?mode=crop&width=710&height=400"/>
            </a>
          </Link>
          <div className="recipe-categorie">
              Doces
          </div>
          <figcaption className="recipe-name">Brigadeiro</figcaption>
        </figure>
      </main>

      <footer className="footer">
        &copy; TreinaCook

      </footer>
    </div>
  )
}
