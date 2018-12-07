import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pads', function() {
    this.route('show', { path: '/:pad_id' });
  });
});

export default Router;
