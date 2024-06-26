import { FooterNavItem, LinkItem } from "@/types/notion-type";
import { Slack, Linkedin } from "lucide-react";

export const links: LinkItem[] = [
  { id: 0, name: "Articles", to: "/articles" },
  { id: 1, name: "About", to: "/about" },
  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: 'Analytics Roundtable',
  author: 'Analytics Roundtable',
  headerTitle: 'Analytics Roundtable',
  profileUrl: '/logo.svg',
  headerDescription: 'Open Community for Data Professionals',
  footerText: '© All rights reserved',
  language: 'en-us',
  locale: 'en-US',
  websiteUrl: 'analyticsroundtable.com',
};


export const footerNavigation: FooterNavItem[] = [
  // {
  //   name: "GitHub",
  //   href: "/",
  //   icon: Github,
  // },
  // {
  //   name: "Twitter",
  //   href: "/",
  //   icon: Twitter,
  // },
  {
    name: "Slack",
    href: "https://join.slack.com/t/analytics-roundtable/shared_invite/zt-1m5vonbd3-4~ZRqbz_sO4iWrn691DhwA",
    icon: Slack,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/groups/13904163/",
    icon: Linkedin,
  },
];

export const postsPerPage = 5;

export const email = "sppreus@gmail.com";
