export const MenuItems = [
  {
    name: 'Homes',
    isActive: true,
    isShow: true,
    url: '/',
    icon: 'home'
  },
  {
    name: 'End Users',
    isActive: false,
    isShow: true,
    url: '/user',
    icon: 'user',
    description: 'Add or manage end users'
  },
  {
    name: 'Admin Users',
    isActive: false,
    isShow: true,
    url: '/admin',
    icon: 'user-secret',
    description: 'Add or manage admin users'
  },
  {
    name: 'Admin Roles',
    isActive: false,
    isShow: true,
    url: '/role',
    icon: 'lock',
    description: 'Manage administrative roles'
  },
  {
    name: 'Developer Users',
    isActive: false,
    isShow: true,
    url: '/developer',
    icon: 'users',
    description: 'Add or manage 3rd-party users'
  },
  {
    name: 'Privacy & Terms',
    isActive: false,
    isShow: true,
    url: '/privacy-and-terms',
    icon: 'question-circle',
    description: 'Manage Privacy & Terms'
  },
  {
    name: 'Feedback',
    isActive: false,
    isShow: true,
    url: '/feedback',
    icon: 'comments',
    description: 'Talk to our support team'
  }
];
