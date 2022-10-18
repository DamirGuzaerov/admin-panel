import {
    DashboardOutlined,
    ShoppingOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    MailOutlined,
    MobileOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    UserOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const generalNavTree = [
    {
        key: 'general',
        path: `${APP_PREFIX_PATH}/general`,
        title: 'sidenav.general',
        breadcrumb: false,
        submenu: [
            {
                key: 'general-dashboard',
                path: `${APP_PREFIX_PATH}/docs/documentation`,
                title: 'sidenav.general.dashboard',
                icon: DashboardOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'general-catalog',
                path: `${APP_PREFIX_PATH}/general/catalog`,
                title: 'sidenav.general.catalog',
                icon: ShoppingCartOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'general-catalog-products',
                        path: `${APP_PREFIX_PATH}/general/catalog/products`,
                        title: 'sidenav.general.catalog.products',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'general-catalog-category',
                        path: `${APP_PREFIX_PATH}/general/catalog/category`,
                        title: 'sidenav.general.catalog.category',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'general-catalog-collections',
                        path: `${APP_PREFIX_PATH}/general/catalog/collections`,
                        title: 'sidenav.general.catalog.collections',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'general-catalog-combo',
                        path: `${APP_PREFIX_PATH}/general/catalog/combo`,
                        title: 'sidenav.general.catalog.combo',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    }]
            },
            {
                key: 'general-orders',
                path: `${APP_PREFIX_PATH}/general/orders`,
                title: 'sidenav.general.orders',
                icon: ShoppingOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'general-clients',
                path: `${APP_PREFIX_PATH}/general/clients`,
                title: 'sidenav.general.clients',
                icon: UserOutlined,
                breadcrumb: false,
                submenu: [{
                    key: 'general-clients-list',
                    path: `${APP_PREFIX_PATH}/general/user-list`,
                    title: 'sidenav.general.clients.list',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                }, {
                    key: 'general-clients-group',
                    path: `${APP_PREFIX_PATH}/general/user-group`,
                    title: 'sidenav.general.clients.group',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                }]
            },
            {
                key: 'general-banners',
                path: `${APP_PREFIX_PATH}/general/banners`,
                title: 'sidenav.general.banners',
                icon: PictureOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'general-promo-codes',
                path: `${APP_PREFIX_PATH}/general/promo-codes`,
                title: 'sidenav.general.promo-codes',
                icon: GiftOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'general-offline-points',
                path: `${APP_PREFIX_PATH}/general/offline-points`,
                title: 'sidenav.general.offline-points',
                icon: ShopOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: 'general-offline-points-addresses',
                        path: `${APP_PREFIX_PATH}/general/offline-points`,
                        title: 'sidenav.general.offline-points.addresses',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'general-offline-points-geofences',
                        path: `${APP_PREFIX_PATH}/general/offline-points`,
                        title: 'sidenav.general.offline-points.geofences',
                        icon: '',
                        breadcrumb: true,
                        submenu:[]
                    },
                ]
            }
            ,{
                key: 'general-employees',
                path: `${APP_PREFIX_PATH}/general/employees`,
                title: 'sidenav.general.employees',
                icon: UsergroupAddOutlined,
                breadcrumb: true,
                submenu: []
            }
            ,{
                key: 'general-mailing-lists',
                path: `${APP_PREFIX_PATH}/general/mailing-lists`,
                title: 'sidenav.general.mailing-lists',
                icon: MailOutlined,
                breadcrumb: true,
                submenu: []
            }
        ]
    },
]
const systemNavTree = [
    {
        key: 'system',
        path: `${APP_PREFIX_PATH}/system`,
        title: 'sidenav.system',
        breadcrumb: false,
        submenu: [
            {
                key: 'system-dashboard',
                path: `${APP_PREFIX_PATH}/system/settings`,
                title: 'sidenav.system.settings',
                icon: SettingOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'system-mobile-app',
                path: `${APP_PREFIX_PATH}/system/mobile-app`,
                title: 'sidenav.system.mobile-app',
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'system-logs',
                path: `${APP_PREFIX_PATH}/system/logs`,
                title: 'sidenav.system.logs',
                icon: ShoppingOutlined,
                breadcrumb: true,
                submenu: []
            },
        ]
    },
]
const navigationConfig = [
    ...generalNavTree,
    ...systemNavTree,
]

export default navigationConfig;
