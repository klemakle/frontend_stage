import React, { Component } from "react";

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CBadge
  } from '@coreui/react'



import Menu from  './menuClasse'



function Entreprise() {
    return(
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="12">
                    <h1> Liste des entreprises offrant des stages </h1>
                        <Menu/>
                        
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
}

export default Entreprise;