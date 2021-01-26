import styles from '../styles/Home.module.css'
import Header from '../componentes/Header/header'
import Footer from '../componentes/Footer/footer'
import Cards from '../componentes/Cards/cards'


export default function Home() {
  return (
    <div >
    <Header title ="TreinaCook"/>
      <main>
      <Cards 
        link="/receitas/bolos/bolodecenoura"
        imagem="https://s2.glbimg.com/mVrs_HXux7pgYIt7xotYUg_0d5A=/0x0:1550x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/q/j/gkbXFDTk2WK7TznmMO7Q/bolo-de-cenoura-de-liquidificador.jpg"
        categoria="Bolos"
        nome="Bolo de Cenoura"
      />
      <Cards 
        link="/receitas/doces/brigadeiro"
        imagem="https://img.itdg.com.br/tdg/images/recipes/000/121/597/220759/220759_original.jpg?mode=crop&width=710&height=400"
        categoria="Doces"
        nome="Brigadeiro"
      />
      <Cards 
        link="/receitas/lanches/bolinhodechuva"
        imagem="https://cdn.panelinha.com.br/receita/963802800000-Bolinho-de-chuva.jpg"
        categoria="Lanches"
        nome="Bolinho de Chuva"
      />
      <Cards 
        link="/receitas/molhos/molhobranco"
        imagem="https://portal-amb-imgs.clubedaana.com.br/2019/04/molho-branco-ana-maria-braga-600x400.jpg"
        categoria="Molhos"
        nome="Molho Branco"
      />
      </main>
      <Footer/>      
    </div>
  )
}
