import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

import MessageType from './models';

let MessageEventPropsView = Backbone.View.extend({
   
    el : $('#message-event-props-view'),   

    events: {  
        'input input': 'nameChanged',
    },

    initialize: function(options) {
        if (! options.model) throw "Model not set.";
        _.bindAll(this, "render", "nameChanged");
        this.listenTo(this.model, 'change', this.render);
    },

    nameChanged: function(){
        this.model.set(MessageType.NAME, this.input().val());
    },

    render: function() {
        this.input().val(this.model.get(MessageType.NAME))
    },

    input : function() {
        return this.$('input');
    }
});



export default MessageEventPropsView;