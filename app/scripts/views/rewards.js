/*global HomeFe, Backbone, JST*/

HomeFe.Views = HomeFe.Views || {};

(function () {
    'use strict';

    HomeFe.Views.Rewards = Backbone.View.extend({

        template: JST['app/scripts/templates/rewards.ejs'],

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
