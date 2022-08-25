import { Link } from "react-router-dom";
import Produtos from "../Produtos/Produtos";

import style from "./Main.module.css";

import tecnologia from "../Assets/tecnologia.png";
import supermercados from "../Assets/supermercados.png";
import whiskey from "../Assets/whiskey.png";
import ferramentas from "../Assets/ferramentas.png";
import saude from "../Assets/saude.png";
import corrida from "../Assets/corrida.png";
import moda from "../Assets/moda.png";
import vtex from "../Assets/vtex.png";

const Main = () => {
  return (
    <div>
      <div className={style.containerimage}>
        <div className={style.textbutton}>
          <div>
            <h1>Venha conhecer nossas promoções</h1>
          </div>
          <div>
            <h2>50% Off nos produtos </h2>
          </div>
          <button>Ver Produto</button>
        </div>
      </div>

      <section className={style.container2}>
        <Link to={""}>
          {" "}
          <div>
            <img src={tecnologia} alt="tecnologia" /> <p>Tecnologia</p>
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={supermercados} alt="supermercado" />
            <p>Supermercado</p>{" "}
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={whiskey} alt="Bebidas" />
            <p>Bebidas</p>
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={ferramentas} alt="Ferramentas" />
            <p>Ferramentas</p>
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={saude} alt="Saude" />
            <p>Saude</p>
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={corrida} alt="Esporte" />
            <p>Esporte</p>
          </div>{" "}
        </Link>
        <Link to={""}>
          {" "}
          <div>
            <img src={moda} alt="Moda" />
            <p>Moda</p>{" "}
          </div>{" "}
        </Link>
      </section>

      <section className={style.prodrel}>
        <h1 className={style.prodrelh1}>Produtos Relacionados</h1>
        <Link to={""}>Celular</Link>
        <Link to={""}>Acessorios</Link>
        <Link to={""}>Tablets</Link>
        <Link to={""}>Notebooks</Link>
        <Link to={""}>Tvs</Link>
        <Link to={""}>Ver todos</Link>
      </section>
      <Produtos />

      <section className={style.containersection}>
        <div className={style.parceiros}>
          <div>
            <h1>Parceiros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className={style.buttonparceiros}>Confira</button>
          </div>
        </div>

        <div className={style.parceiros}>
          <div>
            <h1>Parceiros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className={style.buttonparceiros}>Confira</button>
          </div>
        </div>
      </section>

      <section className={style.prodrel}>
        <h1 className={style.prodreltitle}>Produtos Relacionados</h1>
        <Link to={""} className={style.prodlink}>
          Ver todos
        </Link>
      </section>
      <Produtos />
      <section className={style.containersection}>
        <div className={style.parceiros}>
          <div className={style.prodparceiros}>
            <h1>Produtos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className={style.buttonparceiros}>Confira</button>
          </div>
        </div>

        <div className={style.parceiros}>
          <div className={style.prodparceiros}>
            <h1>Produtos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className={style.buttonparceiros}>Confira</button>
          </div>
        </div>
      </section>

      <section className={style.nav}>
        <h1>Navegue por marcas</h1>

        <div className={style.navvtex}>
          <Link to={""}>
            <div>
              <img src={vtex} alt="" />
            </div>
          </Link>
          <Link to={""}>
            <div>
              <img src={vtex} alt="" />
            </div>
          </Link>
          <Link to={""}>
            <div>
              <img src={vtex} alt="" />
            </div>
          </Link>
          <Link to={""}>
            <div>
              <img src={vtex} alt="" />
            </div>
          </Link>
          <Link to={""}>
            <div>
              <img src={vtex} alt="" />
            </div>
          </Link>
        </div>
      </section>

      <section className={style.prodrel}>
        <h1 className={style.prodreltitle}>Produtos Relacionados</h1>
        <Link to={""} className={style.prodlink}>
          Ver todos
        </Link>
        <Produtos />
      </section>
    </div>
  );
};

export default Main;
