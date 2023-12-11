import { component$, useSignal } from "@builder.io/qwik";
import styles from "./header.module.css";
import Image from '../../../public/logo.jpeg?jsx';


export default component$(() => {
  const isOpen = useSignal(false)
  console.log(isOpen)
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <Image  />
        </div>
        <ul class={styles.navigation}>
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
