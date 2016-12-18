import angular from 'angular';
import talSimpleQuoteFormComponent from './tal-simple-quote-form.component';

const TalSimpleQuoteFormModule = angular.module('talSimpleQuoteForm', [])
    .component('talSimpleQuoteForm', talSimpleQuoteFormComponent);

export default TalSimpleQuoteFormModule;
