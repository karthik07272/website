import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='connect'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/theentrepreneurshipnetwork/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/We_Are_TEN?s=08'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

          </div>

        </div>
      </section>
      <section class="connect">
        <div className='input-areas'>
          <form>
            <p>Subscribe to our newsletter</p>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Full Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Collage Name'
            /><br />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Mobile No'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            /><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> Join TEN's Discord Community</label><br></br>
            <input type="submit" value="Submit"/>


          </form>
        </div>
      </section>
      <section class="connect">
      <div class="abts"><Link
              class='social-icon-link facebook'
              to='/About-us'
              target='_blank'
              aria-label='Facebook'
            >
            </Link>About Us</div>
            <div class="abts"><Link
              class='social-icon-link facebook'
              to='/About-us'
              target='_blank'
              aria-label='Facebook'
            >
            </Link>FAQ's</div>
            <div class="abts"><Link
              class='social-icon-link facebook'
              to='/About-us'
              target='_blank'
              aria-label='Facebook'
            >
            </Link>Contact Us</div>
            </section>
      

            
        <div class='right'>
          © 2020 Limitless Technologies - The Entrepreneurship Network
        </div>
      


      
    </div>
    
  );
}

export default Footer;
