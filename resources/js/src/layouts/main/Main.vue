<template>
    <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">

        <v-nav-menu
                :navMenuItems="navMenuItems"
                title="SIQWARE"
                parent=".layout--main"/>

        <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
            <div id="content-overlay"/>

            <!-- Navbar -->
            <template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
                <the-navbar-horizontal
                        :navbarType="navbarType"
                        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]"/>

                <div style="height: 62px" v-if="navbarType === 'static'"></div>

                <h-nav-menu
                        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]"
                        :navMenuItems="navMenuItems"/>
            </template>

            <template v-else>
                <the-navbar-vertical
                        :navbarColor="navbarColor"
                        :class="[
          {'text-white' : isNavbarDark  && !isThemeDark},
          {'text-base'  : !isNavbarDark && isThemeDark}
        ]"/>
            </template>
            <!-- /Navbar -->

            <div class="content-wrapper">

                <div class="router-view">
                    <div class="router-content">

                        <transition :name="routerTransition">

                            <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
                                 class="router-header flex flex-wrap items-center mb-6">
                                <div
                                        class="content-area__heading"
                                        :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                                    <h2 class="mb-1">{{ routeTitle }}</h2>
                                </div>

                                <!-- BREADCRUMB -->
                                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb"
                                               :route="$route" :isRTL="$vs.rtl"/>

                                <!-- DROPDOWN -->
                                <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
                                    <vs-button radius icon="icon-settings" icon-pack="feather"/>

                                    <vs-dropdown-menu class="w-32">
                                        <vs-dropdown-item>
                                            <div @click="$refs.addInvestment.show()" class="flex items-center">
                                                <span>+Investment</span>
                                            </div>
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>

                                </vs-dropdown>

                            </div>
                        </transition>
                        <!--Add investment-->
                        <add-investment ref="addInvestment"/>
                        <!--Alert-->
                        <q-dialog v-model="alert">
                            <q-card>
                                <q-card-section>
                                    <div class="text-h4 text-primary">ជូនដំណឹង</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                    <q-banner class="bg-grey-3">
                                        <div class="text-h6">
                                            សូមបង់ថវិការទៅលើការប្រើប្រាស់កម្មវិធីអោយបានមុនថ្ងៃទី ១៥
                                        </div>
                                        <div class="text-h6 text-danger">
                                            ទឹកប្រាក់ត្រូវបង់ : 15$/ខែ
                                        </div>
                                        <div class="text-h6">
                                            លេខ ABA : 002131353
                                        </div>
                                        <div class="text-h6">
                                            ឈ្មោះ ABA : KUN RATTANA, TUN CHAM ROEUN, NAK VANNA
                                        </div>
                                    </q-banner>
                                </q-card-section>

                                <q-card-actions align="right">
                                    <q-btn flat label="បិទ" color="primary" v-close-popup />
                                </q-card-actions>
                            </q-card>
                        </q-dialog>
                        <div class="content-area__content">

                            <back-to-top bottom="5%" :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'"
                                         visibleoffset="500" v-if="!hideScrollToTop">
                                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top"/>
                            </back-to-top>

                            <transition :name="routerTransition" mode="out-in">
                                <router-view
                                        :key="$route.fullPath"
                                        @changeRouteTitle="changeRouteTitle"
                                        @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)"/>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <the-footer/>
        </div>
    </div>
</template>


