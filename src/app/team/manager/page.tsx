import style from './page.module.scss'
import EmployeeCardList from "@/components/EmployeeCardList";
import data from "../../../../data.json";
import { BiUserVoice } from 'react-icons/bi';

const TeamPage = () => {
    return (
        <div className={style.page}>
            <div>
                <BiUserVoice />
                <p>Page de l'équipe des managers</p>
            </div>
            <EmployeeCardList employeeList={data.people} employeeType={'management'}/>
        </div>
    )
}

export default TeamPage