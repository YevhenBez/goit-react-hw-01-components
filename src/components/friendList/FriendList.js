import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}

export default FriendList;