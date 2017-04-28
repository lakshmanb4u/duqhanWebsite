angular.module('homer')
  .factory('HttpInterceptor', HttpInterceptor);

function HttpInterceptor($q, $log, AUTH_TOKEN, BASE_URL_CONSTANT, $localStorage, $injector) {
  return {
    request: function(config) {
      if (!AUTH_TOKEN) {
        AUTH_TOKEN = $localStorage.token;
      }
      if (config.url.indexOf(BASE_URL_CONSTANT + 'admin') === 0 && AUTH_TOKEN) {
        config.headers['X-Auth-Token'] = AUTH_TOKEN;
      }
      return config;
    },
    response: function(res) {
      if (res.config.url.indexOf(BASE_URL_CONSTANT + 'admin-login') === 0 && res.data) {
        AUTH_TOKEN = res.data.aouthToken;
        $localStorage.token = res.data.aouthToken;
        $localStorage.email = res.data.status;
      }
      return res;
    },
    requestError: function(err) {
      // BusyLoader.hide();
      $log.log('Request Error logging via interceptor');
      return err;
    },
    responseError: function(err) {
      // BusyLoader.hide();
      $log.log('Response error via interceptor');
      if (err.status === 401) {
        $injector.get('$state').transitionTo('login');
        // $state.go('login');
      }
      return $q.reject(err);
    }
  };

}
