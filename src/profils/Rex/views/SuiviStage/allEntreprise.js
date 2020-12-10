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
    CBadge,
    CPagination,
    CButton,
    CCollapse
} from '@coreui/react'
import { Link, Redirect,useHistory, useLocation } from 'react-router-dom';



const getBadge = partenaire => {


    switch (partenaire) {
    case true: return 'success'
    case false: return 'warning'
    default: return 'danger'
} 
}

// const fields = ['nom_entreprise', 'domaine','classe_stage','telephone_entreprise','lien_page','partenaire']




function Test(){
   
    

    const [entreprises, setEntreprises] = useState([]);


    const refreshLists =  () => {
        axios.get("http://localhost:8000/api/stage/entreprises/")
        .then(res => {
            setEntreprises(res.data);
        })
        .catch(err =>console.log(err));
    }




    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)

    



    useEffect(() =>{
        refreshLists();
        currentPage !== page && setPage(currentPage)
    },[currentPage, page]);


    return(
        <div>
            <h2>Toutes les entreprises</h2>
        {entreprises.length > 0 ?
        <>
        <CDataTable
            items={entreprises}
            fields={[{key:'nom_entreprise', _style:{width:'20%', textAlign:'center'}}, 'domaine',{key:'classe_stage', _style:{width:'10%' , textAlign:'center'}},'telephone_entreprise','lien_page',{
                key: 'partenaire',
                label: 'Partenaire',
                _style: { width: '5%' },
                filter: false
              }]}
            columnFilter
            tableFilter
            sorter
            itemsPerPageSelect
            itemsPerPage={7}
            hover
            header
            pagination
            onRowClick={(item) =>history.push(`/rex/entreprises/single/${item.slug}`)  }

           
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
        
        </>
        :<h3>Aucune Entreprise</h3>
        }
        </div>
    )

}


export default Test;