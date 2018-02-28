import baseUrl from './env'
import $ from 'jquery'

export default (type = 'GET', url = '', data = {}) => {
  return new Promise((resolve, reject) => {
    type = type.toLowerCase();
    url = baseUrl + url;
    $.ajax({
      type: type,
      url: url,
      data: data,
      dataType: 'json',
      success: function (res) {
        // ...
        resolve(res);
      },
      error: function (err) {
        // ...
        reject(err);
      }
    })
  })
}