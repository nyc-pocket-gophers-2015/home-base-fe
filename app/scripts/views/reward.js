/*global HomeFe, Backbone, JST*/

HomeFe.Views = HomeFe.Views || {};

(function () {
    'use strict';

    HomeFe.Views.Reward = Backbone.View.extend({

        template: JST['app/scripts/templates/reward.ejs'],

        tagName: 'div',

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
