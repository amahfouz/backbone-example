import Backbone from 'backbone';

import MessageEventPropsModel from './message-event/message-event.model';
import MessageEventPropsView from './message-event/message-event-props.view'

import TaskPropsModel from './task/task-props.model'
import TaskPropsView from './task/task-props.view'

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
        
        Backbone.Events.trigger('wl-shape-selected');
        console.log(event);

        let view, model;

        if (event.currentTarget.id == 'message-node') {
            model = new MessageEventPropsModel({'messageName' : 'Success'});
            view = new MessageEventPropsView( { 'model' : model } )
        }
        else if (event.currentTarget.id == 'task-node') {
            model = new TaskPropsModel({'taskName' : '(No Selection)'});
            view = new TaskPropsView( { 'model' : model } );
        }
        
        this.el.append(view.render().el)
    }
});

export default ControlPanel;