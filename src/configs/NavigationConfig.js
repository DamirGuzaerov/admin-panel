import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const mainNavTree = [
  {
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboard`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'docs-documentation',
      path: `${APP_PREFIX_PATH}/docs/documentation`,
      title: 'sidenav.docs.documentation',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'docs-changelog',
      path: `${APP_PREFIX_PATH}/docs/documentation/changelog`,
      title: 'sidenav.docs.changelog',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]
const navigationConfig = [
  ...mainNavTree,
]

export default navigationConfig;
