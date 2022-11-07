import Controller from '@ember/controller';

export default Controller.extend({


    actions: {
      destroyApplication(destroyId) {
        let application = this.store.peekRecord("application", destroyId)
        console.log("application>>>>>>",application)
        application.destroyRecord()
      }
    }
  });
