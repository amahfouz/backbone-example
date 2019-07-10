import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';
import 'bootstrap'

import modalTemplate from './modal.template.html'

let ModalView = Backbone.View.extend({
    
    template : _.template(modalTemplate),

    initialize : function(options) {
        if (! options.view) throw "View not provided.";
        this.options = options
        this.setElement($.parseHTML(this.template()));
    },

    render : function() {
        $('body').append(this.el);
        $('.modal-body').append(this.options.view.render())
        this.$el.modal();
    }
});

export default ModalView