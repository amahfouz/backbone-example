import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

import messageEvTemplate from './message-event-props.template.html'

//
// Message Event View
//

let MessageEventPropsView = Backbone.View.extend({
   
    el : $('#props-panel'),   

    template : _.template(messageEvTemplate, {
        interpolate: /\{\{(.+?)\}\}/g
      }),

    events: {  
        'input input': 'nameChanged',
    },

    initialize: function(options) {
        if (! options.model) throw "Model not set.";
        _.bindAll(this, 'render', 'nameChanged');
        this.listenTo(this.model, 'change', this.render);
        let shapeChangeHandler = function() {
            this.remove();
        }.bind(this) 
        Backbone.Events.on('wl-shape-selected', shapeChangeHandler);
    },

    nameChanged: function(){
        this.model.set('messageName', this.input().val());
    },

    render: function() {
        console.log(this.model.toJSON())
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    input : function() {
        return this.$('input');
    }
});

export default MessageEventPropsView