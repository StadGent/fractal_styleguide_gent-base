'use strict';

module.exports = {
  label: 'In the spotlight',
  default: 'image left',
  context: {
    layout: 'image-left',
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis.',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAAHWCAYAAADKGqhaAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3QWT5EiSBtCcZWaeZWb8//9gaZZhlpmZYc68btWmjhZlpVeW+/ST2dndTWeGIp5H5ZeSQsonPvvZzz5zshEgQIAAAQIpAk8I1hRHjRAgQIAAgRsBwWoiECBAgACBRAHBmoipKQIECBAgIFjNAQIECBAgkCggWBMxNUWAAAECBASrOUCAAAECBBIFBGsipqYIECBAgIBgNQcIECBAgECigGBNxNQUAQIECBAQrOYAAQIECBBIFBCsiZiaIkCAAAECgtUcIECAAAECiQKCNRFTUwQIECBAQLCaAwQIECBAIFFAsCZiaooAAQIECAhWc4AAAQIECCQKCNZETE0RIECAAAHBag4QIECAAIFEAcGaiKkpAgQIECAgWM0BAgQIECCQKCBYEzE1RYAAAQIEBKs5QIAAAQIEEgUEayKmpggQIECAgGA1BwgQIECAQKKAYE3E1BQBAgQIEBCs5gABAgQIEEgUEKyJmJoiQIAAAQKC1RwgQIAAAQKJAoI1EVNTBAgQIEBAsJoDBAgQIEAgUUCwJmJqigABAgQICFZzgAABAgQIJAoI1kRMTREgQIAAAcFqDhAgQIAAgUQBwZqIqSkCBAgQICBYzQECBAgQIJAoIFgTMTVFgAABAgQEqzlAgAABAgQSBQRrIqamCBAgQICAYDUHCBAgQIBAooBgTcTUFAECBAgQEKzmAAECBAgQSBQQrImYmiJAgAABAoLVHCBAgAABAokCgjURU1MECBAgQECwmgMECBAgQCBRQLAmYmqKAAECBAgIVnOAAAECBAgkCgjWRExNESBAgAABwWoOECBAgACBRAHBmoipKQIECBAgIFjNAQIECBAgkCggWBMxNUWAAAECBASrOUCAAAECBBIFBGsipqYIECBAgIBgNQcIECBAgECigGBNxNQUAQIECBAQrOYAAQIECBBIFBCsiZiaIkCAAAECgtUcIECAAAECiQKCNRFTUwQIECBAQLCaAwQIECBAIFFAsCZiaooAAQIECAhWc4AAAQIECCQKCNZETE0RIECAAAHBag4QIECAAIFEAcGaiKkpAgQIECAgWM0BAgQIECCQKCBYEzE1RYAAAQIEBKs5QIAAAQIEEgUEayKmpggQIECAgGA1BwgQIECAQKKAYE3E1BQBAgQIEBCs5gABAgQIEEgUEKyJmJoiQIAAAQKC1RwgQIAAAQKJAoI1EVNTBAgQIEBAsJoDBAgQIEAgUUCwJmJqigABAgQICFZzgAABAgQIJAoI1kRMTREgQIAAAcFqDhAgQIAAgUQBwZqIqSkCBAgQICBYzQECBAgQIJAoIFgTMTVFgAABAgQEqzlAgAABAgQSBQRrIqamCBAgQICAYDUHCBAgQIBAooBgTcTUFAECBAgQEKzmAAECBAgQSBQQrImYmiJAgAABAoLVHCBAgAABAokCgjURU1MECBAgQECwmgMECBAgQCBRQLAmYmqKAAECBAgIVnOAAAECBAgkCgjWRExNESBAgAABwWoOECBAgACBRAHBmoipKQIECBAgIFjNAQIECBAgkCggWBMxNUWAAAECBASrOUCAAAECBBIFBGsipqYIECBAgIBgNQcIECBAgECigGBNxNQUAQIECBAQrOYAAQIECBBIFBCsiZiaIkCAAAECgtUcIECAAAECiQKCNRFTUwQIECBAQLCaAwQIECBAIFFAsCZiaooAAQIECAhWc4AAAQIECCQKCNZETE0RIECAAAHBag4QIECAAIFEAcGaiKkpAgQIECAgWM0BAgQIECCQKCBYEzE1RYAAAQIEBKs5QIAAAQIEEgUEayKmpggQIECAgGA1BwgQIECAQKKAYE3E1BQBAgQIEBCs5gABAgQIEEgUEKyJmJoiQIAAAQKC1RwgQIAAAQKJAoI1EVNTBAgQIEBAsJoDBAgQIEAgUUCwJmJqigABAgQICFZzgAABAgQIJAoI1kRMTREgQIAAAcFqDhAgQIAAgUQBwZqIqSkCBAgQICBYzQECBAgQIJAoIFgTMTVFgAABAgQEqzlAgAABAgQSBQRrIqamCBAgQICAYDUHCBAgQIBAooBgTcTUFAECBAgQEKzmAAECBAgQSBQQrImYmiJAgAABAoLVHCBAgAABAokCgjURU1MECBAgQECwmgMECBAgQCBRQLAmYmqKAAECBAgIVnOAAAECBAgkCgjWRExNESBAgAABwWoOECBAgACBRAHBmoipKQIECBAgIFjNAQIECBAgkCggWBMxNUWAAAECBASrOUCAAAECBBIFBGsipqYIECBAgIBgNQcIECBAgECigGBNxNQUAQIECBAQrOYAAQIECBBIFBCsiZiaIkCAAAECgtUcIECAAAECiQKCNRFTUwQIECBAQLCaAwQIECBAIFFAsCZiaooAAQIECAhWc4AAAQIECCQKCNZETE0RIECAAAHBag4QIECAAIFEAcGaiKkpAgQIECAgWM0BAgQIECCQKCBYEzE1RYAAAQIEBKs5QIAAAQIEEgUEayKmpggQIECAgGA1BwgQIECAQKKAYE3E1BQBAgQIEBCs5gABAgQIEEgUEKyJmJoiQIAAAQKC1RwgQIAAAQKJAoI1EVNTBAgQIEBAsJoDBAgQIEAgUUCwJmJqigABAgQICFZzgAABAgQIJAoI1kRMTREgQIAAAcFqDhAgQIAAgUQBwZqIqSkCBAgQICBYzQECBAgQIJAoIFgTMTVFgAABAgQEqzlAgAABAgQSBQRrIqamCBAgQICAYDUHCBAgQIBAooBgTcTUFAECBAgQEKzmAAECBAgQSBQQrImYmiJAgAABAoLVHCBAgAABAokCgjURU1MECBAgQECwmgMECBAgQCBRQLAmYmqKAAECBAgIVnOAAAECBAgkCgjWRExNESBAgAABwWoOECBAgACBRAHBmoipKQIECBAgIFjNAQIECBAgkCggWBMxNUWAAAECBASrOUCAAAECBBIFBGsipqYIECBAgIBgNQcIECBAgECigGBNxNQUAQIECBAQrOYAAQIECBBIFBCsiZiaIkCAAAECgtUcIECAAAECiQKCNRFTUwQIECBAQLCaAwQIECBAIFFAsCZiaooAAQIECAhWc4AAAQIECCQKCNZETE0RIECAAAHBag4QIECAAIFEAcGaiKkpAgQIECAgWM0BAgQIECCQKCBYEzE1RYAAAQIEBKs5QIAAAQIEEgUEayKmpggQIECAgGA1BwgQIECAQKKAYE3E1BQBAgQIEBCs5sBjL/CWt7zl9OpXv/rG4de//vXpF7/4xWNvAuA6Ak8++eTpVa961c3Ofvazn51++9vfXmfH9nKnAoL1Tnmv3/hLXvKS0ytf+cqbHf/rX/+6CYprb8973vNOr3/96292+8wzz5x++ctfnv773/9euxuH9vfCF77w9NGPfvTBa3/wgx/c2uyd73zn6fnPf/5NW3//+99PP/rRjw714RovetGLXnR66Utfenrxi198es5znnP6xz/+cdPHP/7xjzc1qrzFfHrXu971oIu/+93vbl2j7HE+8cQTp/ibC9uY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',
    alt_text: 'Image alt text',
    links: [
      {
        text: 'An external link',
        url: 'https://stad.gent'
      }
    ]
  },
  variants: [
    {
      name: 'image right',
      context: {
        layout: 'image-right',
        alt_text: 'Image alt text',
        links: [
          {
            text: 'Internal link',
            url: '#'
          }
        ]
      }
    }
  ]
};
