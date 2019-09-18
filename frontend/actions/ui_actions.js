export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const TOGGLE_USER_DROPDOWN = 'TOGGLE_USER_DROPDOWN';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const toggleLoginModal = (status, formType) => {
  return {
    type: TOGGLE_LOGIN_MODAL,
    status,
    formType
  }
};

export const toggleUserDrop = (status) => {
  return {
    type: TOGGLE_USER_DROPDOWN,
    status
  }
}

export const receiveChannel = (id) => {
  return {
    type: RECEIVE_CHANNEL,
    id
  }
}