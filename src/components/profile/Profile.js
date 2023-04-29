import PropTypes from 'prop-types';
import css from './css/profile.module.css';

const Profile = (props) => {
    const { username, tag, location, avatar, stats: {followers, views, likes} } = props;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{ tag }</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <div className={css.stats__forLi}>
                        <div><span className={css.label}>Followers</span></div>
                        <div><span className={css.quantity}>{followers}</span></div>
                    </div>
                </li>
                <li>
                    <div className={css.stats__forLi}>
                        <div><span className={css.label}>Views</span></div>
                        <div><span className={css.quantity}>{views}</span></div>
                    </div>
                </li>
                <li>
                    <div className={css.stats__forLi+` `+css.stats__Likes}>
                        <div><span className={css.label}>Likes</span></div>
                        <div><span className={css.quantity}>{likes}</span></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}

export default Profile;