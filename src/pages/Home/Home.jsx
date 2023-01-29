import React from 'react'
import { ButtonCreate } from '../../components/ButtonCreate/ButtonCreate'
import { EntryList } from '../../components/EntryList/EntryList'
import LayoutPrincipal from '../../layoutPrincipal/LayoutPrincipal'
import './Home.css'
import { FaUserTie } from "react-icons/fa";
import { FormNewLead } from '../../components/FormNewLead/FormNewLead'
const Home = () => {
  return (
    <LayoutPrincipal>

        <div className='HomePage'>
            <FormNewLead/>
            <div className='home-userAndButton'>
                <div>
                        <FaUserTie/>
                    <div>
                        <h1>Asesor</h1>
                        <h2>Fernando Sánchez</h2>
                    </div>
                </div>
                <ButtonCreate/>
            </div>
            <div className='home-table'>
                <div>
                    <h1>Nuevo lead</h1>
                    <EntryList status='nuevo'/>
                </div>
                <div>
                    <h1>Visita al herrero</h1>
                    <EntryList status='visita'/>
                </div>
                <div>
                    <h1>Firma de contratos</h1>
                    <EntryList status='firma'/>
                </div>
                <div>
                    <h1>Cerrado ganado</h1>
                    <EntryList status='ganado'/>
                </div>
                <div>
                    <h1>Cerrado perdido</h1>
                    <EntryList status='perdido'/>
                </div>
            </div>
        </div>

    </LayoutPrincipal>
  )
}

export default Home
