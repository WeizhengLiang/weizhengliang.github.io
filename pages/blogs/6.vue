<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CodeBlock from '@/components/ui/code-block'
import 'highlight.js/styles/github-dark.css'
import VueMermaidString from 'vue-mermaid-string'

import { onMounted } from 'vue'
defineExpose({ VueMermaidString })

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('h2, .blog-main-container > div').forEach(el => {
    observer.observe(el)
  })
})

// 主图
const MainBG = {
  url: '/images/InnerInvestor/hero2.png'  // 替换为项目的主视觉图
}

// 引用图像
const QuoteBG = {
  url: '/images/InnerInvestor/visual_metaphors.png'  // 市场崩盘的动画GIF
}

// Page Title Info
const title = {
  title: 'Inner Investor: When Your Emotions Run the Market',
  date: '2025',
  image: MainBG.url
}

// Project Meta Information
const items = [
  {type: 'Development Time', text: ['April 2025 - May 2025']},
  {type: 'Tech Stack', text: ['Unity', 'C#', 'Figma', 'Adobe Illustrator']},
  {type: 'Roles', text: ['Game Design', 'Programming', 'UI Implementation', 'Sound Design', 'Writing & Narrative']},
  {type: 'Genre', text: ['Emotion System Design', 'Behavioral Economics Game', 'Satirical Narrative']}
]

// Project Introduction
const intro = "You can't control the market. You can barely control yourself. Inner Investor is an interactive metaphor that exposes our cognitive biases in financial decision-making. This project blends behavioral economics research, satirical storytelling, and a dynamic emotion system to create an experience that's both educational and thought-provoking."

// Core Features
const coreFeatures = [
  {
    title: 'Emotion Card Trading System',
    description: 'Players invest using emotion cards like "Fear," "Excitement," and "Doubt." Each card secretly embodies a specific cognitive bias, only revealed at the end of the game—making hidden emotional influence on decisions both accessible and entertaining.',
    media: { url: '/images/InnerInvestor/emotion_cards.gif', des: 'Emotion card trading animation' }
  },
  {
    title: 'Absurd & Humorous Investment Scenarios',
    description: "From spicy milk tea to banana phones, the game's over-the-top scenarios let players experience the ridiculousness of the market in a playful, non-preachy way.",
    media: { url: '/images/InnerInvestor/scenario.png', des: 'Absurd investment scenes illustration' }
  },
  {
    title: '"Inner Investor" Narrative Experience',
    description: 'Your "Inner Investor" is a cartoonish, expressive character who pops up with dramatic sound effects and speech bubbles whenever you make a decision—delivering witty commentary and turning your inner conflict into a comic dialogue with yourself.',
    media: { url: '/images/InnerInvestor/inner_monologue.gif', des: 'Inner narrative interaction example' }
  },
  {
    title: 'Personalized Bias Report',
    description: 'At the end, you receive a humorous, data-driven summary of your investment biases—complete with stats and playful tags—to spark self-reflection.',
    media: { url: '/images/InnerInvestor/game_summary.png', des: 'Personalized bias report example' }
  }
]

// Metaphor & Design Insights
const designInsights = [
  {
    title: 'Fun, Not Forced Learning',
    description: 'The game uses comedy and exaggeration to reveal cognitive biases, letting players discover irrational investment patterns through laughter—not lectures.',
    quote: "Players discover their blind spots while \"laughing\", not while being lectured.",
    media: { url: '/images/InnerInvestor/playing_action.gif', des: 'Player humor experience screenshot' }
  },
  {
    title: 'Hidden Bias Mechanics',
    description: 'Cognitive biases are subtly embedded behind emotion cards, only revealed at the end—so players absorb behavioral economics concepts through play, not dry definitions.',
    quote: "The deeper the hidden bias, the greater the 'aha' moment.",
    media: { url: '/images/InnerInvestor/greed.png', des: 'Hidden bias reveal animation' }
  },
  {
    title: 'Emotion & Data-Driven Self-Insight',
    description: 'By analyzing your emotional choices, finances, and "rationality" score, the game delivers a blend of humor and personal insight at the end.',
    quote: "When data meets emotion, self-discovery gets interesting.",
    media: { url: '/images/InnerInvestor/chart.png', des: 'Personal data analysis page example' }
  }
]

