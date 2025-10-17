<script setup lang="ts">
  // Removed unused import

  const route = useRoute()

  // Normalize path to handle trailing slash inconsistency
  const normalizePath = (path: string) => {
    // Remove trailing slash for consistent matching
    return path.endsWith('/') ? path.slice(0, -1) : path
  }

  const normalizedPath = normalizePath(route.path)

  const { data: page } = await useAsyncData(normalizedPath, async () => {
    // Try without trailing slash first
    let result = await queryCollection('projects').path(normalizedPath).first()

    // If not found, try with trailing slash as fallback
    if (!result) {
      result = await queryCollection('projects').path(`${normalizedPath}/`).first()
    }

    return result
  })

  if (!page.value)
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })

  const title = page.value?.title
  const description = page.value?.description

  useSeoMeta({
    title,
    description,
    ogDescription: description,
    ogTitle: title
  })

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
to="/projects"
class="text-sm flex items-center gap-1 mb-8"
>
          <UIcon name="lucide:chevron-left" />
          Projects
        </ULink>

        <div class="flex flex-col gap-3">
          <div
            class="flex text-xs text-muted items-center justify-center gap-2"
          >
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
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
        </div>

        <div class="max-w-3xl mx-auto mt-12">
          <div class="flex items-center justify-center gap-4">
            <UButton
              v-if="page.code"
              :to="page.code"
              target="_blank"
              color="primary"
              variant="outline"
            >
              View Source Code
            </UButton>
            <UButton
              v-if="page.alive"
              :to="page.alive"
              target="_blank"
              color="primary"
            >
              View Live Demo
            </UButton>
          </div>

          <div class="flex items-center justify-center gap-2 mt-8">
            <span class="text-sm text-muted">Tags:</span>
            <div class="flex gap-2">
              <UBadge
                v-for="tag in page.tags"
                :key="tag"
                variant="soft"
                color="neutral"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
