import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Autre = React.lazy(() => import("./views/SuiviStage/entreprise"));

const routes = [
    { path: '/rex', exact: true, name: 'rex'},
    { path: '/rex/Dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/rex/entreprises', name: 'Entreprises', component: Autre },
]    

export default routes;