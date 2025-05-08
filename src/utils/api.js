const BASE_URL = 'photoshare-grh3b6atckgxbgbc.uksouth-01.azurewebsites.net';

export const login = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

export const register = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

export const getMedia = async (token) => {
  const res = await fetch(`${BASE_URL}/media`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const uploadMedia = async (formData, token) => {
  const res = await fetch(`${BASE_URL}/media/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return res.json();
};


export const likeMedia = async (id, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/like`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getLikes = async (id, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/likes`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("getLikes response", res);
  return res.json();
};

export const rateMedia = async (id, rating, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/rate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rating }),
  });
  return res.json();
};

export const getRatings = async (id, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/ratings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const commentOnMedia = async (id, comment, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  });
  return res.json();
};

export const getComments = async (id, token) => {
  const res = await fetch(`${BASE_URL}/media/${id}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};