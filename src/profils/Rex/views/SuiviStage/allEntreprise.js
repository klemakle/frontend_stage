import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CDataTable,
    CCol,
    CRow,
    CBadge
} from '@coreui/react'


const getBadge = partenaire => {
switch (partenaire) {
    case true: return 'success'
    case false: return 'warning'
    default: return 'danger'
} 
}

const fields = ['nom_entreprise', 'domaine','classe_stage','telephone_entreprise','lien_page','partenaire']



function Test(){
    useEffect(() =>{
        refreshLists();
},[]);


    const [entreprises, setEntreprises] = useState([]);

    const refreshLists =  () => {
        axios.get("http://localhost:8000/api/stage/entreprises/")
        .then(res => {
            setEntreprises(res.data);
        })
        .catch(err =>console.log(err));
    }

    return(
        <div>
            <h2>Toutes les entreprises</h2>
        {entreprises.length > 0 ?
        <CDataTable
            items={entreprises}
            fields={fields}
            itemsPerPage={10}
            hover
            pagination
            scopedSlots = {{
                'partenaire':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.partenaire)}>
                        {item.partenaire==true ?'OUI':'NON'}
                    </CBadge>
                    </td>
                )
            }}
        />
        :<h3>Aucune Entreprise</h3>
        }
        </div>
    )

}


export default Test;