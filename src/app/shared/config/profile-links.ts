export const githubUsername = 'guimarcos';

export const profileLinks = {
  email: 'guilherme.amarcos@gmail.com',
  phone: '+55 (51) 98240-0703',
  github: `https://github.com/${githubUsername}`,
  linkedin: 'https://www.linkedin.com/in/guilherme-marcos-689b91165/',
} as const;

export const profileUrls = {
  mailto: `mailto:${profileLinks.email}`,
  whatsapp: `https://wa.me/${profileLinks.phone.replace(/\D/g, '')}`,
} as const;
