import store from "../../index"
import { getProgram } from "../selectors"
import { actions } from "../reducer"

const LIVE_URL = 'program_live_id'

export const fetchProgram = async (id) => {
  const state = store.getState()
  if (getProgram(state, id)) {
    return
  }

  const url = id === LIVE_URL ? LIVE_URL : id

  const request = await fetch(`${process.env.BASE_DOMAIN}/program/${url}`)
  const result = await request.json()

  store.dispatch(actions.setProgram(result))
}
