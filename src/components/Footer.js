import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-contain'>

        <section className='connect'>
    
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

          
            <form>
              <p class="top">Subscribe to our newsletter</p>
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
              <label class="aa" for="vehicle2"> Join TEN's Discord Community</label><br></br>
              <input class="sub" type="submit" value="Submit" />
            </form>
        

          <div class="div3">
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
          </div>
        </section>

      </div>

      <div class='right'>
        <p class="rt"> © 2020 Limitless Technologies - The Entrepreneurship Network</p>
      </div>




    </div>

  );
}

export default Footer;
