import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isClient = () => window !== undefined;

export function cl(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setThemeColorMode() {
  if (isClient()) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function updateTheme(savedTheme?: string) {
      let theme = 'system';
      try {
        if (!savedTheme) {
          savedTheme = window.localStorage.theme;
        }
        if (savedTheme === 'dark') {
          theme = 'dark';
          document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
          theme = 'light';
          document.documentElement.classList.remove('dark');
        } else if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch {
        theme = 'light';
        document.documentElement.classList.remove('dark');
      }
      return theme;
    }

    function updateThemeWithoutTransitions(savedTheme?: string) {
      updateTheme(savedTheme);
      document.documentElement.classList.add('[&_*]:!transition-none');
      window.setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none');
      }, 0);
    }

    document.documentElement.setAttribute('data-theme', updateTheme());

    const themeChangeObserver = new MutationObserver(([{ oldValue }]) => {
      const newValue = document.documentElement.getAttribute('data-theme') ?? 'light';
      if (newValue !== oldValue) {
        try {
          window.localStorage.setItem('theme', newValue);
        } catch {}
        updateThemeWithoutTransitions(newValue);
      }
    });
    themeChangeObserver.observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributeOldValue: true,
    });

    mediaQuery.addEventListener('change', () => updateThemeWithoutTransitions());
    window.addEventListener('storage', () => updateThemeWithoutTransitions());
  }
}
