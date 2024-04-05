<template>
  <div class="size-full">
    <slot name="header" />
    <slot name="navigation" />

    <div class="size-full">
      <slot />
    </div>

    <slot name="footer" />
  </div>
</template>