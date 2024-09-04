export function GET_TASKS_REQUEST() {
  return {
    type: '@tasks/GET_TASKS_REQUEST',
  }
}

export function GET_TASKS_SUCCESS(payload) {
  return {
    type: '@tasks/GET_TASKS_SUCCESS',
    payload
  }
}

export function ADD_TASKS_REQUEST() {
  return {
    type: '@tasks/ADD_TASKS_REQUEST',
  }
}

export function ADD_TASKS_SUCCESS(payload) {
  return {
    type: '@tasks/ADD_TASKS_SUCCESS',
    payload
  }
}

export function ADD_TASKS_FAILURE(payload) {
  return {
    type: '@tasks/ADD_TASKS_FAILURE',
    payload
  }
}

export function CHANGE_MAIN_COLUMN_STATE(){
  return {
    type: '@tasks/CHANGE_MAIN_COLUMN_STATE'
  }
}

export function CHANGE_CURR_TAB_TO(payload) {
  return {
    type: '@tasks/CHANGE_CURR_TAB_TO',
    payload
  }
}