class TalSimpleQuoteFormController {
  
  constructor(TalQuoteService) {
    'ngInject';
    
    this.TalQuoteService = TalQuoteService;
  }
  
  $onInit() {
    // TODO: call backend endpoint for initialisation
    this.genderOptions = [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}];
  }

  getQuote() {
    this.getQuoteClicked = true;
    // TODO: refactor
    if (!this.dateOfBirth || !this.gender || !this.annualIncome) {
      return;
    }
    
    this.TalQuoteService.getQuote({
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      annualIncome: this.annualIncome
    }).then(quote => {
      this.quote = quote;
    }, error => {
      // TODO
    });
  }
  
}

export default TalSimpleQuoteFormController;
