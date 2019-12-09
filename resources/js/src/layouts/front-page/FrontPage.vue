<template>
    <div class="layout--full-page">
        <vs-navbar type="border" v-model="activeItem" class="p-2">
            <vs-navbar-item index="0">
                <vs-dropdown>

                    <a class="flex items-center" href="#">
                        Dropdown hover
                        <i  class="material-icons"> keyboard_arrow_down </i>
                    </a>

                    <vs-dropdown-menu>

                        <vs-dropdown-item>
                            Option 1
                        </vs-dropdown-item>

                        <vs-dropdown-item>
                            Option 2
                        </vs-dropdown-item>

                        <vs-dropdown-item divider>
                            Option 3
                        </vs-dropdown-item>

                    </vs-dropdown-menu>
                </vs-dropdown>
            </vs-navbar-item>

            <vs-navbar-item index="1">
                <a href="#">News</a>
            </vs-navbar-item>

            <vs-navbar-item index="2">
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>
        <div class="content-wrapper">

            <div class="router-view">
                <div class="router-content">

                    <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="router-header flex flex-wrap items-center mb-6">
                        <div
                                class="content-area__heading"
                                :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                            <h2 class="mb-1">{{ routeTitle }}</h2>
                        </div>

                        <!-- BREADCRUMB -->
                        <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" :isRTL="$vs.rtl" />

                        <!-- DROPDOWN -->
                        <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
                            <vs-button radius icon="icon-settings" icon-pack="feather" />

                            <vs-dropdown-menu class="w-32">
                                <vs-dropdown-item>
                                    <div @click="$router.push('/pages/profile').catch(() => {})" class="flex items-center">
                                        <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                        <span>Profile</span>
                                    </div>
                                </vs-dropdown-item>
                                <vs-dropdown-item>
                                    <div @click="$router.push('/apps/todo').catch(() => {})" class="flex items-center">
                                        <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                        <span>Tasks</span>
                                    </div>
                                </vs-dropdown-item>
                                <vs-dropdown-item>
                                    <div @click="$router.push('/apps/email').catch(() => {})" class="flex items-center">
                                        <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                        <span>Inbox</span>
                                    </div>
                                </vs-dropdown-item>
                            </vs-dropdown-menu>

                        </vs-dropdown>

                    </div>

                    <div class="content-area__content">
                        <router-view
                                :key="$route.fullPath"
                                @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
                    </div>
                </div>
            </div>
        </div>
        <footer class="the-footer flex-wrap justify-between">
            <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="www.mcu.edu.kh" target="_blank" rel="nofollow">Mean Chey University</a>, All rights Reserved</span>
        </footer>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                activeItem: 0
            }
        }
    }
</script>