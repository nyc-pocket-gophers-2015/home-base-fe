/*global HomeFe, Backbone*/

HomeFe.Collections = HomeFe.Collections || {};

(function () {
    'use strict';

    HomeFe.Collections.Reward = Backbone.Collection.extend({

        model: HomeFe.Models.Reward

    });

})();