// Development Process
const developmentProcess = [
  {
    title: 'Research & Ideation',
    date: 'April 10, 2025 – April 20, 2025',
    description: "Inspired by recent economic turmoil and my fascination with market behavior, I began Duke University's Behavioral Finance course with Prof. Emma Rasiel. After reviewing key literature, I drafted the game's concept and core mechanics.",
    milestones: [
      'Completed Behavioral Finance course by Prof. Emma Rasiel (Duke University)',
      'Reviewed key literature:',
      '—— Prospect Theory: An Analysis of Decision under Risk (Kahneman & Tversky)',
      '—— Judgment under Uncertainty: Heuristics and Biases (Tversky & Kahneman)',
      '—— Can Prospect Theory Explain Risk-Seeking Behavior by Terminally Ill Patients? (Emma Rasiel et al.)',
      'Designed the game prototype and defined core systems'
    ]
  },
  {
    title: 'Narrative & UI Design',
    date: 'April 17, 2025 – April 22, 2025',
    description: "Developed satirical narrative voices and a visual language reflecting investor psychology. Designed an adaptive UI system that changes with player emotions.",
    milestones: [
      'Completed core narrative and character voices',
      'Established color theory system based on emotion states',
      'Prototyped adaptive UI elements'
    ]
  },
  {
    title: 'System Implementation & Testing',
    date: 'April 19, 2025 – April 25, 2025',
    description: "Built the full game system and conducted multiple user tests—focusing on whether players grasped the game's metaphors and satirical intent. Tuned the emotion system and visual feedback based on player feedback.",
    milestones: [
      'Implemented core game loop',
      'Ran 10 user tests and collected data',
      'Improved clarity of bias card system based on feedback'
    ]
  }
]

// User Feedback & Insights
const userFeedback = [
  {
    quote: "This game made me realize how irrational I am with money, even though I always thought I was cool and logical.",
    name: "Jason Luo",
    insight: "Players often shift from confidence in their decision-making to recognizing their own biases."
  },
  {
    quote: "The way the visuals changed really showed me how my emotions color the same information.",
    name: "Joshua Berley",
    insight: "The adaptive UI effectively communicates the impact of emotion on cognition—even when players aren't consciously aware."
  },
  {
    quote: "What impressed me most is the game never judged my decisions—it let me discover for myself why I made them.",
    name: "Mark Zhu",
    insight: "A non-judgmental reflection system encourages deeper self-analysis than traditional teaching methods."
  }
]

// Learning Outcomes
const learningOutcomes = [
  "Hands-on experience transforming behavioral finance theory into playable mechanics",
  "Systemic thinking in designing emotion-bias-action chains",
  "Communicating complex psychological concepts through humor and narrative",
  "Sharpened ability to identify cognitive biases through user testing",
  "Understanding how to unify system, art, and writing to express a theme"
]

// Future Plans
const futurePlans = [
  {
    title: "Expand as an 'Emotion Education Tool'",
    description: "Grow Inner Investor into a tool for emotion recognition and behavioral reflection—useful for financial education, emotional literacy, or as a supplement to high school economics classes.",
  },
  {
    title: "Multiplayer Mode",
    description: "Develop a multiplayer version to show how group psychology shapes individual decisions and market dynamics—simulating herd mentality and bubbles.",
  },
  {
    title: "Research Collaboration",
    description: "Partner with behavioral economics researchers to use game data for real studies—gathering decision-making patterns through play.",
  }
]

// 链接
const links = {
  demo: 'https://play.unity.com/en/games/a0472e61-4ee9-45c1-a307-1ea9ac62a5e8/inner-investor',
  source: 'https://github.com/WeizhengLiang/InnerInvestor'
}

