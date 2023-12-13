import { component$, useSignal } from "@builder.io/qwik";
import styles from "./header.module.css";
import Image from '../../../public/logo.jpeg?jsx';


export default component$(() => {
  const isOpen = useSignal(false)
  console.log(isOpen)
  return (
    <header class=" bg-primary p-6">
      <div class="flex justify-around align-baseline items-center max-w-6xl">
        <div class="max-w-sm mr-2">
          <Image  />
        </div>
      <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
          <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
        <ul class='flex gap-4'>
          <li>
            <a
              href="/"
              target="_self"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              target="_self"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              target="_self"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://www.etsy.com/shop/tinybiotics/?etsrc=sdt"
              target="_target"
            >
              Shop
            </a>
          </li>
        </ul>
        <div  class='hamburger' onClick$={() => {
          isOpen.value = !isOpen.value
        }}>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
        </div>
      </div>
      {isOpen.value && (
        <div class={styles.overlay}>
          <div>X</div>
          <li>
            <a
              href="/"
              target="_self"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              target="_self"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              target="_self"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://www.etsy.com/shop/tinybiotics/?etsrc=sdt"
              target="_target"
            >
              Shop
            </a>
          </li>
        </div>
      )}

    </header>
  );
});
