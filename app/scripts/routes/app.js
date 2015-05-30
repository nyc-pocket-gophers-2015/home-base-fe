/*global HomeFe, Backbone*/

HomeFe.Routers = HomeFe.Routers || {};

(function () {
    'use strict';

    HomeFe.Routers.App = Backbone.Router.extend({
    	routes: {
                    "/":  "index",
                    
                },

                initialize: function(){
                    this.container = $('#container');
                },

                index: function(){
                    $('#container').append(tasklistView.el)


                

                }


    });

})();