<script>
    import BackToTop from 'vue-backtotop'
    import HNavMenu from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue"
    import navMenuItems from "@/layouts/components/vertical-nav-menu/navMenuItems.js"
    import TheNavbarHorizontal from '@/layouts/components/navbar/TheNavbarHorizontal.vue'
    import TheNavbarVertical from '@/layouts/components/navbar/TheNavbarVertical.vue'
    import TheFooter from '@/layouts/components/TheFooter.vue'
    import themeConfig from '@/../themeConfig.js'
    import VNavMenu from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'
    import AddInvestment from "../../views/investment/addInvestment";

    export default {
        components: {
            AddInvestment,
            BackToTop,
            HNavMenu,
            TheFooter,
            TheNavbarHorizontal,
            TheNavbarVertical,
            VNavMenu
        },
        data() {
            return {
                alert:false,
                footerType: themeConfig.footerType || 'static',
                hideScrollToTop: themeConfig.hideScrollToTop,
                isNavbarDark: false,
                navbarColor: themeConfig.navbarColor || '#fff',
                navbarType: themeConfig.navbarType || 'floating',
                navMenuItems: navMenuItems,
                routerTransition: themeConfig.routerTransition || 'none',
                routeTitle: this.$route.meta.pageTitle,
            }
        },
        watch: {
            "$route"() {
                this.routeTitle = this.$route.meta.pageTitle
            },
            isThemeDark(val) {
                const color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff"
                this.updateNavbarColor(color)
            },
            "$store.state.mainLayoutType"(val) {
                this.setNavMenuVisibility(val)
            }
        },
        computed: {
            bodyOverlay() {
                return this.$store.state.bodyOverlay
            },
            contentAreaClass() {
                if (this.mainLayoutType === "vertical") {
                    if (this.verticalNavMenuWidth == "default") return "content-area-reduced"
                    else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg"
                    else return "content-area-full"
                }
                // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
                else return "content-area-full"
            },
            footerClasses() {
                return {
                    'footer-hidden': this.footerType == 'hidden',
                    'footer-sticky': this.footerType == 'sticky',
                    'footer-static': this.footerType == 'static',
                }
            },
            isAppPage() {
                return this.$route.meta.no_scroll
            },
            isThemeDark() {
                return this.$store.state.theme == 'dark'
            },
            layoutTypeClass() {
                return `main-${this.mainLayoutType}`
            },
            mainLayoutType() {
                return this.$store.state.mainLayoutType
            },
            navbarClasses() {
                return {
                    'navbar-hidden': this.navbarType == 'hidden',
                    'navbar-sticky': this.navbarType == 'sticky',
                    'navbar-static': this.navbarType == 'static',
                    'navbar-floating': this.navbarType == 'floating',
                }
            },
            verticalNavMenuWidth() {
                return this.$store.state.verticalNavMenuWidth
            },
            windowWidth() {
                return this.$store.state.windowWidth
            }
        },
        methods: {
            changeRouteTitle(title) {
                this.routeTitle = title
            },
            updateNavbar(val) {
                if (val == "static") this.updateNavbarColor(this.isThemeDark ? "#10163a" : "#fff")
                this.navbarType = val
            },
            updateNavbarColor(val) {
                this.navbarColor = val
                if (val == "#fff") this.isNavbarDark = false
                else this.isNavbarDark = true
            },
            updateFooter(val) {
                this.footerType = val
            },
            setNavMenuVisibility(layoutType) {
                if ((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === "vertical" && this.windowWidth < 1200)) {
                    this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
                    this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
                } else {
                    this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
                }
            },
            toggleHideScrollToTop(val) {
                this.hideScrollToTop = val
            }
        },
        created: async function () {
            let self = this;
            const color = self.navbarColor == "#fff" && self.isThemeDark ? "#10163a" : self.navbarColor
            self.updateNavbarColor(color);
            self.setNavMenuVisibility(self.$store.state.mainLayoutType);
            //vuex fetch
            self.$vs.loading({
                type: 'material',
            });
            await Promise.all([
                self.$store.dispatch('fetchUnit'),
                self.$store.dispatch('fetchBrand'),
                self.$store.dispatch('fetchCategory'),
                self.$store.dispatch('fetchProduct'),
                self.$store.dispatch('fetchPurchase'),
                self.$store.dispatch('fetchInvoice'),
                self.$store.dispatch('fetchSupplier'),
                self.$store.dispatch('fetchReportStock'),
                self.$store.dispatch('fetchReportBestSeller'),
                self.$store.dispatch('fetchIncome'),
                self.$store.dispatch('fetchExpense'),
                self.$store.dispatch('fetchReportCloseService'),
                self.$store.dispatch('fetchInvestment'),
                self.$store.dispatch('fetchReportClosePayroll'),
                self.$store.dispatch('fetchPayroll'),
                self.$store.dispatch('fetchUser'),
                self.$store.dispatch('fetchEmployee'),
                self.$store.dispatch('fetchIncomeType'),
                self.$store.dispatch('fetchExpenseType'),
                self.$store.dispatch('fetchCustomer'),
                self.$store.dispatch('fetchPurchaseDetail'),
                self.$store.dispatch('fetchUser')
            ]).then(function () {
                self.$vs.loading.close();
            });
            const token = JSON.parse(localStorage.getItem("userInfo"));
            if (token) {
                await self.$store.dispatch('updateUserData',token);
            }
        }
    }

</script>

