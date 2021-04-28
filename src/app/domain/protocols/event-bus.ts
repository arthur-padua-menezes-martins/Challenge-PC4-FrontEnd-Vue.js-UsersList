export interface EventBus {
  emit(...input: any): any
  commit(...input: any): any
}
