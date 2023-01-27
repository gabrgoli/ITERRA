import React from 'react'
import { EntryList } from '../../components/EntryList/EntryList'
import LayoutPrincipal from '../../layoutPrincipal/LayoutPrincipal'
import './Home.css'
const Home = () => {
  return (
    <LayoutPrincipal>

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

    </LayoutPrincipal>
  )
}

export default Home
