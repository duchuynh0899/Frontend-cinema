export const MenuItems = [
  {
    name: 'Home',
    isActive: true,
    isShow: true,
    url: '/',
    icon: 'home'
  },
  {
    name: 'Now Showing',
    isActive: false,
    isShow: true,
    url: '/user',
    icon: 'user',
    description: 'Add or manage end users'
  },
  {
    name: 'Coming Soon',
    isActive: false,
    isShow: true,
    url: '/admin',
    icon: 'user-secret',
    description: 'Add or manage admin users'
  },
  {
    name: 'Cinemas',
    isActive: false,
    isShow: true,
    url: '/role',
    icon: 'lock',
    description: 'Manage administrative roles'
  },
];
