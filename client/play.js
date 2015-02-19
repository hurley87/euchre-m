Template.gameStart.events({
	'click .pickcard': function (evt, template) {
        var game = Games.findOne({ _id: template.data._id });
        game.trump = template.data.decisionCard.suit;

        console.log(game.trump);
    }

});	