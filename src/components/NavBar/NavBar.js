import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { TbCrown } from "react-icons/tb";

//imagens
import Vector11 from "../Assets/Vector11.png";
const NavBar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <NavLink to={""}>Todas as categorias</NavLink>
        <NavLink to={""}>Supermercado</NavLink>
        <NavLink to={""}>Livros</NavLink>
        <NavLink to={""}>Moda</NavLink>
        <NavLink to={""}>Lançamentos</NavLink>
        <NavLink to={""}>
          <span>Ofertas do dias</span>
        </NavLink>
        <div>
          <TbCrown />
        </div>
        <NavLink to={""}>Assinatura</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
