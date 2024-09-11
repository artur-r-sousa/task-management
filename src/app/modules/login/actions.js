export function USER_LOGIN_REQUEST(payload) {
  return {
    type: '@login/USER_LOGIN_REQUEST',
    payload: payload
  }
}

export function USER_LOGIN_SUCCESS() {
  return {
    type: '@login/USER_LOGIN_SUCCESS'
  }
}

export function USER_LOGIN_FAILURE(payload) {
  return {
    type: '@login/USER_LOGIN_FAILURE',
    payload
  }
}

export function USER_CREATE_LOGIN_REQUEST(payload) {
  return {
    type: '@login/USER_CREATE_LOGIN_REQUEST',
    payload: payload
  }
}

export function USER_CREATE_LOGIN_SUCCESS(payload) {
  return {
    type: '@login/USER_CREATE_LOGIN_SUCCESS',
    payload
  }
}

export function USER_CREATE_LOGIN_FAILURE(payload) {
  return {
    type: '@login/USER_CREATE_LOGIN_FAILURE',
    payload
  }
}

