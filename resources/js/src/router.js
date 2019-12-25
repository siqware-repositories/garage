import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/product/Product')
                },
                {
                    path: '/product',
                    name: 'product',
                    component: () => import('./views/product/Product'),
                    meta: {
                        pageTitle: 'ទំនិញ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/purchase',
                    name: 'purchase',
                    component: () => import('./views/purchase/Purchase'),
                    meta: {
                        pageTitle: 'ទិញចូល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/sale',
                    name: 'sale',
                    component: () => import('./views/sale/Sale'),
                    meta: {
                        pageTitle: 'លក់ចេញ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/employee',
                    name: 'employee',
                    component: () => import('./views/employee/Employee'),
                    meta: {
                        pageTitle: 'បុគ្គលិក',
                        rule: 'editor'
                    }
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('./views/user/User'),
                    meta: {
                        pageTitle: 'អ្នកប្រើប្រាស់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/income',
                    name: 'income',
                    component: () => import('./views/income/Income'),
                    meta: {
                        pageTitle: 'ចំណូល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/expense',
                    name: 'expense',
                    component: () => import('./views/expense/Expense'),
                    meta: {
                        pageTitle: 'ចំណាយ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/stock',
                    name: 'report-stock',
                    component: () => import('./views/report/stock/Stock'),
                    meta: {
                        pageTitle: 'របាយការណ៍ស្តុក',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/purchase',
                    name: 'report-purchase',
                    component: () => import('./views/report/purchase/Purchase'),
                    meta: {
                        pageTitle: 'របាយការណ៍ទិញ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/sale',
                    name: 'report-sale',
                    component: () => import('./views/report/sale/Sale'),
                    meta: {
                        pageTitle: 'របាយការណ៍លក់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/profit-lost',
                    name: 'report-profit-lost',
                    component: () => import('./views/report/profit-lost/ProfitLost'),
                    meta: {
                        pageTitle: 'របាយការណ៍ ចំណេញ~ខាត នៃការលក់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/income',
                    name: 'report-income',
                    component: () => import('./views/report/income/Income'),
                    meta: {
                        pageTitle: 'របាយការណ៍ ចំណូល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/expense',
                    name: 'report-expense',
                    component: () => import('./views/report/expense/Expense'),
                    meta: {
                        pageTitle: 'របាយការណ៍ ចំណាយ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/best-seller',
                    name: 'report-best-seller',
                    component: () => import('./views/report/best-seller/BestSeller'),
                    meta: {
                        pageTitle: 'របាយការណ៍ ទំនិញលក់ដាច់ជាងគេ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/close-sell',
                    name: 'report-close-sell',
                    component: () => import('./views/report/close-sell/CloseSell'),
                    meta: {
                        pageTitle: 'របាយការណ៍ បិទបញ្ជីលក់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/close-service',
                    name: 'report-close-service',
                    component: () => import('./views/report/close-service/CloseService'),
                    meta: {
                        pageTitle: 'របាយការណ៍ បិទបញ្ជីថ្លៃឈ្នួល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/close-income',
                    name: 'report-close-income',
                    component: () => import('./views/report/close-income/CloseIncome'),
                    meta: {
                        pageTitle: 'របាយការណ៍ បិទបញ្ជីចំណូល',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report/close-list',
                    name: 'report-close-list',
                    component: () => import('./views/report/close-list/CloseList'),
                    meta: {
                        pageTitle: 'របាយការណ៍ បិទបញ្ជីសរុប',
                        rule: 'editor'
                    }
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'ទំព័រដើម', url: '/'},
                            {title: 'អ្នកប្រើប្រាស់', active: true},
                        ],
                        pageTitle: 'អ្នកប្រើប្រាស់',
                        rule: 'editor'
                    }
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router
