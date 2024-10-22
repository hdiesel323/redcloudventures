import content from '../cms/content.json';
import { SiteConfig } from '../config/siteConfig';
import * as LucideIcons from 'lucide-react';

export function getSiteConfig(siteName: string): SiteConfig {
  const siteContent = content[siteName as keyof typeof content];
  if (!siteContent) {
    throw new Error(`Site configuration not found for ${siteName}`);
  }

  return {
    ...siteContent,
    features: siteContent.features.map(feature => ({
      ...feature,
      icon: (LucideIcons as any)[feature.icon]
    }))
  } as SiteConfig;
}