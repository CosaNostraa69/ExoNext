import style from './page.module.scss'
import EmployeeCardList from "@/components/EmployeeCardList";
import data from "../../../../data.json";
import { BiPhone } from 'react-icons/bi';

const TeamPage = () => {
    return (
        <div className={style.page}>
            <div>
                <BiPhone />
                <p>Page de l'équipe des ressources humaines</p>
            </div>
            <EmployeeCardList employeeList={data.people} employeeType={'human resources'}/>
        </div>
    )
}

export default TeamPage