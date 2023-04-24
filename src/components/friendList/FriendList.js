import FriendListItem from './FriendListItem';


const FriendList = (props) => {
    const { friends } = props;
    return (
        <ul className="friend-list">
            {/* <!-- Довільна кіл-сть FriendListItem --> */}
            {friends.map(friend => (
                <FriendListItem key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

export default FriendList;