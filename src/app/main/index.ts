import { createApp, Component, Plugin } from "vue"
import routing from "@/app/main/routing"
import App from "@/app/presentation/pages/app.vue"

const application = createApp(App as unknown as Component)
application.use(routing.router as unknown as Plugin)
application.mount("#app")
