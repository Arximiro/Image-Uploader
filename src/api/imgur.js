import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '886445a9c19beff';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID, // client_id is used so qs can pop them right into the Qstring
      response_type: 'token' // response_type is used so qs can pop them right into the Qstring
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    // resolves to: https://api.imgur.com/oauth2/authorize?client_id=886445a9c19beff&response_type=token
    // window.location causes the user's browser to navigate to the URL specified
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(img => {
      const formData = new FormData();
      formData.append('image', img); // takes the img file and attaches it to the formData value of image, which the API expects

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });

    return Promise.all(promises);
  }
};

// This file is a helper file that contains all the connectivity with the imgur API.
// qs is a small library that will create a querystring out of whatever is passed in.
