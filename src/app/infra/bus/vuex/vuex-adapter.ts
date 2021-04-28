import Vuex from "vuex"
import { EventBus } from "@/app/domain/protocols/event-bus"
import { LifeCycle } from "@/app/data/protocols/life-cycle"

export class VuexAdapter implements EventBus, LifeCycle {
  private readonly library = new Vuex.Store({})
  private readonly state = {}

  emit({ action, payload }: { action: string, payload: any }) {
    this.library.dispatch(action, payload)
  }

  commit({ muttation, payload }: { muttation: string, payload: any }) {
    this.library.commit(muttation, payload)
  }

  create() {
    const state = Object.assign({}, this.state, this.library.state)

    Object.assign(this.state, state)
  }

  destroy() {

  }
}
