import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

import MessageType from './models';
import messageEvTemplate from './message-event.template.html'

//
// Message Event View
//

let MessageEventPropsView = Backbone.View.extend({
   
    el : $('#props-panel'),   

    template : _.template(messageEvTemplate),

    events: {  
        'input input': 'nameChanged',
    },

    initialize: function(options) {
        if (! options.model) throw "Model not set.";
        _.bindAll(this, "render", "nameChanged");
        this.listenTo(this.model, 'change', this.render);
        Backbone.Events.on('wl-shape-selected', function() {
            console.log("listened");
        })
    },

    nameChanged: function(){
        this.model.set(MessageType.NAME, this.input().val());
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    input : function() {
        return this.$('input');
    }
});

export default MessageEventPropsView