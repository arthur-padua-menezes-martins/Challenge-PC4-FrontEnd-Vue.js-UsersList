export interface RouteConfig {
  name: string
  alias?: string
  path: string | RegExp
  props?: boolean | Object | Function
  redirect?: string | Function
  children?: Array<RouteConfig>
  component: Object
  components?: {
    [name: string]: Object
  }
}
