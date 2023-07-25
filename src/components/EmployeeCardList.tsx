import EmployeeCard from "@/components/EmployeeCard";

const EmployeeCardList = ({employeeList, employeeType}) => {
    return (
        <>
            {employeeList.map((employee) =>
                <>
                    {employee.post === employeeType &&
                        <EmployeeCard
                            name={employee.name}
                            address={employee.address.city}
                            age={employee.age}
                            post={employee.post}
                            id={employee.id}
                            link={true}
                        />
                    }
                </>
            )}
        </>
    )
}

export default EmployeeCardList