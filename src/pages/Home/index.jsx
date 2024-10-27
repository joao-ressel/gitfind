import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import { ItemList } from "../../components/ItemList";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="conteudo">
        <img src={background} alt="" className="background" />
        <div className="info">
          <form>
            <input type="text" name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </form>
          <div className="perfil">
            <img className="profile" src="https://github.com/joao-ressel.png" alt="" />
            <div className="perfil-text">
              <div className="name-user">
                <h3>João Carlos Ressel</h3>
                <span>@joao-ressel</span>
              </div>

              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h2 className="repositorio">Repositórios</h2>
            <ItemList title="Nome repositório" description="Descrição repositório" />
            <ItemList title="Nome repositório" description="Descrição repositório" />
            <ItemList title="Nome repositório" description="Descrição repositório" />
          </div>
        </div>
      </div>
    </>
  );
};
