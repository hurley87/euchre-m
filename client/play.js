Template.gameStart.events({
	'click .pickcard': function (evt, template) {
		evt.preventDefault();
        var game = Games.findOne({ _id: template.data._id });
        var newTrump = template.data.decisionCard.suit;

       	Games.update(game._id, { $set: { trump : newTrump, currentTurn: game.currentTurn.reverse() }  } );
    }
});	

Template.gameStart.helpers({
	game: function() {
		var game = Games.findOne({ _id: template.data._id });
		console.log("first" + game);
		return game;
	}
});

Template.status.events({
	'click .dgame': function(evt, template) {
		var game = Games.findOne({ _id: template.data._id });
		Games.remove(game._id);
	}
});


