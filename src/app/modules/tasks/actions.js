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