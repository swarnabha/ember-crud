import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createApplication() {

      var name = this.get('name')
      var age = this.get('age')
      var phone = this.get('phone')
      var email = this.get('email')

      var flag = 0;

      if(/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)){
        flag = 0;
      }else{
        flag = 1;
        alert('Invalid name given.');
      }

      if(/^\S[0-9]{0,3}$/.test(age)){
        flag = 0;
      }else{
        flag = 1;
        alert('Invalid age given.');
      }

      if(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone)){
        flag = 0;
      }else{
        flag = 1;
        alert('Invalid phone given.');
      }

      
      if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        flag = 0;
      }else{
        flag = 1;
        alert('Invalid email given.');
      }


      if(flag == 0){
        let newRecord = this.store.createRecord('application', {
          name: this.get('name'),
          email: this.get('email'),
          age: this.get('age'),
          phone: this.get('phone')
        })

        newRecord.save().then(()=>{
          alert("Application saved")
        })
      }

    },
  }
});
