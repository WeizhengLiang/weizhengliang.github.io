<script setup lang="ts">
  // Removed unused import

  const route = useRoute()

  // 强健的路径匹配逻辑：先尝试无尾斜杠，再兜底尝试有尾斜杠
  const { data: page } = await useAsyncData(route.path, async () => {
    const pathWithoutSlash = route.path.endsWith('/') ? route.path.slice(0, -1) : route.path
    const pathWithSlash = route.path.endsWith('/') ? route.path : route.path + '/'
    
    // 先尝试无尾斜杠的路径
    let result = await queryCollection('blog').path(pathWithoutSlash).first()
    
    // 如果找不到，再尝试有尾斜杠的路径
    if (!result) {
      result = await queryCollection('blog').path(pathWithSlash).first()
    }
    
    return result
  })
  
  if (!page.value)
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })
    
  // 使用找到的页面的实际路径进行 surround 查询
  const actualPath = page.value._path
  const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
    queryCollectionItemSurroundings('blog', actualPath, {
      fields: ['description']
    })
  )

  // Simplified navigation without UI Pro dependencies

  const title = page.value?.seo?.title || page.value?.title
  const description = page.value?.seo?.description || page.value?.description

  useSeoMeta({
    title,
    description,
    ogDescription: description,
    ogTitle: title
  })

  const articleLink = computed(() => `${window?.location}`)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
</script>

<template>
  <div
v-if="page"
class="min-h-screen"
>
    <div class="relative py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ULink
to="/blog"
class="text-sm flex items-center gap-1 mb-8"
>
          <UIcon name="lucide:chevron-left" />
          Blog
        </ULink>

        <div class="flex flex-col gap-3">
          <div
            class="flex text-xs text-muted items-center justify-center gap-2"
          >
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead"> - </span>
            <span v-if="page.minRead"> {{ page.minRead }} MIN READ </span>
          </div>
          <img
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-[300px] object-cover object-center"
          >
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <div class="flex flex-col items-center text-center">
              <img
                v-if="page.author?.avatar?.src"
                :src="page.author.avatar.src"
                :alt="page.author?.name"
                class="w-12 h-12 rounded-full mb-2"
              >
              <div
                v-if="page.author?.name"
                class="text-sm font-medium text-gray-900 dark:text-white"
              >
                {{ page.author.name }}
              </div>
              <div
                v-if="page.author?.description"
                class="text-xs text-gray-500 dark:text-gray-400"
              >
                {{ page.author.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12">
          <div
            class="prose prose-gray dark:prose-invert max-w-none blog-content"
          >
            <ContentRenderer
v-if="page.body"
:value="page"
/>
          </div>

          <div
            class="flex items-center justify-end gap-2 text-sm text-muted mt-8"
          >
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="
                copyToClipboard(articleLink, 'Article link copied to clipboard')
              "
            />
          </div>

          <div
v-if="surround"
class="mt-8"
>
            <div class="flex items-center justify-between">
              <div
v-if="surround.prev"
class="flex-1"
>
                <ULink
                  :to="surround.prev._path.endsWith('/') ? surround.prev._path : surround.prev._path + '/'"
                  class="flex items-center gap-2 text-sm"
                >
                  <UIcon name="lucide:chevron-left" />
                  {{ surround.prev.title }}
                </ULink>
              </div>
              <div
v-if="surround.next"
class="flex-1 text-right"
>
                <ULink
                  :to="surround.next._path.endsWith('/') ? surround.next._path : surround.next._path + '/'"
                  class="flex items-center gap-2 text-sm justify-end"
                >
                  {{ surround.next.title }}
                  <UIcon name="lucide:chevron-right" />
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
