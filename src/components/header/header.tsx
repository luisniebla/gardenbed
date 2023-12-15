import { component$, useSignal } from "@builder.io/qwik";
import styles from "./header.module.css";
import Image from '../../../public/logo.jpeg?jsx';


export default component$(() => {
  return (
    <header class="bg-primary m-6">
      <div class="flex items-center justify-center">
        <div class="mr-2 max-w-xs">
          <Image  />
        </div>
        <button type="button" class="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg class="md:collapse justify-self-end h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="collapse h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="list-none gap-4 px-4 hidden md:flex">
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
        </div>



    </header>
  );
});
