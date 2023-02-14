import { useState } from 'react';
import { Dialog } from '@headlessui/react';

import { LogoIcon } from './Logo';
import { Navigation } from '@components/Navigation';

function MenuIcon(props) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      {...props}
    >
      <path d='M4 7h16M4 12h16M4 17h16' />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      {...props}
    >
      <path d='M5 5l14 14M19 5l-14 14' />
    </svg>
  );
}

export function MobileNavigation({ navigation }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='relative'
        aria-label='Open navigation'
      >
        <MenuIcon className='stroke-gray-11 h-6 w-6' />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className='bg-gray-9 fixed inset-0 z-50 flex items-start overflow-y-auto pr-10 backdrop-blur lg:hidden'
        aria-label='Navigation'
      >
        <Dialog.Panel className='bg-gray-2 min-h-full w-full max-w-xs px-4 pt-5 pb-12 sm:px-6'>
          <div className='flex items-center'>
            <button type='button' onClick={() => setIsOpen(false)} aria-label='Close navigation'>
              <CloseIcon className='stroke-gray-5 h-6 w-6' />
            </button>
            <a href='/' className='ml-6' aria-label='Home page'>
              <div className='h-9 w-9 bg-[url("/Recastui_Icon_light.svg")] dark:bg-[url("/Recastui_Icon_dark.svg")] lg:hidden' />
            </a>
          </div>
          <Navigation navigation={navigation} className='mt-5 px-1' />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
