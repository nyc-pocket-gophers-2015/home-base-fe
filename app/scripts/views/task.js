/*global HomeFe, Backbone, JST*/

HomeFe.Views = HomeFe.Views || {};

(function () {
    'use strict';

    HomeFe.Views.Task = Backbone.View.extend({

        template: JST['app/scripts/templates/task.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
