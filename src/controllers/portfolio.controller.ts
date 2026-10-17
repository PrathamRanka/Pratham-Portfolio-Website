'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import type { NavItemModel } from '@/models/portfolio.model';

export const navItems: NavItemModel[] = [
  { id: 'top', label: 'Home', href: '#top', iconName: 'home' },
  { id: 'experience', label: 'Experience', href: '#experience', iconName: 'experience' },
  { id: 'projects', label: 'Projects', href: '#projects', iconName: 'projects' },
  { id: 'open-source', label: 'GitHub', href: '#open-source', iconName: 'opensource' },
  { id: 'contact', label: 'Contact', href: '#contact', iconName: 'contact' },
];

export function useNavigationController() {
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'experience', 'projects', 'open-source', 'hackathons', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    activeSection,
    navItems,
    scrollTo,
  };
}

export function useExperienceController(initialExpandedIndex: number | null = null) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(initialExpandedIndex);

  const toggleExpand = useCallback((index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  }, []);

  return {
    expandedIndex,
    toggleExpand,
  };
}


