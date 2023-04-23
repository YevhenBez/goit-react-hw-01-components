import PropTypes from 'prop-types';

const Profile = (props) => {
    const { username, tag, location, avatar, statsFollowers, statsViews, statsLikes } = props;
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{ tag }</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <div class="stats__for-li stats__followers">
                        <div><span class="label">Followers</span></div>
                        <div><span class="quantity">{statsFollowers}</span></div>
                    </div>
                </li>
                <li>
                    <div class="stats__for-li stats__views">
                        <div><span class="label">Views</span></div>
                        <div><span class="quantity">{statsViews}</span></div>
                    </div>
                </li>
                <li>
                    <div class="stats__for-li stats__Likes">
                        <div><span class="label">Likes</span></div>
                        <div><span class="quantity">{statsLikes}</span></div>
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