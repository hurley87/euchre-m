GameFactory = {};

GameFactory.createGame = function(playerIds) {
	var deck = createDeck();
	var	players = createPlayers(playerIds);

	GameFactory.dealPlayers(players, deck);	

	return {
		deck: deck,
		players: players,
		currentTurn: playerIds,
		inProgress: true,
		started: new Date(),
		trump: null
	};
};

GameFactory.dealPlayers = function (players, deck) {
    for (var i = 0; i < 11; i++) {
        Object.keys(players).forEach(function (id) {
            players[id].hand.push(deck.shift());
        });
    }
};

function createPlayers(ids) {
	var o = {};

	ids.forEach(function(id){
		o[id] = {
			hand: [],
			score: {
				euchre: 0,
				tricks: 0,
				points: 0
			}
		};
	});

	return o;
}

function createDeck() {
	var suits = ['clubs', 'spades', 'diamonds', 'hearts'];
	var cards = [];

	suits.forEach(function(suit) {
		for(var i = 9; i <= 14; i++) {
			var name = i;
			if(i===14) name = 'A';
			if(i===11) name = 'J';
			if(i===12) name = 'Q';
			if(i===13) name = 'K';
			cards.push({
				suit: suit,
				value: i,
				name: name
			});
		}
	});

	// add Joker to players hand
	cards.push({
		suit: 'Joker',
		value: 15,
		name: ''
	});

	return _.shuffle(cards);
}