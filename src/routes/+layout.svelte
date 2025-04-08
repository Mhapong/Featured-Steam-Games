<script lang="ts">
  import "../style.css";
  let { children } = $props();
</script>

<header class="sticky top-0 z-50 w-full">
  <nav
    class="flex flex-row gap-2.5 bg-black text-white p-2 w-full items-center"
  >
    <h1 class="text-4xl font-extrabold pr-2.5">SaTreem</h1>
    <div class="inline-flex gap-2.5 items-center">
      <a href="/"><p>Home</p></a>
      <p><a href="/login">Login</a></p>
      <p><a href="/store">Store</a></p>
    </div>
  </nav>
</header>

<div class="w-full overflow-x-hidden">
  {@render children()}
</div>
