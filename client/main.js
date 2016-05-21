import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    Accounts.createUser({ email: 'nobody@mailinator.com', password: 'test' });
  },
});
