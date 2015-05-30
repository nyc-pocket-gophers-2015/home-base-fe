/*global HomeFe, Backbone*/

HomeFe.Models = HomeFe.Models || {};

(function () {
    'use strict';

    HomeFe.Models.Task = Backbone.Model.extend({

         url: "http://localhost:3000/tasks",

        initialize: function() {
            console.log("creating a new Backbone task model")
        },

        defaults: {
            title:"do something",
            point_value: 10
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();

    var tasklist = new HomeFe.Models.Task();
        tasklist.fetch();
        console.log(tasklist)
