import { RouterHistory as VueRouterHistory } from "vue-router"
import { RouteConfig } from "@/app/domain/protocols/route-config"
import { RouteHistory } from "@/app/domain/protocols/route-history"

export class VueRouterAdapter {
  static _instance: VueRouterAdapter
  private _pages: Array<RouteConfig> = []
  private _history = {} as unknown as RouteHistory

  private constructor() {}

  get pages() {
    return this._pages
  }

  static instance(): VueRouterAdapter {
    if (!this._instance) {
      this._instance = new VueRouterAdapter()
    }

    return this._instance
  }

  public createRoute(...args: RouteConfig[]) {
    this._pages.push(...args)
  }

  public createHistory(history: VueRouterHistory) {
    const travels = (location: string, to: string,) => {
      this._history.travels.push({ location, to, timestamps: (new Date).getTime() })
    }

    this._history.location = history.location

    this._history.push = (to: string, data?: any): void => {
      travels(this._history.location, to)

      history.push(to, data)
    }

    this._history.replace = (to: string, data?: any): void => {
      travels(this._history.location, to)

      history.replace(to, data)
    }

    this._history.go = (travel: number): void => {
      const oldLocation = this._history.location

      history.go(travel)

      const newLocation = this._history.location

      travels(oldLocation, newLocation)
    }
  }
}
