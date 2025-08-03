const request = (function () {
  const _request = (method, url, payload, cb) => {
    const xhr = new XMLHttpRequest();
    // var payloadString = JSON.stringify(payload);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(null, JSON.parse(xhr.responseText));
        } else {
          cb(true);
        }
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 
    if (payload) {
      xhr.send(JSON.stringify(payload));
    } else {
      xhr.send();
    }
  
  };

  const get = function (url, cb) { _request('GET', url, null, cb); }
  const post = function (url, payload, cb) { _request('POST', url, payload, cb); }
  const put = function (url, payload, cb) { _request('PUT', url, payload, cb); }
  const del = function (url, cb) { _request('DELETE', url, null, cb); }

  return  {
     get,
     post,
     put,
     del
  };
})();
