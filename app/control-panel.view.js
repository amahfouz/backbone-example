import Backbone from 'backbone';

import MessageType from './models';
import MessageEventPropsView from './message-event-props.view'


//
// Control Panel
//

let ControlPanel = Backbone.View.extend({

    el : "#controller",

    events: {  
        'click #message-node': 'shapeSelected',
        'click #task-node': 'shapeSelected'
    },

    shapeSelected : function(event) {
        
        console.log(event);

        let model = new MessageType({'messageName' : 'Success'});
        let view = new MessageEventPropsView( { 'model' : model } )
        
        this.el.append(view.render().el)

        Backbone.Events.trigger('wl-shape-selected');
    }
});

export default ControlPanel;