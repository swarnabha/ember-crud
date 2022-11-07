import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        // let { data } = this.store.findRecord('application', params.id)
        // console.log("result>>>>>>>>>>>>>>.",data)
        // return this.store.findRecord('application', params.id)
        
        // this.store.findRecord('application', params.id)
        // .then(function(app) {
        //     console.log("app>>",app)
        // });

        return this.store.findRecord("application", params.id);
    },
});
