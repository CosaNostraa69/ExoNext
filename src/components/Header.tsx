import style from './header.module.scss'
import { LuCrown } from "react-icons/lu";
const Header = () => {
    return (
        <div className={style.header}>
            <a href="/">
                <LuCrown />
                <h1>CosaNostraa69</h1>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/team/technician">Technicien</a>
                    </li>
                    <li>
                        <a href="/team/manager">Manager</a>
                    </li>
                    <li>
                        <a href="/team/human-resources">Ressource humaines</a>
                    </li>
                         <li>
                        <a href="/team/todolist">Liste des tâches</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header