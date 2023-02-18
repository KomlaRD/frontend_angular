import { Component } from '@angular/core';
import { faGooglePlus, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  googlePlus = faGooglePlus;
  facebook = faFacebook;
  linkedin = faLinkedin;
  twitter = faTwitter;
  youtube = faYoutube;
  envelope = faEnvelope;
}
