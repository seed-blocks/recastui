import { cva } from 'class-variance-authority';
import { colors, solidTextMapping, SolidTextMappingType, ThemeColors } from './colors';

export enum ButtonVariantTypes {
  solid = 'solid',
  outline = 'outline',
  ghost = 'ghost',
}

const variantClasses = {
  // Need to explicitly defined color variation classes for individual color as tailwindcss compiler cannot detect dynamically formed classes
  solid: {
    mono: 'bg-mono-9 hover:bg-mono-10 text-white',
    tomato: 'bg-tomato-9 hover:bg-tomato-10 text-white',
    red: 'bg-red-9 hover:bg-red-10 text-white',
    crimson: 'bg-crimson-9 hover:bg-crimson-10 text-white',
    pink: 'bg-pink-9 hover:bg-pink-10 text-white',
    plum: 'bg-plum-9 hover:bg-plum-10 text-white',
    purple: 'bg-purple-9 hover:bg-purple-10 text-white',
    violet: 'bg-violet-9 hover:bg-violet-10 text-white',
    indigo: 'bg-indigo-9 hover:bg-indigo-10 text-white',
    blue: 'bg-blue-9 hover:bg-blue-10 text-white',
    cyan: 'bg-cyan-9 hover:bg-cyan-10 text-white',
    teal: 'bg-teal-9 hover:bg-teal-10 text-white',
    green: 'bg-green-9 hover:bg-green-10 text-white',
    grass: 'bg-grass-9 hover:bg-grass-10 text-white',
    orange: 'bg-orange-9 hover:bg-orange-10 text-white',
    brown: 'bg-brown-9 hover:bg-brown-10 text-white',
    sky: 'bg-sky-9 hover:bg-sky-10 text-black',
    mint: 'bg-mint-9 hover:bg-mint-10 text-black',
    lime: 'bg-lime-9 hover:bg-lime-10 text-black',
    yellow: 'bg-yellow-9 hover:bg-yellow-10 text-black',
    amber: 'bg-amber-9 hover:bg-amber-10 text-black',
    gold: 'bg-gold-9 hover:bg-gold-10 text-white',
    bronze: 'bg-bronze-9 hover:bg-bronze-10 text-white',
    error: 'bg-red-9 hover:bg-red-10 text-white',
    info: 'bg-sky-9 hover:bg-sky-10 text-black',
    success: 'bg-green-9 hover:bg-green-10 text-white',
    warning: 'bg-amber-9 hover:bg-amber-10 text-black',
  },
  outline: {
    mono: 'bg-mono-3 hover:bg-mono-4 text-mono-9 border-mono-9',
    tomato: 'bg-tomato-3 hover:bg-tomato-4 text-tomato-9 border-tomato-9',
    red: 'bg-red-9 hover:bg-red-10 text-white border-red-9',
    crimson: 'bg-crimson-9 hover:bg-crimson-10 text-white border-crimson-9',
    pink: 'bg-pink-9 hover:bg-pink-10 text-white border-pink-9',
    plum: 'bg-plum-9 hover:bg-plum-10 text-white border-plum-9',
    purple: 'bg-purple-9 hover:bg-purple-10 text-white border-purple-9',
    violet: 'bg-violet-9 hover:bg-violet-10 text-white border-violet-9',
    indigo: 'bg-indigo-9 hover:bg-indigo-10 text-white border-indigo-9',
    blue: 'bg-blue-9 hover:bg-blue-10 text-white border-blue-9',
    cyan: 'bg-cyan-9 hover:bg-cyan-10 text-white border-cyan-9',
    teal: 'bg-teal-9 hover:bg-teal-10 text-white border-teal-9',
    green: 'bg-green-9 hover:bg-green-10 text-white border-green-9',
    grass: 'bg-grass-9 hover:bg-grass-10 text-white border-grass-9',
    orange: 'bg-orange-9 hover:bg-orange-10 text-white border-orange-9',
    brown: 'bg-brown-9 hover:bg-brown-10 text-white border-brown-9',
    sky: 'bg-sky-9 hover:bg-sky-10 text-black border-sky-9',
    mint: 'bg-mint-9 hover:bg-mint-10 text-black border-mint-9',
    lime: 'bg-lime-9 hover:bg-lime-10 text-black border-lime-9',
    yellow: 'bg-yellow-9 hover:bg-yellow-10 text-black border-yellow-9',
    amber: 'bg-amber-9 hover:bg-amber-10 text-black border-amber-9',
    gold: 'bg-gold-9 hover:bg-gold-10 text-white border-gold-9',
    bronze: 'bg-bronze-9 hover:bg-bronze-10 text-white border-bronze-9',
    error: 'bg-red-9 hover:bg-red-10 text-white border-red-9',
    info: 'bg-sky-9 hover:bg-sky-10 text-black border-sky-9',
    success: 'bg-green-9 hover:bg-green-10 text-white border-green-9',
    warning: 'bg-amber-9 hover:bg-amber-10 text-black border-amber-9',
  },
  ghost: {
    mono: 'hover:bg-mono-3 text-mono-9',
    tomato: 'hover:bg-tomato-3 text-tomato-9',
    red: 'hover:bg-red-3 text-red-9',
    crimson: 'hover:bg-crimson-3 text-crimson-9',
    pink: 'hover:bg-pink-3 text-pink-9',
    plum: 'hover:bg-plum-3 text-plum-9',
    purple: 'hover:bg-purple-3 text-purple-9',
    violet: 'hover:bg-violet-3 text-violet-9',
    indigo: 'hover:bg-indigo-3 text-indigo-9',
    blue: 'hover:bg-blue-3 text-blue-9',
    cyan: 'hover:bg-cyan-3 text-cyan-9',
    teal: 'hover:bg-teal-3 text-teal-9',
    green: 'hover:bg-green-3 text-green-9',
    grass: 'hover:bg-grass-3 text-grass-9',
    orange: 'hover:bg-orange-3 text-orange-9',
    brown: 'hover:bg-brown-3 text-brown-9',
    sky: 'hover:bg-sky-3 text-sky-9',
    mint: 'hover:bg-mint-3 text-mint-9',
    lime: 'hover:bg-lime-3 text-lime-9',
    yellow: 'hover:bg-yellow-3 text-yellow-9',
    amber: 'hover:bg-amber-3 text-amber-9',
    gold: 'hover:bg-gold-3 text-gold-9',
    bronze: 'hover:bg-bronze-3 text-bronze-9',
    error: 'hover:bg-red-3 text-red-9',
    info: 'hover:bg-sky-3 text-sky-9',
    success: 'hover:bg-green-3 text-green-9',
    warning: 'hover:bg-amber-3 text-amber-9',
  },
};

