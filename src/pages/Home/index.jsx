import { useState } from "react";

import "./styles.css";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import { ItemList } from "../../components/ItemList";

export const Home = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, login, name, bio } = newUser;
      setCurrentUser({ avatar_url, login, name, bio });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };
  return (
    <>
      <Header />
      <div className="conteudo">
        <img src={background} alt="" className="background" />
        <div className="info">
          <div className="form">
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              name="usuario"
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser ? (
            <div className="perfil">
              <img className="profile" src={currentUser.avatar_url} alt="" />
              <div className="perfil-text">
                <div className="name-user">
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                </div>

                <p>{currentUser.bio}</p>
              </div>
            </div>
          ) : null}

          <hr />

          {repos.length ? (
            <div>
              <h2 className="repositorio">Repositórios</h2>
              {repos.map((repo, index) => (
                <ItemList key={index} title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
