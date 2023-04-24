import PropTypes from 'prop-types';

const Profile = (props) => {
    const { username, tag, location, avatar, statsFollowers, statsViews, statsLikes } = props;
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{ tag }</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <div className="stats__for-li stats__followers">
                        <div><span className="label">Followers</span></div>
                        <div><span className="quantity">{statsFollowers}</span></div>
                    </div>
                </li>
                <li>
                    <div className="stats__for-li stats__views">
                        <div><span className="label">Views</span></div>
                        <div><span className="quantity">{statsViews}</span></div>
                    </div>
                </li>
                <li>
                    <div className="stats__for-li stats__Likes">
                        <div><span className="label">Likes</span></div>
                        <div><span className="quantity">{statsLikes}</span></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    statsFollowers: PropTypes.number,
    statsViews: PropTypes.number,
    statsLikes: PropTypes.number,
}

export default Profile;