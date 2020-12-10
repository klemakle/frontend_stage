import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect,useHistory, useLocation } from 'react-router-dom';

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow
  } from '@coreui/react'




import {Detail, Stage} from './Stages/detailEntreprise';




function Single ({match})  {

    let history = useHistory()    

    useEffect( ()=>{
        refreshLists();
    },{})

    const [detail, setDetail] = useState({})

    const refreshLists =  () => {
        axios.get(`http://localhost:8000/api/stage/entreprises/${match.params.slug}/stages/`)
        .then(res => {
            setDetail(res.data)

        })
        .catch(err =>console.log(err));
    }


    const deleteEntreprise = (e) =>{
        
         axios.delete(`http://localhost:8000/api/stage/entreprises/${match.params.slug}/delete/`)
          .then(res => {
            console.log('supprimé');
            alert('SUPPRESSION REUSSIE')
            return history.push("/rex/entreprises");
        })
        .catch(err => console.log(err))
    }  
    

    return(
        <CCard>
        <CCardBody>
        <CRow>
            <CCol sm="12">
                <Detail
                nom_entreprise={detail.nom_entreprise}
                domaine = {detail.domaine}
                classe_stage={detail.classe_stage}
                telephone_entreprise={detail.telephone_entreprise}
                supprimer = {e => deleteEntreprise()}
                />
                {detail['stages'] ?
                    <>
                    <h4 style={{marginBottom:'2em', marginTop:'3em'}}>Stagiaires</h4>
                    <CRow style={{marginTop:'2em'}}>
                    {detail['stages'].map((stage) =>
                        <Stage
                            nom={stage.stagiaire? stage.stagiaire.etudiant.username: 'Non alloué' }
                            classe={stage.stagiaire && stage.stagiaire.classe}
                            genie = {stage.stagiaire && stage.stagiaire.genie}
                        />
                    )}
                    </CRow>
                    </>
                    :<h1>null</h1>
                }
                
                
            </CCol>
        </CRow>
        </CCardBody>
        </CCard>
    )
}

export default Single