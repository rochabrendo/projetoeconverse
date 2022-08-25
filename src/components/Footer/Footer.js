import style from "./Footer.module.css";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import Visa from "../Assets/Visa.png";
import elo from "../Assets/elo.png";
import alelo from "../Assets/alelo.png";
import dinners from "../Assets/dinners.png";
import ifood from "../Assets/ifood.png";
import mastercard from "../Assets/mastercard.png";
import pix from "../Assets/pix.png";
import amex from "../Assets/amex.png";
import ticket from "../Assets/ticket.png";
import sodexo from "../Assets/sodexo.png";
import econversevtex from "../Assets/econversevtex.png";

const Footer = () => {
  return (
    <div>
      <div className={style.containerfooter}>
        <div className={style.quemsomos}>
          <h1 className={style.titlefooter}>Sobre nós</h1>
          <Link to={""}>Conhaça</Link>
          <Link to={""}>Como comprar</Link>
          <Link to={""}>indicação e desconto</Link>

          <div className={style.redesociais}>
            <FaFacebookSquare />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className={style.info}>
          <h1 className={style.titlefooter}>Informações uteis</h1>
          <Link to={""}>Fale conosco</Link>
          <Link to={""}>Duvidas</Link>
          <Link to={""}>Prazos de entregas</Link>
          <Link to={""}>Formas de pagamentos</Link>
          <Link to={""}>Politica de privacidade</Link>
          <Link to={""}>Trocas e devoluções</Link>
        </div>

        <div className={style.containercart}>
          <h1 className={style.titlefooter}>Formas de pagamentos</h1>
          <div className={style.bandeiras}>
            <img src={Visa} alt="" />
            <img src={elo} alt="" />
            <img src={alelo} alt="" />
          </div>

          <div className={style.bandeiras}>
            <img src={dinners} alt="" />
            <img src={ifood} alt="" />
            <img src={mastercard} alt="" />
          </div>

          <div className={style.bandeiras}>
            <img src={pix} alt="" />
            <img src={amex} alt="" />
            <img src={ticket} alt="" />
          </div>

          <div>
            <img src={sodexo} alt="" />
          </div>
        </div>
        <form>
          <h1>
            Cadastre-se e Receba nossas <strong>novidades e promoções</strong>
          </h1>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <input type="Email" placeholder="seu e-mail" />
          <button>ok</button>
        </form>
      </div>
      <div className={style.econversevtex}>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div>
          <img src={econversevtex} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer ;
