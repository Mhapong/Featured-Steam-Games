<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import { goto } from "$app/navigation";
  import login from "../../image/login.jpg";
  import axios from "axios";

  let username: string = $state("");
  let password: string = $state("");
  let loginPromise = $state(null);

  let users = $state([]);

  const fetchUser = async () => {
    const res = await axios
      .get("https://67e395fc2ae442db76d0a6e6.mockapi.io/users")
      .catch((error) => {
        alert("Failed to fetch users");
      });
    console.log(res.data);
    users.push(res.data);
  };

  $effect(() => {
    fetchUser();
  });

  function handleLogin(e) {
    e.preventDefault();
    loginPromise = new Promise((fulfil, reject) => {
      setTimeout(() => {
        if (
          users.some((user) =>
            user.some((u) => u.username === username && u.password === password)
          )
        ) {
          fulfil("Logged in");
          goto("/store");
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000);
    });
  }
</script>

<div
  class="flex flex-col items-center justify-center min-h-screen max-h-screen bg-gradient-to-tr from-gray-900 to-slate-800"
>
  <div
    class="flex flex-row bg-[#1c1f26] text-white rounded-lg h-8/12 shadow-lg mx-auto"
  >
    <figure class="w-2/5 rounded-l-2xl">
      <img
        src={login}
        alt="img"
        class="rounded-l-2xl overflow h-full object-cover"
      />
    </figure>
    <div class="w-3/5 p-4">
      <div
        class=" card-title mb-3 items-center justify-center flex flex-col"
        in:fly={{ y: 20, duration: 100, opacity: 1 }}
        out:slide={{ duration: 200 }}
      >
        <h1 class="text-3xl font-bold text-center">Sign In</h1>
        <h5 class="text-lg font-medium">
          Please login in before using this website
        </h5>
      </div>

      <div class="card-body flex flex-col items-center justify-center gap-2.5">
        <form class="flex flex-col text-lg" onsubmit={handleLogin}>
          <label>
            Username
            <input bind:value={username} class="input" required />
          </label>

          <label>
            Password
            <input
              type="password"
              bind:value={password}
              class="input"
              required
            />
          </label>
          <button type="submit" class="btn btn-outline btn-info w-full mt-2"
            >Log in</button
          >
          <p>
            <a href="/signup">Don't have an account?</a>
          </p>
        </form>

        {#if loginPromise}
          {#await loginPromise}
            <p>Please wait...</p>
          {:then message}
            <p>{message}</p>
          {:catch error}
            <p>{error.message}</p>
          {/await}
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
</style>
