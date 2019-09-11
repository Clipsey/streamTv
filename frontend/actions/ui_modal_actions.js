// import { }
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';

export const toggleLoginModal = (status, formType) => {
  return {
    type: TOGGLE_LOGIN_MODAL,
    status,
    formType
  }
};
