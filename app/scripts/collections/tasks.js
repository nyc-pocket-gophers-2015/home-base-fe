/*global HomeFe, Backbone*/

HomeFe.Collections = HomeFe.Collections || {};

(function () {
    'use strict';

    HomeFe.Collections.Tasks = Backbone.Collection.extend({

        model: HomeFe.Models.Task,
        url: "http://localhost:3000/tasks",
       
        parse:function(data){
        	// console.log(data)
        	return data
        }

    });

})();

// var tasklist = new HomeFe.Collections.Tasks();
//         tasklist.fetch();
//         tasklist.parse();

        // console.log(tasklist.at(0))
        // console.log(tasklist.tasks())
        // console.log(tasklist.get(1))
        
