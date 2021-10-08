const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

function addSubscribe(user) {
  user.isSubscribed = true;
}

users.forEach(addSubscribe);
