import SocialItem from "./SocialItem";
import css from './SocialList.module.css'

function SocialList({ socials }) {
    return (
        <div className={css.list}>
            {socials.map((social) => (
                <SocialItem key={social.id} {...social} />
            ))}
        </div>

    );
}

export default SocialList;