// Emotion System Mermaid Diagram (translated)
const emotionSystemDiagram = ref(`
graph LR
    MarketEvent(Market Event) --> EmotionSystem(Emotion System)
    PlayerAction(Player Action) --> EmotionSystem
    
    subgraph Emotion System
        EmotionSystem --> Joy(Joy)
        EmotionSystem --> Greed(Greed)
        EmotionSystem --> Fear(Fear)
    end
    
    Joy --> DecisionBias(Decision Bias)
    Greed --> DecisionBias
    Fear --> DecisionBias
    
    DecisionBias --> |influences| UI(UI Changes)
    DecisionBias --> |influences| Narrative(Narrative)
    DecisionBias --> |influences| MarketSimulation(Market Simulation)
    
    MarketSimulation --> |new| MarketEvent
    
    style MarketEvent fill:#f9d5e5,stroke:#333,stroke-width:1px
    style EmotionSystem fill:#eeac99,stroke:#333,stroke-width:1px
    style PlayerAction fill:#f9d5e5,stroke:#333,stroke-width:1px
    style DecisionBias fill:#e06377,stroke:#333,stroke-width:1px
    style UI fill:#c83349,stroke:#333,stroke-width:1px
    style Narrative fill:#c83349,stroke:#333,stroke-width:1px
    style MarketSimulation fill:#c83349,stroke:#333,stroke-width:1px
    style Joy fill:#5b9aa0,stroke:#333,stroke-width:1px
    style Greed fill:#d6eadf,stroke:#333,stroke-width:1px
    style Fear fill:#f9e07f,stroke:#333,stroke-width:1px
`)

// Team Structure Data
const teamStructure = [
  {
    name: "Weizheng Liang",
    role: "Project Lead & Game Designer",
    responsibilities: [
      "System Design",
      "Emotion System Implementation",
      "Programming",
      "UI/UX Design"
    ],
    avatar: "/images/self_image.png"
  },
  {
    name: "Yutong Han",
    role: "Illustrator & Visual Designer",
    responsibilities: [
      "Character Design",
      "Emotion Card Design",
      "Visual Effects",
      "UI Resources"
    ],
    avatar: "/images/yutong_image.jpg"
  }
]

