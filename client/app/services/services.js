import angular from 'angular';
import TalQuoteService from './TalQuoteService';

const TalServicesModule = angular.module('talServices', [])
  .service('TalQuoteService', TalQuoteService);

export default TalServicesModule;

