<script>
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";

  let { data } = $props();
  console.log(data.data);

  function navigateToGame(id) {
    goto(`/store/${id}`);
  }
</script>

<div id="content">
  <div
    class="min-h-screen bg-gradient-to-tr from-cyan-950 to-cyan-700 overflow-x-hidden"
  >
    <div class="p-2.5">
      <div class="flex flex-col items-center justify-center w-full pt-6">
        <h1 class="text-4xl text-center font-extrabold text-white">
          Featured Steam Games
        </h1>
      </div>
      <div class=" bg-[#161920] rounded-xl mx-7 mt-7">
        <div class="p-6 text-white grid grid-cols-1 lg:grid-cols-3">
          {#each data.data as { id, name, image, price, original_price, discount }}
            <a href={`/store/${id}`}>
              <div
                class="card bg-[#1c1f26] cursor-pointer rounded-lg p-4 m-4 transition-all hover:-translate-y-1"
                in:fly={{ y: 20, duration: 100, opacity: 1 }}
              >
                <figure>
                  <img src={image} alt="img" class="overflow object-cover" />
                </figure>
                <h4 class="card-title line-clamp-1">{name}</h4>
                <div class="card-body p-0">
                  <div class=" flex flex-row justify-between text-md">
                    <b class="w-fit">Price:</b>
                    {#if original_price !== "Free"}//lowercase ก่อน
                      <div>
                        <del class="justify-end w-fit">
                          {#if price === original_price}
                            {""}
                          {:else}
                            {original_price / 100} THB
                          {/if}
                        </del>
                        <b class="justify-end w-fit">{price / 100} THB</b>
                      </div>
                    {:else}
                      <b class="justify-end w-fit"> Free </b>
                    {/if}
                  </div>
                  <div class=" flex flex-row justify-between text-md">
                    <b class="w-fit">Discount:</b>
                    <b class="justify-end w-fit"
                      >{discount === 0 ? "ไม่ลดโวย" : `${discount}%`}</b
                    >
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .card:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .card-title {
    margin-top: 0.75rem;
    font-weight: bold;
  }

  .card-body {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #cbd5e0;
  }
</style>
