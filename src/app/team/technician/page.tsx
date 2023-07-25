import style from './page.module.scss'
import EmployeeCardList from "@/components/EmployeeCardList";
import data from "../../../../data.json";
import { BiNetworkChart } from 'react-icons/bi';

const TeamPage = () => {
    return (
        <div className={style.page}>
            <div>
                <BiNetworkChart />
                <p>Page de l'équipe des techniciens</p>
            </div>
            <EmployeeCardList employeeList={data.people} employeeType={'technician'}/>
        </div>
    )
}

export default TeamPage