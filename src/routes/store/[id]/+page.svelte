<script>
  let { data } = $props();
  console.log(data);
</script>

<div class="content">
  <div
    class="min-h-screen min-w-screen bg-gradient-to-tr from-cyan-950 to-cyan-700 overflow-x-hidden"
  >
    <div class="p-2.5 min-w-full">
      <div>
        <a href="/store">
          <button class="btn">Back</button>
        </a>
      </div>
      <div class="flex flex-col items-center justify-center w-full pt-6">
        <div class="rounded-md px-6 bg-[#1c1f26] text-white">
          <figure class="justify-start items-start flex flex-row mt-3 gap-3">
            <div class="flex-2/3 carousel rounded-2xl">
              {#if !data.screenshots}
                <img
                  src="https://cdn.cloudflare.steamstatic.com/steam/apps/10/ss_1.jpg"
                  alt="img"
                  class="w-full"
                />
              {:else}
                <div id="slide1" class="carousel-item relative w-full">
                  <img
                    src={data.screenshots[0].path_full}
                    alt="img"
                    class="w-full"
                  />
                  <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                  >
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                  <img src={data.screenshots[1].path_full} class="w-full" />
                  <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                  >
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                  <img src={data.screenshots[2].path_full} class="w-full" />
                  <div
                    class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                  >
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
                </div>
              {/if}
            </div>
            <div class="flex-1/3 p-5 items-start centent-start">
              <div class="self-start">
                <h1 class="text-4xl line-clamp-1 font-extrabold">
                  {data.name}
                </h1>
                <img
                  src={data.capsule_image}
                  alt="img"
                  class="overflow object-cover w-full h-full"
                />
                <div class=" line-clamp-5 mt-3">
                  {@html data.short_description}
                </div>
                <div class="flex flex-row gap-1.5 mt-3 line-clamp-1">
                  {#each data.genres as { description }}
                    <div class="badge badge-outline badge-info mt-3">
                      {description}
                    </div>
                  {/each}
                </div>
                <a
                  href={`https://store.steampowered.com/app/${data.steam_appid}`}
                >
                  <button class="btn w-full mt-3"> Visit Website </button>
                </a>
              </div>
            </div>
          </figure>
          <div class="flex flex-row gap-2.5 mt-5"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
