/// <reference types="astro/client" />

declare module 'playcanvas/build/playcanvas.mjs' {
  export * from 'playcanvas';
  export { default } from 'playcanvas'; // probably not needed
}