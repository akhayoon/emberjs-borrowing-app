import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions:{
    cancel() {
      this.transiitionToRoute('friends.index');
      return false;
    }
  }
});