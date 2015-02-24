Template.gameStart.events({
	'click .pickcard': function (evt, template) {
		evt.preventDefault();
        $(evt.currentTarget).parent().siblings('.card').addClass('chooseCardToDrop');
        $('.decisionTime').html('<p>Choose a card to drop please.</p>')
       	
    },
    'click .chooseCardToDrop': function(evt, template) {
    	evt.preventDefault();
    	var choosenCard = this;
    	var game = Games.findOne({ _id: template.data._id });
    	var userHand = template.data.user.hand;
    	var indexOfCard = _.indexOf(userHand, choosenCard);
    	var newTrump = template.data.decisionCard.suit;

    	userHand[indexOfCard] = template.data.decisionCard;
 		// set userHand to contain new card
 		
    	Games.update(game._id, { $set: { trump : newTrump, currentTurn: game.currentTurn.reverse()}  } );
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


Template.myHand.events({
	
});