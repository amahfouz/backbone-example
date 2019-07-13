import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

import messageEvTemplate from './message-event-props.template.html'
import IoMappingView from '../mapping/io-mapping.view';

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
        'click #print': 'print'
    },

    print : function() {
        console.log(this.model)
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
        this.$el.html(this.template(this.model.toJSON()));
        let nestedModel = { 'model' : this.model.get('collection') };
        this.$el.append(new IoMappingView(nestedModel).render().el)
        return this;
    },

    input : function() {
        return this.$('input');
    }
});

export default MessageEventPropsView