import Backbone from 'backbone';
import * as _ from 'underscore';

import singleIoMappingTemplate from './single-io-mapping.template.html'

let SingleIoMappingView = Backbone.View.extend({

    tagName : 'tr',

    events : {
        'click button' : 'deleteRow'
    },

    template : _.template(singleIoMappingTemplate, {
        interpolate: /\{\{(.+?)\}\}/g
      }),

    deleteRow : function() {
        this.model.destroy();
    },  

    render : function() {
        this.$el.html(this.template(this.model.toJSON()))
        return this
    }
});

export default SingleIoMappingView