// 页面操作函数
const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="items-center">
    <!-- 标题部分 -->
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <!-- Action Buttons -->
    <div class="flex justify-end gap-4 mt-6">
      <Button @click="openLink(links.source)" variant="outline">
        View Source Code
      </Button>
      <Button @click="openLink(links.demo)">
        Play Demo
      </Button>
    </div>

    <div class="blog-main-container">
      <!-- 主图 -->
      <!-- <BlogImage :image="MainBG" /> -->

      <!-- Core Quote -->
      <div class="w-full bg-neutral-900 text-white p-8 rounded-lg my-16 text-center">
        <h2 class="font-serif italic text-2xl lg:text-3xl mb-4">"You can't control the market. You can barely control yourself."</h2>
        <p class="text-neutral-400">— Core principle of Inner Investor</p>
      </div>

      <!-- Core Features -->
      <div class="section-container">
        <h2 class="section-title">Core Features</h2>
        <div class="section-content">
          <div class="grid grid-cols-2 gap-8">
            <div v-for="feature in coreFeatures" :key="feature.title" class="mb-8">
              <h3 class="font-bold">{{ feature.title }}</h3>
              <p class="mb-4">{{ feature.description }}</p>
              <img 
                v-if="feature.media" 
                :src="feature.media.url" 
                :alt="feature.media.des"
                class="rounded-lg shadow-lg mx-auto"
                style="width: 480px; height: auto;"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Game Flow Diagram -->
      <div class="section-container">
        <h2 class="section-title">Game Flow Diagram</h2>
        <div class="section-content bg-white rounded-lg shadow-lg p-6 w-full">
          <VueMermaidString 
            :value="`
    graph LR
    A[Market News: Spicy Milk Tea Trend] --> B[Emotion Advisors Appear]
    B --> C[Player Selects Emotion]
    C --> D[System Calculates Outcome]
    D --> E[Update Funds & Show Results]
    E --> F{5 Rounds Completed?}
    F -- No --> A
    F -- Yes --> G[Show Summary & Bias Report]

    style A fill:#ffe6cc,stroke:#e67e22,stroke-width:2px
    style B fill:#f9d5ec,stroke:#d36fa4,stroke-width:2px
    style C fill:#d5f4e6,stroke:#44bba4,stroke-width:2px
    style D fill:#fff5ba,stroke:#f4b400,stroke-width:2px
    style E fill:#fceade,stroke:#de7a22,stroke-width:2px
    style F fill:#dcd6f7,stroke:#5d5dff,stroke-width:2px
    style G fill:#e4f9f5,stroke:#00bcd4,stroke-width:2px
            `"
            :config="{
              theme: 'default',
              themeVariables: {
                fontSize: '24px',
                fontFamily: 'Inter, system-ui, sans-serif',
              }
            }"
          ></VueMermaidString>
        </div>
      </div>

      <!-- Design Insights -->
      <div class="section-container">
        <h2 class="section-title">Design Insights</h2>
        <div class="section-content">
          <div class="space-y-12">
            <div v-for="insight in designInsights" :key="insight.title">
              <h3 class="font-bold text-xl mb-4">{{ insight.title }}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p class="mb-4">{{ insight.description }}</p>
                  <div class="bg-neutral-100 p-4 rounded-md italic border-l-4 border-neutral-400">
                    "{{ insight.quote }}"
                  </div>
                </div>
                <div>
                  <img 
                    :src="insight.media.url" 
                    :alt="insight.media.des"
                    class="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Emotion System Diagram -->
      <div class="section-container">
        <h2 class="section-title">Emotion System Workflow</h2>
        <div class="section-content bg-white rounded-lg shadow-lg p-6 w-full">
          <VueMermaidString 
            :value="emotionSystemDiagram"
            :config="{
              theme: 'default',
              themeVariables: {
                fontSize: '16px',
                fontFamily: 'Inter, system-ui, sans-serif',
              }
            }"
          ></VueMermaidString>
        </div>
      </div>

      <!-- Development Timeline -->
      <div class="section-container">
        <h2 class="section-title">Development Journey</h2>
        <div class="section-content">
          <div class="relative">
            <div class="absolute h-full w-1 bg-neutral-200 left-1/2 transform -translate-x-1/2"></div>
            <div class="space-y-20">
              <div v-for="(phase, index) in developmentProcess" 
                   :key="phase.title"
                   class="relative"
              >
                <div class="flex items-center">
                  <!-- Timeline Node -->
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-500 rounded-full"></div>
                  
                  <!-- Content -->
                  <div :class="[
                    'w-5/12',
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'
                  ]">
                    <h4 class="font-bold text-lg mb-2">{{ phase.title }}</h4>
                    <p class="text-sm text-gray-600 mb-2">{{ phase.date }}</p>
                    <p class="text-gray-700">{{ phase.description }}</p>
                    <ul class="mt-4 space-y-1 text-sm">
                      <li v-for="milestone in phase.milestones" 
                          :key="milestone"
                          class="text-gray-600"
                      >
                        • {{ milestone }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Structure Section -->
      <div class="section-container">
        <h2 class="section-title">Team Structure</h2>
        <div class="section-content relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 overflow-hidden">
          <!-- 背景图片和半透明遮罩 -->
          <div class="absolute inset-0 z-0 overflow-hidden">
            <img src="/images/you_me.jpg" alt="Team background" class="w-full h-full object-cover opacity-90" />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-indigo-50/60"></div>
          </div>
          
          <!-- 内容区域 - 使用相对定位确保在背景之上 -->
          <div class="relative z-10">
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold text-gray-800">Meet the Creators Behind Inner Investor</h3>
              <p class="text-gray-600 mt-2">Team members of Game & Life</p>
            </div>
            <!-- 将Grid布局改为垂直Flex布局 -->
            <div class="flex flex-col items-center gap-8 max-w-2xl mx-auto">
              <div v-for="member in teamStructure" 
                   :key="member.name"
                   class="bg-white/30 backdrop-blur-sm rounded-lg shadow-md p-6 w-full flex items-center gap-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white/70"
              >
                <img :src="member.avatar" 
                     :alt="member.name"
                     class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                />
                <div class="flex-grow">
                  <p class="font-bold text-xl text-gray-800">{{ member.name }}</p>
                  <p class="text-indigo-600 font-medium mb-3">{{ member.role }}</p>
                  <div class="bg-gray-50/50 backdrop-blur-sm rounded-lg p-3">
                    <p class="text-sm text-gray-600 mb-2 font-medium">Responsibilities:</p>
                    <ul class="space-y-2">
                      <li v-for="resp in member.responsibilities" 
                          :key="resp"
                          class="text-sm text-gray-700 flex items-center"
                      >
                        <span class="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span> 
                        {{ resp }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- User Insights -->
      <div class="section-container">
        <h2 class="section-title">User Insights</h2>
        <div class="section-content bg-neutral-100 p-8 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="feedback in userFeedback" :key="feedback.quote" class="bg-white p-6 rounded-lg shadow">
              <p class="italic text-lg mb-4">"{{ feedback.quote }}"</p>
              <p class="text-right font-semibold">— {{ feedback.name }}</p>
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-700">{{ feedback.insight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quote Image -->
      <div class="section-container">
        <div class="section-content relative w-full">
          <img :src="QuoteBG.url" alt="Market crash animation" class="w-full h-64 object-cover rounded-lg" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-8 rounded-lg">
            <p class="text-white text-xl md:text-2xl text-center font-serif italic">
              "The market can stay irrational longer than you can stay solvent."
            </p>
          </div>
        </div>
      </div>

      <!-- Learning Outcomes -->
      <div class="section-container">
        <h2 class="section-title">Learning Outcomes</h2>
        <div class="section-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="outcome in learningOutcomes" :key="outcome" class="bg-white p-4 rounded-lg shadow border-l-4 border-neutral-400">
              <p>{{ outcome }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Future Plans -->
      <div class="section-container">
        <h2 class="section-title">Future Plans</h2>
        <div class="section-content">
          <div class="space-y-8">
            <div v-for="plan in futurePlans" :key="plan.title" class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-bold text-lg mb-2">{{ plan.title }}</h3>
              <p>{{ plan.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="w-full bg-gradient-to-r from-neutral-800 to-neutral-900 text-white p-8 rounded-lg my-16 text-center">
        <h2 class="text-2xl mb-4">Ready to face your cognitive biases?</h2>
        <p class="mb-6">Take a journey through your own decision-making mind.</p>
        <Button @click="openLink(links.demo)" class="px-8 py-2">
          Try the Demo Now
        </Button>
      </div>

      <!-- Footer Links -->
      <div class="flex justify-between w-full mt-6">
        <Button @click="openLink(links.demo)">
          Play Demo
        </Button>
        <Button @click="openLink(links.source)" variant="outline">
          View Source Code
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.blog-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 统一Section容器样式 */
.section-container {
  width: 100%;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #4f46e5, #9333ea);
  border-radius: 3px;
}

.section-content {
  width: 100%;
  padding: 0.5rem;
}

/* 确保 Mermaid 图表不会溢出容器，且自适应宽度，并居中内容 */
:deep(.mermaid) {
  width: 100%;
  max-width: 100%;
  height: auto;
  font-size: 24px !important;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 240px;
}

:deep(.mermaid svg) {
  width: auto !important;
  max-width: 100% !important;
  height: auto !important;
  margin: 0 auto;
  display: block;
}

/* 淡入效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 初始隐藏 */
h2, .blog-main-container > div {
  opacity: 0;
}

/* 进入视口后淡入 */
h2.in-view, .blog-main-container > div.in-view {
  animation: fadeIn 0.6s ease-out forwards;
}

/* 为时间线创建特殊样式 */
.timeline-node {
  position: relative;
}

.timeline-node::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #6b7280;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>