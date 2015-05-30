/*global HomeFe, Backbone*/

HomeFe.Models = HomeFe.Models || {};

(function () {
    'use strict';

    HomeFe.Models.Reward = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
