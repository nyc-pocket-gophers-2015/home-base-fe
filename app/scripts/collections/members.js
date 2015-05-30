/*global HomeFe, Backbone*/

HomeFe.Collections = HomeFe.Collections || {};

(function () {
    'use strict';

    HomeFe.Collections.Members = Backbone.Collection.extend({

        model: HomeFe.Models.Member

    });

})();
