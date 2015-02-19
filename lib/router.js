

Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', { path: '/'});
	this.route('play', { 
		path: '/game/:id',
		data: function() {
			if(this.ready()){
				var game = Games.findOne({ _id: this.params.id });

				if (game) {
					game.yourTurn = game.currentTurn[0] === Meteor.userId()

					var myId = Meteor.userId();
					game.user = game.players[myId];
					game.user.username = Meteor.users.findOne(myId).username;				
					game.user.hand = game.user.hand.slice(6);

					var otherId = game.currentTurn[game.yourTurn ? 1 : 0];
					game.otherPlayer = {
						username: Meteor.users.findOne(otherId).username,
						score: game.players[otherId].score,
						hand: game.players[otherId].hand.slice(6)
					};

					game.decisionCard = game.deck[0];
				}
				

				return game;
			} else{
		     this.render('loading');
		    }
		}
	})
}); 