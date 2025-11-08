<script setup lang="ts">
  import type { NuxtError } from '#app'

  defineProps({
    error: {
      type: Object as PropType<NuxtError>,
      required: true
    }
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    }
  })

  useSeoMeta({
    title: 'Page not found',
    description: 'We are sorry but this page could not be found.'
  })
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <div class="min-h-screen">
      <UContainer>
        <div class="py-16 text-center">
          <div class="max-w-md mx-auto">
            <div class="text-6xl mb-4">
              😵
            </div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{
                error.statusCode === 404
                  ? 'Page Not Found'
                  : 'Something went wrong'
              }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{
                error.statusCode === 404
                  ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
                  : 'We encountered an unexpected error. Please try again later.'
              }}
            </p>
            <UButton
              to="/"
              color="primary"
            >
              Go Home
            </UButton>
          </div>
        </div>
      </UContainer>
    </div>

    <AppFooter />
  </div>
</template>
