import angular from 'angular';
import TalSimpleQuoteFormModule from './tal-simple-quote-form/tal-simple-quote-form';

const ComponentsModule = angular.module('components', [
  TalSimpleQuoteFormModule.name
]);

export default ComponentsModule;
