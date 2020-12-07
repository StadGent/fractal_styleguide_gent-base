'use strict';

module.exports = {
  default: 'en',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    paragraphs: [
      'Do you have any questions, complaints, suggestions, notifications etc. concerning the City of Ghent? If this is the case, please contact Gentinfo.',
      'We can be reached from Monday to Saturday, from 8.00 am to 7.00 pm.'
    ],
    listItems: [
      '<i aria-hidden="true" class="icon-phone"></i><a href="tel:092101010">09 210 10 10</a>',
      '<i aria-hidden="true" class="icon-envelope"></i><a href="mailto:gentinfo@stad.gent">Gentinfo@stad.gent</a>',
      '<i aria-hidden="true" class="icon-document"></i><a href="#">Contact form</a>'
    ]
  },
  variants: [
    {
      name: 'en'
    },
    {
      name: 'nl',
      context: {
        paragraphs: [
          'Gentinfo is hét centrale aanspreekpunt voor informatie over het stadsbestuur en de stadsdiensten. Heeft u vragen, klachten, suggesties, meldingen,… over de Stad Gent? Neem dan contact op met Gentinfo.',
          'Bereikbaar van maandag tot en met zaterdag van 8 tot 19 uur.'
        ],
        listItems: [
          '<i aria-hidden="true" class="icon-phone"></i><a href="tel:092101010">09 210 10 10</a>',
          '<i aria-hidden="true" class="icon-envelope"></i><a href="mailto:gentinfo@stad.gent">Gentinfo@stad.gent</a>',
          '<i aria-hidden="true" class="icon-document"></i><a href="#">Contactformulier</a>'
        ]
      }
    },
    {
      name: 'fr',
      context: {
        paragraphs: [
          'Vous avez des questions, des réclamations, des suggestions, des signalements... à propos de la Ville de Gand? Prenez contact avec Info Gand.',
          'Joignable du lundi au samedi de 8 heures à 19 heures.'
        ],
        listItems: [
          '<i aria-hidden="true" class="icon-phone"></i><a href="tel:092101010">09 210 10 10</a>',
          '<i aria-hidden="true" class="icon-envelope"></i><a href="mailto:gentinfo@stad.gent">Gentinfo@stad.gent</a>',
          '<i aria-hidden="true" class="icon-document"></i><a href="#">Formulaire de contact</a>'
        ]
      }
    },
    {
      name: 'de',
      context: {
        paragraphs: [
          'Haben Sie Fragen, Beschwerden, Vorschläge, Meldungen... über die Stadt Gent? Nehmen Sie dann bitte mit Gentinfo Kontakt auf.',
          'Von Montag bis Samstag von 8 Uhr bis 19 Uhr erreichbar.'
        ],
        listItems: [
          '<i aria-hidden="true" class="icon-phone"></i><a href="tel:092101010">09 210 10 10</a>',
          '<i aria-hidden="true" class="icon-envelope"></i><a href="mailto:gentinfo@stad.gent">Gentinfo@stad.gent</a>',
          '<i aria-hidden="true" class="icon-document"></i><a href="#">Kontaktformular</a>'
        ]
      }
    }
  ]
};
