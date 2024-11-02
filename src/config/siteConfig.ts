import { LucideIcon, BarChart2, Building, TrendingUp, Briefcase } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SiteConfig {
  siteName: string;
  siteTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  featuresTitle: string;
  features: Feature[];
  whyUsTitle: string;
  whyUsPoints: string[];
  portfolioTitle: string;
  portfolioItems: { title: string; description: string }[];
  processTitle: string;
  processSteps: { title: string; description: string }[];
  calendlyUrl: string;
  pricingTitle: string;
  pricingPlans: PricingPlan[];
  faqs: FAQ[];
  testimonials: Testimonial[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQ: FAQ[] = [
  // Your FAQ items here
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  // add other properties as needed
}

export const testimonials: Testimonial[] = [
  // Your testimonial items here
];

export interface PricingFeature {
  name: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
}

const siteConfig: SiteConfig = {
  siteName: "Red Cloud Ventures",
  siteTagline: "Unlocking Value in Commercial Real Estate",
  heroTitle: "Transforming Commercial Real Estate",
  heroSubtitle: "At Red Cloud Ventures, we specialize in acquiring and optimizing commercial real estate assets across the nation. Our expertise lies in identifying high-potential properties that offer exceptional long-term value for investors. We take a data-driven, strategic approach to every acquisition, ensuring that your investment generates sustainable returns.",
  aboutTitle: "Leading the Way in Commercial Real Estate Investment",
  aboutDescription: "Red Cloud Ventures is a premier commercial real estate investment firm with a proven track record in acquiring value-add properties. We focus on light industrial, self-storage, big-box, and land development projects that offer strong upside potential. Our team brings together years of expertise in deal structuring, market research, and asset management, positioning us as trusted partners in navigating complex real estate transactions.",
  featuresTitle: "Our Approach to Real Estate Investment",
  features: [
    {
      icon: BarChart2,
      title: "Market Analysis",
      description: "We utilize advanced data analytics to evaluate trends and identify the most promising investment opportunities."
    },
    {
      icon: Building,
      title: "Property Acquisition",
      description: "Our team sources properties that meet your investment criteria, focusing on underperforming assets with room for growth."
    },
    {
      icon: TrendingUp,
      title: "Value-Add Strategy",
      description: "We employ strategic improvements to enhance property value, from renovations to re-positioning and operational enhancements."
    },
    {
      icon: Briefcase,
      title: "Asset Management",
      description: "We manage your investments post-acquisition, ensuring long-term performance through active management and optimization."
    }
  ],
  whyUsTitle: "A Partner You Can Trust",
  whyUsPoints: [
    "Expertise in Key Markets: Our deep knowledge of regional and national commercial markets allows us to uncover unique investment opportunities.",
    "Proven Track Record: We've successfully acquired and repositioned millions of square feet of commercial property, delivering exceptional returns.",
    "Strategic Growth: We focus on properties with untapped potential, creating value through capital improvements and effective management.",
    "Investor-Centric Approach: We prioritize your goals, delivering personalized investment strategies and detailed reporting to keep you informed at every stage."
  ],
  portfolioTitle: "A Glimpse into Our Success",
  portfolioItems: [
    {
      title: "Industrial Complex, Houston, TX",
      description: "Redeveloped 250,000 sq. ft. of industrial space, generating a 15% annual return."
    },
    {
      title: "Self-Storage Facility, Phoenix, AZ",
      description: "Increased NOI by 12% through strategic expansions and operational improvements."
    },
    {
      title: "Big Box Redevelopment, Dallas, TX",
      description: "Acquired and repositioned a 60,000 sq. ft. retail space, delivering a 20% ROI."
    }
  ],
  processTitle: "From Acquisition to Value Creation",
  processSteps: [
    {
      title: "Research & Analysis",
      description: "In-depth market research to pinpoint properties with high growth potential."
    },
    {
      title: "Due Diligence",
      description: "Comprehensive evaluation of the property's financials, physical condition, and market position."
    },
    {
      title: "Acquisition",
      description: "Strategic negotiations to secure the best terms and close the deal."
    },
    {
      title: "Value Creation & Management",
      description: "Implementation of value-add strategies to maximize returns and ongoing asset management to ensure peak performance."
    }
  ],
  calendlyUrl: "https://calendly.com/redcloudventures/consultation",
  pricingTitle: "Investment Plans",
  pricingPlans: [
    {
      title: "Starter",
      price: "$50k+",
      period: "Minimum Investment",
      features: [
        { name: "Access to select properties" },
        { name: "Quarterly reporting" },
        { name: "Basic investor support" }
      ]
    },
    // Add more plans as needed
  ],
  faqs: [
    {
      question: "What is your minimum investment?",
      answer: "Our minimum investment typically starts at $50,000."
    },
    // ... more FAQs
  ],
  testimonials: [
    {
      name: "John Doe",
      role: "Real Estate Investor",
      content: "Working with Red Cloud Ventures has been exceptional..."
    },
    // ... more testimonials
  ]
};

export default siteConfig;