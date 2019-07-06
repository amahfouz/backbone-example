import Backbone from 'backbone';

let MessageType = Backbone.Model.extend({
    initialize: function() {
        this.listenTo(this, 'change', this.attrsChanged);
    },

    attrsChanged : function() {
        console.log('changed=' + this.get(MessageType.NAME))
    }
},
{
    NAME : 'message-name'
});

export default MessageType;