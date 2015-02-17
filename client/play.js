Template.gameStart.events({
	'click .pickcard': function (evt, template) {
        // Meteor.call('createGame', template.data._id);


        var game = Games.findOne({ _id: template.data._id });
        game.trump = template.data.decisionCard.suit;

        console.log(game.trump);
    }

});	