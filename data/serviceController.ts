import axios from 'axios';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function genericServiceRestFullCall(
  method: string,
  route: string,
  parameters: object,
  apiVersion = 'v6',
) {
  const baseUrlDotnet = '/adminnetcore/api/admin/' + apiVersion;
  // let baseUrlLegacy = '/api/' + apiVersion + '/admin/';

  /* eslint-disable no-undef */
  const axiosInstance = axios.create({
    baseURL: baseUrlDotnet,
    headers: {
      //Authorization: 'Bearer ' + ppAdminToken,
      'Accept-Language': 'tr;',
    },
  });
  /* eslint-enable no-undef */

  axiosInstance.interceptors.response.use(
    function (response: any) {
      return response;
    },
    function (error: {response: {status: any; data: string}}) {
      // todo : bağlantı kopmuşsa error.response okuyamıyor dolayısıyla hata veriyor buradan popup yapmaya çalış

      if (error.response) {
        let error_message: string;
        let errors: any;
        switch (error.response.status) {
          case 401:
            error_message = 'Giriş yapmalısınız';
            break;
          case 403:
            error_message = 'yetki hatası';
            break;
          case 409:
            // @ts-ignore
            error_message = error.response.data.error_message;
            break;
          case 500:
            // @ts-ignore
            error_message = error.response.data.error_message;
            break;
          case 400:
            error_message = '';
            // @ts-ignore
            errors = error.response.data.errors;
            if (typeof errors !== 'undefined') {
              Object.keys(errors).forEach(function (key) {
                error_message += errors[key][0] + ' ';
              });
            } else if (
              // @ts-ignore

              typeof error.response.data.error_message !== 'undefined'
            ) {
              // @ts-ignore

              error_message = error.response.data.error_message;
            } else if (typeof error.response.data === 'string') {
              error_message = error.response.data;
            } else {
              error_message = 'Bir hata oluştu';
            }

            break;
          default:
            error_message = 'Bir hata oluştu';
            break;
        }
        const fallbackValue40X = {
          data: {
            error_message: error_message,
            result_code: 0,
          },
        };
        return Promise.resolve(fallbackValue40X);
      } else {
        return Promise.reject(error);
      }
    },
  );

  switch (method) {
    case 'GET':
    case 'DELETE': {
      /* Get the api url from parameters */
      let api_url = route;
      if (isEmpty(parameters)) {
        api_url = route;
      } else {
        const parameters_string = getApiUrl(parameters);
        api_url = route + '?' + parameters_string;
      }

      if (method === 'GET') {
        return axiosInstance.get(api_url);
      }

      return axiosInstance.delete(api_url);
    }
    case 'POST':
      return axiosInstance.post(route, parameters);
    case 'PUT':
      return axiosInstance.put(route, parameters);
  }
}
function getApiUrl(parameters: any) {
  let parameters_string = '';
  for (const prop in parameters) {
    // eslint-disable-next-line
        parameters_string += "&" + `${prop}=${parameters[prop]}`;
  }
  return parameters_string.substr(1);
}
export function isEmpty(obj: any) {
  // null and undefined are "empty"
  if (obj === null) {
    return true;
  }

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== 'object') {
    return true;
  }

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}
