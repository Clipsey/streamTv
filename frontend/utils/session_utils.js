var token = document.getElementsByName('csrf-token')[0].content

export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const fetchUserByName = (username) => {
  let user = {
    username
  }
  return $.ajax({
    url: `/api/users/${username}`,
    method: 'GET',
  })
}

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
}

export const deleteSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};