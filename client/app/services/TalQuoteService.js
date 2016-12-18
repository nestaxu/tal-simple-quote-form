class TalQuoteService {

  constructor($http, $q) {
    'ngInject';
    
    this.$http = $http;
    this.$q = $q;
  }

  getQuote(personalDetails) {
    // TODO Call real api
    /*return this.$http.post('/get-quote', personalDetails).then(response => {
    }, error => {
    });*/
    return this.$q.when(123.54);
  }

}

export default TalQuoteService;