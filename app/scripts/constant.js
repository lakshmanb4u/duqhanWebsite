angular
  .module('homer')
  .constant('BASE_URL_CONSTANT', 'http://duqhan.us-west-2.elasticbeanstalk.com/') //PRODUCTION
  // .constant('BASE_URL_CONSTANT', 'http://duqhan-backend.us-west-2.elasticbeanstalk.com/')  //TEST 1
  // .constant('BASE_URL_CONSTANT', 'http://192.168.1.100:8084/')  //LOCAL
  // .constant('BASE_URL_CONSTANT', 'http://duqhan-backend-1.us-west-2.elasticbeanstalk.com/')  //TEST 2
  .constant('ITEM_PER_PAGE', 200)
  .constant('AUTH_TOKEN', null)
  .constant('SUPPORTING_DATE_FORMATS_CONSTANT', [
    'dd-MMMM-yyyy',
    'YYYY-MM-DD',
    'dd.MM.yyyy',
    'shortDate',
    'dddd, MMMM Do YYYY, h:mm:ss a',
    'DD MMM, YYYY hh:mm A',
    'ddd, MMM D YYYY',
    'YYYY-MM-DDTHH:mm:ss.SSS'
  ]);