export const getJsonLd = (domain: string | undefined) => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://${domain}#business`,
        name: 'KW Motogear',
        description:
          'Аренда/прокат профессиональной мотоэкипировки в Балашихе: шлемы, куртки и перчатки.',
        url: `https://${domain}`,
        telephone: '+79252273901',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'ш. Энтузиастов, 1Б, территория Западная Коммунальная Зона',
          addressLocality: 'Балашиха',
          addressCountry: 'RU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 55.783759,
          longitude: 37.867869,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '10:00',
            closes: '19:00',
          },
        ],
        priceRange: '300–5100 RUB',
        sameAs: ['https://vk.com/kwmotogear', 'https://t.me/KwElizabeth'],
        image: [`https://${domain}/meta_logo.jpg`],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Прайс аренды — KW Motogear',
          itemListElement: [
            // 1. Шлем 1 день
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Product',
                name: 'Аренда шлема SMK/IXS (1 день)',
                offers: {
                  '@type': 'Offer',
                  price: '500',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P1D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 2. Подшлемник
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Product',
                name: 'Подшлемник (покупка обязательна)',
                offers: {
                  '@type': 'Offer',
                  price: '600',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 3. Куртка 1 день
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Product',
                name: 'Аренда мотокуртки (1 день)',
                offers: {
                  '@type': 'Offer',
                  price: '800',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P1D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 4. Перчатки 1 день
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Product',
                name: 'Аренда мотоперчаток (1 день)',
                offers: {
                  '@type': 'Offer',
                  price: '300',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P1D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 5. Шлем 3 дня
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Product',
                name: 'Аренда шлема SMK/IXS (3 дня)',
                offers: {
                  '@type': 'Offer',
                  price: '1200',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P3D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 6. Куртка 3 дня
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@type': 'Product',
                name: 'Аренда мотокуртки (3 дня)',
                offers: {
                  '@type': 'Offer',
                  price: '2000',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P3D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 7. Перчатки 3 дня
            {
              '@type': 'ListItem',
              position: 7,
              item: {
                '@type': 'Product',
                name: 'Аренда мотоперчаток (3 дня)',
                offers: {
                  '@type': 'Offer',
                  price: '700',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P3D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 8. Шлем 1 неделя
            {
              '@type': 'ListItem',
              position: 8,
              item: {
                '@type': 'Product',
                name: 'Аренда шлема SMK/IXS (1 неделя)',
                offers: {
                  '@type': 'Offer',
                  price: '3000',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P7D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 9. Куртка 1 неделя
            {
              '@type': 'ListItem',
              position: 9,
              item: {
                '@type': 'Product',
                name: 'Аренда мотокуртки (1 неделя)',
                offers: {
                  '@type': 'Offer',
                  price: '5100',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P7D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
            // 10. Перчатки 1 неделя
            {
              '@type': 'ListItem',
              position: 10,
              item: {
                '@type': 'Product',
                name: 'Аренда мотоперчаток (1 неделя)',
                offers: {
                  '@type': 'Offer',
                  price: '1600',
                  priceCurrency: 'RUB',
                  availability: 'https://schema.org/InStock',
                  eligibleDuration: { '@type': 'Duration', value: 'P7D' },
                  seller: { '@id': `https://${domain}#business` },
                },
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Какой залог требуется при аренде?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Обязательный залог 5000 ₽ для любого типа аренды. Залог возвращается при возврате экипировки в исправном состоянии.',
            },
          },
          {
            '@type': 'Question',
            name: 'Нужно ли покупать подшлемник?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да — подшлемник приобретается отдельно (600 ₽), и его покупка обязательна.',
            },
          },
          {
            '@type': 'Question',
            name: 'Можно ли выкупить экипировку после аренды?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да — возможен выкуп. Свяжитесь с нами для уточнения условий.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Аренда мотоэкипировки',
            item: `https://${domain}`,
          },
        ],
      },
    ],
  }
}
