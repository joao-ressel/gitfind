import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
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
     </div>
      </div>
    </>
  );
};
