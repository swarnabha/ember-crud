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
    readApplication() {
      let images = fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json))
    },
    destroyApplication(destroyId) {
      let game = this.get('model').findBy('id', destroyId)
      game.destroyRecord()
    }
  }
});
