# CTA links

A CTA link has a certain behavior.

* It should always have a width based on the page container of 7/12. This means
  the container needs to make sure CTA links can never be bigger then 7/12 of itself.
* It always has a max-width 40 rems on desktop.
* For a mobile layout a CTA link is always full width.

Examples of paragraphs are defined in paragraph variants:

* <a href="{{path './cta-link--website'}}">CTA link website</a>
* <a href="{{path './cta-link--document'}}">CTA link document</a>
* <a href="{{path './cta-link--form-fill'}}">CTA link form fill</a>
* <a href="{{path './cta-link--email'}}">CTA link email</a>
* <a href="{{path './cta-link--phone'}}">CTA link phone</a>
* <a href="{{path './cta-link--location'}}">CTA link location</a>
