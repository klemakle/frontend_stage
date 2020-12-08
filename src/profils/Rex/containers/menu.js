export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/rex/dashboard',
      icon: 'cil-speedometer',
      badge: {
        color: 'info',
        text: 'NEW',
      }
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Theme']
    },
    
    {
      _tag: 'CSidebarNavItem',
      name: 'Entreprises',
      to: '/rex/entreprises',
      icon: 'cil-pencil',
    },
    
  ]
  