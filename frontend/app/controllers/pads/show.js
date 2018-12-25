import Controller from '@ember/controller';
import { computed } from '@ember/object'
import { later } from '@ember/runloop';

export default Controller.extend({
  init() {
    this._super(...arguments)
    this.set('supportedLanguages', ['java', 'javascript', 'python', 'ruby'])
  },
  showProgress: computed('result', function () {
    let result = this.get('result');
    let status = result != null ? result.get('status') : "";
    if (status == 'in_queue'
      || status == 'in_progress') {
      return true;
    } else {
      return false;
    }
  }),
  poll() {
    let result = this.get('result');
    later(() => {
      result.reload().then((model) => {
        this.notifyPropertyChange('result');
        if (model.status == 'in_queue' || model.status == 'in_progress') {
          this.poll();
        }
      })
    }, 1000);
  },
  submitText: computed('result', function () {
    let result = this.get('result');
    let status = result != null ? result.get('status') : "";
    if (status == 'in_queue') {
      return "Submitting"
    } else if (status == 'in_progress') {
      return "In Progress"
    } else {
      return "Submit";
    }
  }),
  actions: {
    submitPad(pad) {
      console.log('submitting');
      pad.submit().then((result) => {
        this.set('result', result);
        this.poll();
      });
    }
  }
});
