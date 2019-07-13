import $ from 'jquery';
import Backbone from 'backbone';
import * as _ from 'underscore';
import SingleIoMappingView from './single-io-mapping.view';

import ioMappingViewTemplate from 'io-mapping.template.html'

let IoMappingView = Backbone.View.extend({

    template : _.template(ioMappingViewTemplate, {
        interpolate: /\{\{(.+?)\}\}/g
    }),

    initialize : function (){
        _.bindAll(this, 'render');
        this.model.bind('reset', this.render);
        this.model.bind('add', this.render);
        this.model.bind('remove', this.render);
    },

    render : function() {
        let tbody = $('tbody')
        tbody.empty()
        if (this.model.length == 0) {
            tbody.html("Nothing")
        } 
        else this.model.forEach(mapping => {
            let view = new SingleIoMappingView({'model': mapping});
            tbody.append(view.render().el);
        });

        return this
    }
});

export default IoMappingView