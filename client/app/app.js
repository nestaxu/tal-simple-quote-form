import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components'
import TalServicesModule from './services/services'

angular.module('app', [
  'talStyleGuideComponents',
  TalServicesModule.name,
  ComponentsModule.name
])
  .component('app', appComponent);
