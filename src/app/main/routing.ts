import { createRouter, createWebHistory, RouteRecordRaw as VueRouteRecordRaw } from "vue-router"
import { VueRouterAdapter } from "@/app/infra/router/vue-router/vue-router-adapter"
import ListingPage from "@/app/presentation/pages/listing/listing-page.vue"
import OperationPage from "@/app/presentation/pages/operation/operation-page.vue"

const history = createWebHistory()

const vueRouterAdapter = VueRouterAdapter.instance()
vueRouterAdapter.createRoute({ name: "listing", path: "/", component: ListingPage })
vueRouterAdapter.createRoute({ name: "operation", path: "/operation", component: OperationPage })
vueRouterAdapter.createHistory(history)

const router = createRouter({
  history,
  routes: vueRouterAdapter.pages as unknown as VueRouteRecordRaw[]
})

export default {
  router
}
