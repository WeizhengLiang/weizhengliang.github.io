<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => {
    return queryCollection('index').first()
  })
  
  // Fallback data in case content loading fails in static build
  const fallbackData = {
    title: "Hey, I'm Weizheng Liang software engineer (game dev)",
    description: 'passionate about creating gameplay systems, tools, and experiences that put players first.',
    seo: {
      title: 'Weizheng Liang - Designer & Developer',
      description: "Welcome to my portfolio! I'm Weizheng Liang, a game developer and software engineer passionate about creating gameplay systems, tools, and experiences that put players first."
    },
    hero: {
      links: [
        { label: 'Get in Touch', to: '/about#contact', color: 'neutral' }
      ],
      images: [
        { src: '/img/investor.png', alt: 'Inner Investor' },
        { src: '/img/alien.png', alt: 'Knock Knock Alien' },
        { src: '/img/coverage.gif', alt: 'Dungball Domination' },
        { src: '/img/combat.gif', alt: 'Melee Combat System' },
        { src: '/img/neon.gif', alt: 'winter olympic' }
      ]
    },
    about: {
      title: 'About Me',
      description: "I'm Weizheng Liang — a game developer and software engineer passionate about creating gameplay systems, tools, and experiences that put players first."
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          position: 'Software engineer intern at',
          date: '2024',
          company: { name: 'Zhanxun Co., Ltd', url: '', color: '#00a0e9' }
        },
        {
          position: 'Software engineer intern at',
          date: '2023',
          company: { name: 'Bilin Planet Co., Ltd', url: '', color: '#1f286f' }
        },
        {
          position: 'Test automation engineer intern at',
          date: '2022',
          company: { name: 'AwesomeGo', url: '', color: '#5E6AD2' }
        }
      ]
    },
    blog: {
      title: 'Latest Articles',
      description: 'Some of my recent thoughts'
    },
    testimonials: []
  }

  // Use fallback data if content query fails
  const pageData = page.value || fallbackData

  useSeoMeta({
    title: pageData?.seo?.title || pageData?.title,
    ogTitle: pageData?.seo?.title || pageData?.title,
    description: pageData?.seo?.description || pageData?.description,
    ogDescription: pageData?.seo?.description || pageData?.description
  })
</script>

<template>
  <div
v-if="pageData"
class="min-h-screen"
>
    <LandingHero :page="pageData" />
    <section class="py-2 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="!pt-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <LandingAbout :page="pageData" />
          <LandingWorkExperience :page="pageData" />
        </div>
      </div>
    </section>
    <LandingBlog :page="pageData" />
    <LandingTestimonials :page="pageData" />
    <!-- <LandingFAQ :page /> -->
  </div>
</template>
