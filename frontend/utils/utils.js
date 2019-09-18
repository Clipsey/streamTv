var token = document.getElementsByName('csrf-token')[0].content

export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const fetchUserByName = (username) => {
  return $.ajax({
    url: `/api/users/${username}`,
    method: 'GET',
  })
}

export const fetchUserById = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET',
    data: { id_get: true }
  })
}

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
}

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const postFollow = (follow) => {
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { follow }
  })
}

export const getFollows = (user) => {
  return $.ajax({
    url: `/api/follows/${user.id}`,
    method: 'GET',
    data: { user }
  })
}

export const deleteFollow = (follow) => {
  return $.ajax({
    url: '/api/follows/0',
    method: 'DELETE',
    data: { follow }
  })
}