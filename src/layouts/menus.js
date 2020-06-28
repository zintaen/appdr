import {
  HomeOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

export const menus = [
  {
    title: '대시보드',
    Icon: HomeOutlined,
    link: '/dashboard',
    key: 'dashboard',
  },
  { title: '문의/요청', Icon: MessageOutlined, link: '/inquiry', key: 'inquiry' },
  { title: '서비스 구매', Icon: ShoppingCartOutlined, link: '/coupon', key: 'coupon' },
  { title: '승인하기', Icon: FileDoneOutlined, link: '/approve', key: 'approve' },
  { title: '요청현황', Icon: ContainerOutlined, link: '/status', key: 'status' },
];
