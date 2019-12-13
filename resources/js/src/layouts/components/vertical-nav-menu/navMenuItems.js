/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
    {
        header: "សំខាន់",
        icon: "PackageIcon",
        i18n: "Apps",
        items: [
            {
                url: "/",
                name: "ផ្ទាំងដើម",
                slug: "home",
                icon: "HomeIcon",
            },
            {
                url: "/product",
                name: "ទំនិញ",
                slug: "product",
                icon: "PackageIcon",
            },
            {
                url: "/purchase",
                name: "ទិញចូល",
                slug: "purchase",
                icon: "DownloadIcon",
            },
            {
                url: "/sale",
                name: "លក់ចេញ",
                slug: "sale",
                icon: "DollarSignIcon",
            },
            {
                url: "/employee",
                name: "បុគ្គលិក",
                slug: "employee",
                icon: "UsersIcon",
            },
            {
                url: "/income",
                name: "ចំណូល",
                slug: "sale",
                icon: "PlusSquareIcon",
            },
            {
                url: "/expense",
                name: "ចំណាយ",
                slug: "sale",
                icon: "MinusSquareIcon",
            },]
    },
    {
        header: "របាយការណ៍",
        icon: "PackageIcon",
        i18n: "Apps",
        items: [
            {
                url: "/report/stock",
                name: "ស្តុក",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/buy",
                name: "ទិញ",
                slug: "email",
                icon: "ChevronsRightIcon",
                i18n: "Email",
            },
            {
                url: "/report/sell",
                name: "លក់",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/profit-lost",
                name: "ចំណេញ-ខាត",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/income",
                name: "ចំណូល",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/expense",
                name: "ចំណាយ",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/best-seller",
                name: "ទំនិញលក់ដាច់",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
        ]
    },
    {
        header: "បិទបញ្ជី",
        icon: "PackageIcon",
        i18n: "Apps",
        items: [
            {
                url: "/report/close-sell",
                name: "លក់",
                slug: "email",
                icon: "ChevronsRightIcon",
                i18n: "Email",
            },
            {
                url: "/report/close-service",
                name: "ថ្លៃឈ្នួល",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/close-income",
                name: "ចំណូល",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },
            {
                url: "/report/close-all",
                name: "សរុប",
                slug: "chat",
                icon: "ChevronsRightIcon",
            },]
    },
    {
        header: "អ្នកប្រើប្រាស់",
        icon: "UserIcon",
        i18n: "Apps",
        items: [
            {
                url: "/user",
                name: "អ្នកប្រើប្រាស់",
                slug: "user",
                icon: "UserIcon",
            }
            ]
    }
]
