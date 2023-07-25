import data from '../../../../data.json'
import style from './page.module.scss'
import EmployeeCard from "@/components/EmployeeCard";
import { HiMagnifyingGlass } from "react-icons/hi2";

const EmployeeDetail = ({ params }) => {

    const employee = data.people.filter((employee) => {
        return employee.id == params.employeeId
    })[0]

    return (
        <div className={style.page}>
            <div>
                <HiMagnifyingGlass />
                <p>Page de détail d'un employé</p>
            </div>
            <EmployeeCard
                age={employee.age}
                address={employee.address.city}
                post={employee.post}
                name={employee.name}
            />
        </div>
    )
}

export default EmployeeDetail