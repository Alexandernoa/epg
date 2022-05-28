import store from "../../index"
import { isEPG } from "../selectors"
import { actions } from "../reducer"

export const fetchEPG = async () => {
  const state = store.getState()
  if (isEPG(state)) {
    return
  }

  const request = await fetch(`${process.env.BASE_DOMAIN}/epg`)
  const result = await request.json()

  store.dispatch(actions.setEPG(result))
}