const getColorVariants = (type: ButtonVariantTypes) =>
  colors.map((color) => {
    return {
      variant: ButtonVariantTypes[type],
      color: color as ThemeColors,
      class: variantClasses[type][color],
    };
  });

const compoundVariants = [
  ...getColorVariants(ButtonVariantTypes.solid),
  ...getColorVariants(ButtonVariantTypes.outline),
  ...getColorVariants(ButtonVariantTypes.ghost),
];

// console.log('compoundVariants', compoundVariants);

export const button = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'text-center',
    'transition-all',
    'font-semibold',
    'border',
    'border-transparent',
    'overflow-hidden',
  ],

  {
    variants: {
      variant: {
        solid: '',
        outline: '',
        ghost: '',
      },
      // Explicitly define empty color classes for cva typings
      color: {
        mono: '',
        tomato: '',
        red: '',
        crimson: '',
        pink: '',
        plum: '',
        purple: '',
        violet: '',
        indigo: '',
        blue: '',
        cyan: '',
        teal: '',
        green: '',
        grass: '',
        orange: '',
        brown: '',
        sky: '',
        mint: '',
        lime: '',
        yellow: '',
        amber: '',
        gold: '',
        bronze: '',
        error: '',
        info: '',
        success: '',
        warning: '',
      },
      fullWidth: { true: 'w-full' },
      disabled: {
        true: 'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-inherit',
      },
      pill: { true: 'rounded-full' },
      rounded: { true: 'rounded' },
      square: {
        xs: 'text-xs w-9 h-9',
        sm: 'text-sm w-10 h-10',
        base: 'text-base w-11 h-11',
        lg: 'text-base w-12 h-12',
        xl: 'text-lg w-14 h-14',
      },
      size: {
        xs: 'text-xs px-3.5 py-1',
        sm: 'text-sm px-4 py-1.5',
        base: 'text-base px-4.5 py-2',
        lg: 'text-base px-5 py-2',
        xl: 'text-lg px-7 py-2.5',
      },
    },
    compoundVariants,
    defaultVariants: {
      variant: 'solid',
      color: 'mono',
      size: 'base',
    },
  },
);

export type ButtonTheme = typeof button;
