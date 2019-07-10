import Backbone from 'backbone';

let TaskSelectorView = Backbone.View.extend({

    render : function() {
        this.$el.html("Heeeeeeey there!")
        return this.el
    }
});

export default TaskSelectorView