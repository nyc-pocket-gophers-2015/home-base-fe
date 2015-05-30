/*global HomeFe, Backbone, JST*/

HomeFe.Views = HomeFe.Views || {};

(function() {
    'use strict';

    HomeFe.Views.Tasks = Backbone.View.extend({

        el: '#tasks',

        template: JST['app/scripts/templates/tasks.ejs'],

        tagName: 'ul',

        id: '',

        className: 'tasklist',

        events: {},

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template());

            this.collection.each(function(task) {

                var choreView = new TaskView({
                    model: task
                });

                this.$el.append(choreView.render());

            }, this);

            return this;
        }

    });

})();

    var tasklistView = new HomeFe.Views.Tasks({collection: tasklist});
    tasklist.fetch().done(function(){
                tasklistView.render();
            });


