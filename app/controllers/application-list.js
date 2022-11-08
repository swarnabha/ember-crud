import Controller from '@ember/controller';

export default Controller.extend({


    actions: {
      destroyApplication(destroyId) {
        if (confirm("Are you sure want to delete this record ? ") == true) {
          let application = this.store.peekRecord("application", destroyId)
          application.destroyRecord()
        } 
      }
    }
  });
