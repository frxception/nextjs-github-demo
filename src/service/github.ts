import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET
  }
};

const axiosGetCancellable = async(url) => {
  const cancelConfig = {
    request: null,
    cancelToken: null
  };
  if (cancelConfig.request) {
    cancelConfig.request.cancel('canceled');
  }

  cancelConfig.request = axios.CancelToken.source();
  cancelConfig.cancelToken = cancelConfig.request.token;

  try {
    const res = await axios.get(url, cancelConfig);
    return res;
  } catch (error) {
    if (error.message !== 'canceled') {
      throw error;
    }
  }
}

const searchRepos = async(searchText: string, language: any) => {
  const query = language ? `${searchText}+language:${language}` : searchText;

  if (isServer()) {
    return axios.get(`search/repositories?q=${query}&sort=stars&order=desc`, axiosConfig
    );
  }

  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`);
}

function getRepo(id) {
  return axios.get(`repositories/${id}`, axiosConfig);
}

function getProfile(username) {
  return axios.get(`users/${username}`, axiosConfig);
}

function isServer() {
  return typeof window === 'undefined';
}

export { searchRepos, getRepo, getProfile };
