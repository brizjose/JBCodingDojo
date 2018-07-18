SELECT leaders.first_name, leaders.last_name, friends.first_name AS friend_first_name, friends.last_name AS friend_last_name 
FROM friendships
JOIN users AS leaders ON friendships.user_id = leaders.id
JOIN users AS friends ON friendships.friend_id = friends.id;
