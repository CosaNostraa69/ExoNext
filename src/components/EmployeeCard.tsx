import style from "./employeeCard.module.scss";
import {BiUserCircle} from 'react-icons/bi';

const EmployeeCard = ({name, age, address, post, id, link}) => {
    return (
        <div className={style.employeeCard}>
            {link &&
                <a href={'/employee/' + id}>
                    <div>
                        <BiUserCircle/>
                        <p>{name}</p>
                    </div>
                    <p>{age} ans</p>
                    <p>{address}</p>
                    <p>Post : {post}</p>
                </a>
            }
            {!link &&
                <>
                    <div>
                        <BiUserCircle/>
                        <p>{name}</p>
                    </div>
                    <p>{age} ans</p>
                    <p>{address}</p>
                    <p>Post : {post}</p>
                </>
            }
        </div>
    )
}

export default EmployeeCard