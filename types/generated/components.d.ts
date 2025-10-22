import type { Schema, Struct } from '@strapi/strapi';

export interface AboutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_about_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutMembers extends Struct.ComponentSchema {
  collectionName: 'components_about_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.Text;
    skills: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.Text;
  };
}

export interface BlocksAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_uses';
  info: {
    displayName: 'About us';
  };
  attributes: {
    collaborate: Schema.Attribute.Text;
    collaborate_desc: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'about.features', false>;
    herosection: Schema.Attribute.Component<'shared.hero-section', false>;
    highlights: Schema.Attribute.Component<'elements.card', true>;
    members: Schema.Attribute.Component<'about.members', true>;
    mission: Schema.Attribute.Component<'elements.card', false>;
    ourStory: Schema.Attribute.Component<'elements.card', false>;
    vision: Schema.Attribute.Component<'elements.card', false>;
  };
}

export interface BlocksCareers extends Struct.ComponentSchema {
  collectionName: 'components_blocks_careers';
  info: {
    displayName: 'Careers';
  };
  attributes: {
    apply: Schema.Attribute.Component<'career.gain', false>;
    culture: Schema.Attribute.Component<'career.culture', false>;
    gain: Schema.Attribute.Component<'career.gain', false>;
    herosection: Schema.Attribute.Component<'shared.hero-section', false>;
    internship: Schema.Attribute.Component<'career.internship', false>;
  };
}

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

export interface BlocksProjects extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    description: Schema.Attribute.Text;
    herosection: Schema.Attribute.Component<'shared.hero-section', false>;
    title: Schema.Attribute.Text;
  };
}

export interface BlocksService extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    services: Schema.Attribute.Component<'servicepage.services', true>;
  };
}

export interface CareerCulture extends Struct.ComponentSchema {
  collectionName: 'components_career_cultures';
  info: {
    displayName: 'Culture';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface CareerGain extends Struct.ComponentSchema {
  collectionName: 'components_career_gains';
  info: {
    displayName: 'gain';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface CareerInternship extends Struct.ComponentSchema {
  collectionName: 'components_career_internships';
  info: {
    displayName: 'Internship';
  };
  attributes: {
    description: Schema.Attribute.Text;
    jobs: Schema.Attribute.Component<'career.jobs', true>;
    title: Schema.Attribute.Text;
  };
}

export interface CareerJobs extends Struct.ComponentSchema {
  collectionName: 'components_career_jobs';
  info: {
    displayName: 'jobs';
  };
  attributes: {
    benefits: Schema.Attribute.RichText;
    button: Schema.Attribute.Component<'elements.link', false>;
    job_description: Schema.Attribute.Text;
    place: Schema.Attribute.Text;
    requirements: Schema.Attribute.RichText;
    tags: Schema.Attribute.Component<'shared.tags', true>;
    title: Schema.Attribute.String;
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

export interface ServicepageServices extends Struct.ComponentSchema {
  collectionName: 'components_servicepage_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subServices: Schema.Attribute.Component<'elements.card', true>;
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

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface SharedTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.features': AboutFeatures;
      'about.members': AboutMembers;
      'blocks.about-us': BlocksAboutUs;
      'blocks.careers': BlocksCareers;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.projects': BlocksProjects;
      'blocks.service': BlocksService;
      'career.culture': CareerCulture;
      'career.gain': CareerGain;
      'career.internship': CareerInternship;
      'career.jobs': CareerJobs;
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
      'servicepage.services': ServicepageServices;
      'shared.cta': SharedCta;
      'shared.header': SharedHeader;
      'shared.hero-section': SharedHeroSection;
      'shared.tags': SharedTags;
    }
  }
}
