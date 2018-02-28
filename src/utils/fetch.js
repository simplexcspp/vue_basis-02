import baseUrl from './env'
import 'whatwg-fetch'

export default (type = 'GET', url = '', data = {}) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase();
    url = baseUrl + url;
    let requestObj = {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    if (type === 'GET') { // get请求url拼接
      let paramStr = '';
      Object.keys(data).forEach(key => {
        if (data[key] || data[key] === 0) {
          paramStr += key + '=' + data[key] + '&'
        }
      })
      if (paramStr !== '') {
        paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'));
        url = url + '?' + paramStr;
      }
    } else if (type === 'POST') { // post请求参数传递
      Object.defineProperty(requestObj, 'body', {
        value: JSON.stringify(data)
      })
    } else {
      reject('error request type！');
    }

    fetch(url, requestObj).then(res => {
      if (res.status === 401) {
        // ...
      } else if (res.status === 400) {
        // ...
      } else if (res.status === 500) {
        // ...
      } else if (res.status === 302) {
        // ...
      } else if (res.status === 304) {
        // ...
      } else {
        return res.json();
      }
    }).then(data => {
      if (data) {
        // ...
        resolve(data);
      } else {
        reject('data is empty！');
      }
    }).catch(err => reject(err))
  })
}