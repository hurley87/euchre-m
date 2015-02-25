Template.choosingTrump.events({
	'click .pickcard': function (evt, template) {
		evt.preventDefault();
        $(evt.currentTarget).parent().siblings('.card').addClass('chooseCardToDrop');
        $('.decisionTime').html('<p>Choose a card to drop please.</p>')
       	
    },
    'click .chooseCardToDrop': function(evt, template) {
    	evt.preventDefault();
    	var choosenCard = this;
        var game = Games.findOne({ _id: template.data._id });
        var oldId = game._id
    	var userHand = template.data.user.hand;
    	var indexOfCard = _.indexOf(userHand, choosenCard);
    	var newTrump = template.data.decisionCard.suit;
        var thisUserId = Meteor.userId();
    	userHand[indexOfCard] = template.data.decisionCard;   

        var modifier = { $set: {} };
        modifier.$set['currentTurn'] = game.currentTurn.reverse();
        modifier.$set['trump'] = newTrump;
        modifier.$set['players.'+ thisUserId +'.chest'] = userHand;

    	Games.update(game._id, modifier);
    },
    'click .pass': function(evt, template) {
        var game = Games.findOne({ _id: template.data._id });
        var modifier = { $set: {} };
        modifier.$set['currentTurn'] = game.currentTurn.reverse();
        modifier.$set['std'] = true;

        Games.update(game._id, modifier);
    }
    
});	

Template.choosingTrump.helpers({
	game: function() {
		var game = Games.findOne({ _id: template.data._id });
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