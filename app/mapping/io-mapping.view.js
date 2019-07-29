import Backbone from 'backbone';
import * as _ from 'underscore';
import SingleIoMappingView from './single-io-mapping.view';

let IoMappingView = Backbone.View.extend({

    tagName : 'tbody',

    initialize : function (){
        _.bindAll(this, 'render');
        this.model.bind('reset', this.render);
        this.model.bind('add', this.render);
        this.model.bind('remove', this.render);
    },

    render : function() {
        let tbody = this.$el
        tbody.empty()
        if (this.model.length == 0) {
            tbody.html("Nothing")
        } 
        else this.model.forEach(mapping => {
            let view = new SingleIoMappingView({'model': mapping});
            tbody.append(view.render().el);
        });

        return this
    }
});

export default IoMappingView