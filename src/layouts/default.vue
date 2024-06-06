<script setup lang="ts"></script>
<template>
  <div class="flex min-h-screen flex-col">
    <header class="h-10 bg-slate-200">
      <nav>Navbar</nav>
    </header>
    <main class="flex flex-grow justify-center">
      <RouterView />
    </main>
    <footer class="h-10 bg-slate-200">
      <div>Footer</div>
    </footer>
  </div>
</template>

<style scoped></style>
