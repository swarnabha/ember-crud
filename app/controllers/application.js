import Controller from '@ember/controller';

export default Controller.extend({
  

  actions: {
    createApplication() {

      let newRecord = this.store.createRecord('application', {
        name: this.get('name'),
        age: this.get('age'),
        phone: this.get('phone')

      })

      newRecord.save()
    },
    // readApplication() {
    //   // get the input value from the .hbs template
    //   let id = this.get('ApplicationId')
    //   // find the record (cheating and using id 1 from my mocked server)
    //   this.store.findRecord('Application', 1).then((game) => {
    //     alert(game.get('id') + ' ' +game.get('name') + ' ' +game.get('age') + ' ' + game.get('phone'))
    //   })
    // },
    destroyApplication(destroyId) {
      let game = this.get('model').findBy('id', destroyId)
      game.destroyRecord()
    }
  }
});
