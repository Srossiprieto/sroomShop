import styles from './Footer.module.css';
import GithubSvg from '../../assets/Icons/github';
function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.newsletterContainer}>
        <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get the latest updates</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <div className={styles.footerContent}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 SRP. All Rights Reserved</p>

        <div className={styles.socialMedia}>
            <a target="_blank" href="https://github.com/Srossiprieto" alt='github-profile'>
                <GithubSvg />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;