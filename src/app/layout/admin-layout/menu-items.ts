export const MenuItems = [
  {
    name: '_.menu_item.home',
    isActive: true,
    isShow: true,
    url: '/',
    icon: 'home',
  },
  {
    name: '_.menu_item.end_users',
    isActive: false,
    isShow: true,
    url: '/user',
    icon: 'user',
    description: 'home.add_or_manage_end_users',
    perms: ['Users']
  },
  {
    name: '_.menu_item.admin_users',
    isActive: false,
    isShow: true,
    url: '/admin',
    icon: 'user-secret',
    description: 'home.add_or_manage_admin_users',
    perms: ['Admin']
  },
  {
    name: '_.menu_item.admin_roles',
    isActive: false,
    isShow: true,
    url: '/role',
    icon: 'lock',
    description: 'home.manage_administrative_roles',
    perms: ['Admin roles']
  },
  {
    name: '_.menu_item.developer_users',
    isActive: false,
    isShow: true,
    url: '/developer',
    icon: 'users',
    description: 'home.add_or_manage_3rd_party_users',
    perms: ['Developer']
  },
  {
    name: '_.menu_item.privacy_and_terms',
    isActive: false,
    isShow: true,
    url: '/privacy-and-terms',
    icon: 'question-circle',
    description: 'home.manage_privacy_and_terms',
    perms: ['Privacy & Terms']
  },
  {
    name: '_.menu_item.feedback',
    isActive: false,
    isShow: true,
    url: '/feedback',
    icon: 'comments',
    description: 'home.talk_to_our_support_team',
    perms: ['Feedback']
  }
];
