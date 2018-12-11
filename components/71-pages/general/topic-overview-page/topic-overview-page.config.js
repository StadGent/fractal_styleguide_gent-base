'use strict';

const topic_links = [
  {
    text: 'Subtopic link 1',
    link: 'www.google.com'
  },
  {
    text: 'Subtopic link 2',
    link: 'www.google.com'
  },
  {
    text: 'Subtopic link 3',
    link: 'www.google.com'
  },
  {
    text: 'Subtopic link 4',
    link: 'www.google.com'
  },
  {
    text: 'Subtopic link 5',
    link: 'www.google.com'
  }
];

module.exports = {
  title: 'Topic page',
  status: 'alpha',
  preview: '@preview-overview-without-padding',
  context: {
    topics: [
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Praktische en juridische informatie rond bouwen en verbouwen. Alles over de omgevingsvergunningen.',
        teaser_title: 'Title text',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links.slice(0, 2)
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Huren in Gent? Bekijk hier de mogelijkheden.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Verhuren in Gent? Stad Gent ondersteunt met premies, advies en begeleiding.',
        teaser_title: 'Title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text'
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Praktische en juridische informatie rond bouwen en verbouwen. Alles over de omgevingsvergunningen.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Huren in Gent? Bekijk hier de mogelijkheden.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Verhuren in Gent? Stad Gent ondersteunt met premies, advies en begeleiding.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Praktische en juridische informatie rond bouwen en verbouwen. Alles over de omgevingsvergunningen.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Huren in Gent? Bekijk hier de mogelijkheden.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      },
      {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Verhuren in Gent? Stad Gent ondersteunt met premies, advies en begeleiding.',
        teaser_title: 'Title text',
        teaser_link_text: 'show more',
        teaser_link_link: '#',
        teaser_image_src: 'https://loremflickr.com/800/500/ghent',
        teaser_image_alt_text: 'alt text',
        teaser_topic_links: topic_links
      }
    ]
  }
};
