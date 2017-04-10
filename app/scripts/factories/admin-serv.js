angular
  .module('homer')
  .factory('AdminServ', AdminServ);

function AdminServ($http, $q, cloudinary, BASE_URL_CONSTANT) {
  return {
    login: function(user) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'web/admin-login',
        headers: { 'Content-Type': 'application/json' },
        data: user
      });
    },
    getCategory: function() {
      return $http.get(BASE_URL_CONSTANT + 'admin/get-category');
    },
    getVendor: function() {
      return $http.get(BASE_URL_CONSTANT + 'admin/get-vendor');
    },
    getSize: function() {
      return $http.get(BASE_URL_CONSTANT + 'admin/get-size');
    },
    getColor: function() {
      return $http.get(BASE_URL_CONSTANT + 'admin/get-color');
    },
    getSizeGroup: function() {
      return $http.get(BASE_URL_CONSTANT + 'admin/get-sizegroup');
    },
    addVendorSubmit: function(vendor) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-vendor',
        headers: { 'Content-Type': 'application/json' },
        data: vendor
      });
    },
    addColor: function(name) {
      bean ={};
      bean.name = name;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-color',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    addSizeGroup: function(name) {
      bean ={};
      bean.name = name;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-sizegroup',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    addSize: function(sizeDto) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-size',
        headers: { 'Content-Type': 'application/json' },
        data: sizeDto
      });
    },
    getProducts: function(start, limit) {
      var bean = {};
      bean.start = start;
      bean.limit = limit;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-product-lise',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    getProductsInventory: function(id) {
      var bean = {};
      bean.productId = id;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-product-inventory',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    updateProduct: function(product) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/update-product-details',
        headers: { 'Content-Type': 'application/json' },
        data: product
      });
    },
    updateProductInventory: function(productBean) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/update-product-inventory',
        headers: { 'Content-Type': 'application/json' },
        data: productBean
      });
    },
    uploadImage: function(productBean) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-product-image',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: productBean
      });
    },
    getSpecifications: function(categoryId) {
      var bean = {};
      bean.categoryId = categoryId;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-specifications',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    getSpecificationsValue: function(categoryId) {
      var bean = {};
      bean.categoryId = categoryId;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-specification-value',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    saveProduct: function(productBean) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-product',
        headers: { 'Content-Type': 'application/json' },
        data: productBean
      });
    },
    saveCategory: function(categoryDto) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-category',
        headers: { 'Content-Type': 'application/json' },
        data: categoryDto
      });
    },
    addSpecification: function(specificationDto) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-specification',
        headers: { 'Content-Type': 'application/json' },
        data: specificationDto
      });
    },
    addSpecificationValue: function(specificationDto) {
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-specification-value',
        headers: { 'Content-Type': 'application/json' },
        data: specificationDto
      });
    },
    uploadToCloudinary: function(file) {
      var q = $q.defer();
      cloudinary.upload(file, { upload_preset: 'gpucdhrn' })
        .then(function(resp) {
          q.resolve(resp.data);
        }, function(resp) {
          console.log('Error');
          console.log(resp);
          q.reject(resp);
        });
      return q.promise;
    },
    scrapListURL: function(url) {
      var bean = {};
      bean.status = url;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/load-temp-product-list',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    loadTempProductLinks: function() {
      var bean = {};
      bean.status = 'url';
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-temp-product-list',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    scrapProduct: function(products) {
      var bean = {};
      bean.statusBeans = products;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/save-temp-products',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    },
    loadCrawledProducts: function(start, limit) {
      var bean = {};
      bean.start = start;
      bean.limit = limit;
      return $http({
        method: 'POST',
        url: BASE_URL_CONSTANT + 'admin/get-temp-product-lise',
        headers: { 'Content-Type': 'application/json' },
        data: bean
      });
    }
  };
}