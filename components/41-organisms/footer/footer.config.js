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
      description: 'Do you have questions, suggestions, complaints, ... about the City of Ghent? We are here for you!',
      open: 'Monday to Saturday from 8.00 am until 7.00 pm.',
      phone: {
        label: '09 210 10 10',
        machine: '+32 9 210 10 10'
      },
      email: 'gentinfo@stad.gent',
      form: 'Contact form',
      chat: 'Chat with us'
    },
    disclaimer: {
      title: 'Useful links',
      links: [
        'Vacancies',
        'City plan',
        'City of Ghent newsroom'
      ]
    },
    social: {
      title: 'Follow the city of Ghent'
    },
    bottom: {
      partnership: 'In cooperation with District09',
      links: [
        'Terms of use',
        'Privacy',
        'Responsible disclosure',
        'Accessibility statement',
        'Cookie settings'
      ]
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
          description: 'Heb je vragen, suggesties, meldingen of klachten, ... over de Stad Gent? We staan voor je klaar!',
          open: 'Maandag tot en met zaterdag van 8 tot 19 uur',
          form: 'Contactformulier',
          chat: 'Chat met ons'
        },
        disclaimer: {
          title: 'Nuttige links',
          links: [
            'Vacatures',
            'Stadsplan',
            'Persruimte Stad Gent'
          ]
        },
        social: {
          title: 'Volg stad Gent'
        },
        bottom: {
          partnership: 'In samenwerking met District09',
          links: [
            'Gebruiksvoorwaarden',
            'Privacy',
            'Responsible disclosure',
            'Toegankelijkheidsverklaring',
            'Cookie-instellingen'
          ]
        }
      }
    },
    {
      name: 'fr',
      preview: '@preview-without-padding',
      context: {
        gentinfo: {
          description: 'Vous avez des questions, des suggestions, des signalements ou des réclamations, ... concernant la Ville de Gand ? Nous sommes prêts pour vous!',
          open: 'Joignable du lundi au samedi de 8 heures à 19 heures.',
          form: 'Formulaire de contact',
          chat: 'Chatter avec nous'
        },
        disclaimer: {
          title: 'Liens utiles',
          links: [
            'Postes vacants',
            'Plan de la ville',
            'Espace presse de la Ville de Gand'
          ]
        },
        social: {
          title: 'Suivez la ville de Gand'
        },
        bottom: {
          partnership: 'En collaboration avec District09',
          links: [
            'Conditions d\'utilisation',
            'Vie privée',
            'Divulgation responsable',
            'Déclaration d\'accessibilité',
            'Paramètres des cookies'
          ]
        }
      }
    },
    {
      name: 'de',
      preview: '@preview-without-padding',
      context: {
        gentinfo: {
          description: 'Haben Sie Fragen, Anregungen, Berichte oder Beschwerden, ... über die Stadt Gent? Wir sind bereit für Sie!',
          open: 'Montag bis Samstag von 8 Uhr bis 19 Uhr erreichbar.',
          form: 'Kontaktformular',
          chat: 'Chatte mit uns'
        },
        disclaimer: {
          title: 'Nützliche Links',
          links: [
            'Stellenangebote',
            'Stadtplan',
            'Presseinformationen Stadt Gent'
          ]
        },
        social: {
          title: 'Der Stadt Gent folgen'
        },
        bottom: {
          partnership: 'In Zusammenarbeit mit District09',
          links: [
            'Nutzungsbedingungen',
            'Datenschutz',
            'Verantwortungsvolle Offenlegung',
            'Erklärung zur Zugänglichkeit der Website',
            'Cookie-Einstellungen'
          ]
        }
      }
    }
  ]
};
