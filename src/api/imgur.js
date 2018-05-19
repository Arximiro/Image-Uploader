import qs from 'qs';

const CLIENT_ID = '886445a9c19beff';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  }
};

// qs is a small library that will create a querystring out of whatever is passed in.
