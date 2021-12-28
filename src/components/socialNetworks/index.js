import './styles.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function SocialNetworks() {
  return (
    <div className="social-networks">
      <div className="social-line" />
      <a href="https://twitter.com/?lang=ru">
        <TwitterIcon
          className="twitter"
          style={{ textDecoration: 'none', color: 'black' }}
        />
      </a>
      <a
        href="https://www.instagram.com/?hl=ru"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <InstagramIcon className="insta" />
      </a>
      <a
        href="https://www.facebook.com/"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <FacebookIcon />
      </a>
    </div>
  )
}
