import { useMemo, useState } from 'react';
import { EmployeCreateInfo, EmployesCards, EmployedLastCreated, EmployesInfo } from '../containers';
import { useGetEmployesLast, useGetEmployesList } from '../hooks';
import './Employes.css';

export const Employes = () => {

    const [cardsEmployes, setCardsEmployes] = useState([]);
    const [empLast, setEmpLast] = useState([])
    const [isReload, setIsReload] = useState(0);

    useMemo(async () => {
        const respEmp = await useGetEmployesList();
        setCardsEmployes(respEmp)
        const respLastEmp = await useGetEmployesLast();
        setEmpLast(respLastEmp)
    }, [isReload])


    return (
        <section className="Employes">
            <div className="Employes-container">
                <h1 className="Employes-title">Empleados</h1>
                <div className="Employes-desing-container">
                    <div className="Employes-view-container">
                        <div className="Employes-list">
                            <h2>Lista de empleados</h2>
                            <div className="Employes-scroll-container">
                                <EmployesCards cardsEmployes={cardsEmployes} isReload={isReload} setIsReload={setIsReload}/>
                            </div>
                        </div>
                        <div className="Employes-all-container">
                            <div className="Employ-create">
                                <h2>Nuevo empleado</h2>
                                <EmployeCreateInfo isReload={isReload} setIsReload={setIsReload} />
                            </div>
                            <div className="Employe-last-create">
                                <h2>Ultimo empleado creado</h2>
                                <EmployedLastCreated empLast={empLast} />
                            </div>
                        </div>
                    </div>
                    <EmployesInfo />
                </div>
            </div>
        </section>
    )
}