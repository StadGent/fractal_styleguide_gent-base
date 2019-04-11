'use strict';

module.exports = {
  default: 'en',
  preview: '@preview-description-list-without-padding',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    gentinfo: {
      title: 'gentinfo',
      description: 'We can be reached from Monday to Saturday, from 8.00 am to 7.00 pm',
      phone: {
        label: '09 210 10 10',
        machine: '+32 9 210 10 10'
      },
      email: 'gentinfo@stad.gent',
      form: 'Contact form',
      chat: 'Chat with Gentinfo'
    },
    disclaimer: {
      title: 'Useful links',
      links: [
        "<a href='javascript:(void);'>Vacancies</a>",
        "<a href='javascript:(void);'>City plan</a>",
        "<a href='https://persruimte.stad.gent'>Press room City of Ghent</a>",
        "<a href='javascript:(void);'>Legal information and privacy</a>",
        "<a href='https://www.example.com'>Another link</a>"
      ]
    },
    address: {
      title: 'Postal address',
      name: 'City of Ghent',
      street: 'Botermarkt 1',
      city: '9000 Ghent'
    },
    bottom: {
      partnership: 'In cooperation with Digipolis',
      social: 'Follow the City of Ghent on social media'
    }
  },

  variants: [
    {
      name: 'en',
      preview: '@preview-without-padding'
    },
    {
      name: 'nl',
      preview: '@preview-without-padding',
      context: {
        gentinfo: {
          description: 'Bereikbaar van maandag tot en met zaterdag van 8 tot 19 uur.',
          form: 'Contactformulier',
          chat: 'Chat met Gentinfo'
        },
        disclaimer: {
          title: 'Nuttige links',
          links: [
            "<a href='javascript:(void);'>Vacatures</a>",
            "<a href='javascript:(void);'>Stadsplan</a>",
            "<a href='https://persruimte.stad.gent'>Persruimte Stad Gent</a>",
            "<a href='javascript:(void);'>Juridische info</a>",
            "<a href='https://www.example.com'>Privacy</a>"
          ]
        },
        address: {
          title: 'Postadres',
          name: 'Stad Gent',
          street: 'Botermarkt 1',
          city: '9000 Gent'
        },
        bottom: {
          partnership: 'In samenwerking met Digipolis',
          social: 'Volg de Stad Gent op sociale media'
        }
      }
    },
    {
      name: 'fr',
      preview: '@preview-without-padding',
      context: {
        gentinfo: {
          description: 'Joignable du lundi au samedi inclus de 8 à 19 heures.',
          form: 'Formulaire de contact',
          chat: 'Chatter avec Gentinfo'
        },
        disclaimer: {
          title: 'Liens utiles',
          links: [
            "<a href='javascript:(void);'>Postes vacants</a>",
            "<a href='javascript:(void);'>Plan de la ville</a>",
            "<a href='https://persruimte.stad.gent'>Salle de presse</a>",
            "<a href='javascript:(void);'>Infos légales</a>",
            "<a href='https://www.example.com'>Un autre lien</a>"
          ]
        },
        address: {
          title: 'Adresse postale',
          name: 'Ville de Gand',
          street: 'Botermarkt 1',
          city: '9000 Gand'
        },
        bottom: {
          partnership: 'En collaboration avec Digipolis',
          social: 'Suivez la Ville de Gand sur les réseaux sociaux'
        }
      }
    }, {
      name: 'de',
      preview: '@preview-without-padding',
      context: {
        gentinfo: {
          description: 'Von Montag bis Samstag von 8 Uhr bis 19 Uhr erreichbar.',
          form: 'Kontaktformular',
          chat: 'Chat mit Gentinfo'
        },
        disclaimer: {
          title: 'Nützliche Links',
          links: [
            "<a href='javascript:(void);'>Stellenangebote</a>",
            "<a href='javascript:(void);'>Stadtplan</a>",
            "<a href='https://persruimte.stad.gent'>Presseraum</a>",
            "<a href='javascript:(void);'>Rechtliche Hinweise</a>",
            "<a href='https://www.example.com'>Noch ein Link</a>"
          ]
        },
        address: {
          title: 'Postanschrift',
          name: 'Der Stadt Gent',
          street: 'Botermarkt 1',
          city: '9000 Gent'
        },
        bottom: {
          partnership: 'In Zusammenarbeit mit Digipolis',
          social: 'Der Stadt Gent in den sozialen Medien folgen'
        }
      }
    }
  ]
};
