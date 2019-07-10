import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

import taskPropsTemplate from './task-props.template.html'
import ModalView from '../modal/modal.view'
import TaskSelectorView from './task-selector.view';

//
// Task Props View
//

let TaskPropsView = Backbone.View.extend({
   
    el : $('#props-panel'),   

    template : _.template(taskPropsTemplate, {
        interpolate: /\{\{(.+?)\}\}/g
      }),

    events: {  
        'click button': 'selectTaskClicked',
    },

    initialize: function(options) {
        if (! options.model) throw "Model not set.";
        _.bindAll(this, "render");
        this.listenTo(this.model, 'change', this.render);
        let shapeChangeHandler = function() {
            this.remove();
        }.bind(this) 
        Backbone.Events.on('wl-shape-selected', shapeChangeHandler);
    },

    selectTaskClicked: function(){
        let modal = new ModalView({'view' : new TaskSelectorView()});
        modal.render()
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});

export default TaskPropsView