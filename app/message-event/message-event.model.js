import Backbone from 'backbone';

let MessageEventPropsModel = Backbone.Model.extend({
    initialize: function() {
        this.listenTo(this, 'change', this.attrsChanged);
    },

    attrsChanged : function() {
        console.log('changed=' + this.get(MessageEventPropsModel.NAME))
    }
},
{
    NAME : 'messageName'
});

export default MessageEventPropsModel;