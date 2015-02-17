Template.signup.events({
	'click button': function(evt, template) {
		evt.preventDefault();

		Accounts.createUser({
			email: template.find('#su-email').value,
			username: template.find('#su-username').value,
			password: template.find('#su-password').value
		});
	}
});

Template.login.events({
	'click button': function(evt, template) {
		evt.preventDefault();

		Meteor.loginWithPassword(
			template.find('#si-email').value,
			template.find('#si-password').value
		);
	}
});

Template.logout.events({
	'click button': function(evt, tempkate) {
		evt.preventDefault();
		
		Meteor.logout();
	}
});