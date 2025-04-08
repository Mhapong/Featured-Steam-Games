<script>
  import "../style.css";
  import { fly } from "svelte/transition";
</script>

<div
  class="min-h-screen bg-gradient-to-tr from-gray-900 to-slate-800 overflow-x-hidden"
>
  <div class="container mx-auto px-4 py-16">
    <div
      class="flex flex-col items-center justify-center max-w-4xl mx-auto"
      in:fly={{ y: 20, duration: 800, delay: 200 }}
    >
      <h1
        class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 text-center"
      >
        SaTreem
      </h1>
      <p class="text-xl text-gray-300 mb-8 text-center max-w-2xl">
        Hello, welcome to SaTreem! This is a simple game store website
        {"(เว็บก็อป)"}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full">
        <div
          class="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-900/30 transition-all"
        >
          <h2 class="text-xl font-bold text-cyan-400 mb-3">New Releases</h2>
          <p class="text-gray-300 mb-4">
            Discover the latest games added to our catalog with exclusive launch
            discounts.{" (ไม่ต้อง login เข้าทางนี้เลยก็ได้)"}
          </p>
          <a href="/store" class="btn btn-outline btn-info w-full"
            >Browse Games</a
          >
        </div>

        <div
          class="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-900/30 transition-all"
        >
          <h2 class="text-xl font-bold text-cyan-400 mb-3">Login</h2>
          <p class="text-gray-300 mb-4">
            Sign in to your account to access exclusive features and
            personalized recommendations.{" (สร้างไว้ลองเล่นๆครั้งแรก)"}
          </p>
          <a href="/login" class="btn btn-outline btn-info w-full">Login</a>
        </div>
      </div>
    </div>
  </div>
</div>
