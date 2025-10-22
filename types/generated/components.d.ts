import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ElementsBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsCtaCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_cta_cards';
  info: {
    displayName: 'Cta Cards';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface ElementsNumbers extends Struct.ComponentSchema {
  collectionName: 'components_elements_numbers';
  info: {
    displayName: 'Numbers';
  };
  attributes: {
    number: Schema.Attribute.String;
    subtitleOne: Schema.Attribute.String;
    subtitleTwo: Schema.Attribute.String;
  };
}

export interface ElementsTetimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_tetimonials';
  info: {
    displayName: 'tetimonials';
  };
  attributes: {
    feedback: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    starCount: Schema.Attribute.String;
  };
}

export interface HomepageCollaborations extends Struct.ComponentSchema {
  collectionName: 'components_homepage_collaborations';
  info: {
    displayName: 'Collaborations';
  };
  attributes: {
    brands: Schema.Attribute.Media<'images', true>;
    brandsTitle: Schema.Attribute.String;
    description: Schema.Attribute.String;
    numbers: Schema.Attribute.Component<'elements.numbers', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOtherServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_other_services';
  info: {
    displayName: 'Other Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageReadyToGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ready_to_get_started_s';
  info: {
    displayName: 'Ready to Get Started?';
  };
  attributes: {
    call: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    discrete: Schema.Attribute.String;
    quote: Schema.Attribute.Component<'elements.link', false>;
    response: Schema.Attribute.String;
    support: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageService extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageSpectrum extends Struct.ComponentSchema {
  collectionName: 'components_homepage_spectrums';
  info: {
    displayName: 'Spectrum';
  };
  attributes: {
    ans1: Schema.Attribute.String;
    ans2: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
    ques1: Schema.Attribute.String;
    ques2: Schema.Attribute.String;
    right_block: Schema.Attribute.Component<'elements.block', true>;
    right_description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    subtitle2: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    title2: Schema.Attribute.Text;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.tetimonials', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.cta-cards', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'elements.block': ElementsBlock;
      'elements.card': ElementsCard;
      'elements.cta-cards': ElementsCtaCards;
      'elements.link': ElementsLink;
      'elements.numbers': ElementsNumbers;
      'elements.tetimonials': ElementsTetimonials;
      'homepage.collaborations': HomepageCollaborations;
      'homepage.other-services': HomepageOtherServices;
      'homepage.ready-to-get-started': HomepageReadyToGetStarted;
      'homepage.service': HomepageService;
      'homepage.spectrum': HomepageSpectrum;
      'homepage.testimonials': HomepageTestimonials;
      'shared.cta': SharedCta;
      'shared.header': SharedHeader;
    }
  }
}
