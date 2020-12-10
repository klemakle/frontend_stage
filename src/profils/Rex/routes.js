import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Autre = React.lazy(() => import("./views/SuiviStage/entreprise"));
const Single = React.lazy(() => import("./views/SuiviStage/singleEntreprise"));

const routes = [
    { path: '/rex', exact: true, name: 'rex'},
    { path: '/rex/Dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/rex/entreprises', exact:true, name: 'Entreprises', component: Autre },
    { path: '/rex/entreprises/single/:slug', name: `Single`, component: Single },
]    

export default routes;