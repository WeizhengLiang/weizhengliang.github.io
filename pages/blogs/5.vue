<script setup>
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CodeBlock from '@/components/ui/code-block'
import { 
  CheckCircleIcon as CheckIcon, 
  CodeBracketIcon as CodeIcon, 
  UsersIcon, 
  UserIcon,
  ArrowRightIcon 
} from '@heroicons/vue/24/solid'

// 导入 highlight.js 和样式
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import csharp from 'highlight.js/lib/languages/csharp'

// 注册 C# 语言
hljs.registerLanguage('csharp', csharp)

const MainBG = {
    url: '/images/Alien/coverpage.png'  // 替换为您的游戏主图
}

const MainMenu = {
    url: '/images/Alien/UI_Mainpage_concept.png'  // 替换为您的游戏主图
}

const title = {
    title: 'Knock Knock Alien Is Here',
    date: 'November 13 - December 9, 2024',
    image: MainMenu.url
}

const items = [
    {type: 'Development Time', text: ['25 days']},
    {type: 'Tech Stack', text: ['C#', 'Unity']},
    {type: 'Role', text: ['Lead Programmer, Game Designer']},
    {type: 'Genre', text: ['Fast-Paced', 'Narrative', '2D']}
]

const intro = 'Step into the shoes of an unlucky scientist who finds himself on the run from an alien death warrant! In this fast-paced 2D game, you must dodge the alien\'s deadly shots while trying to find a way to escape. With limited time and a ticking countdown, every second counts. Can you make it out alive?'

const smallGameFlowDiagram = ref(`
graph LR
    Input[Player Input] -->|Drag| Place[Place Object]
    Place -->|Calculate| Coverage[Coverage Check]
    Coverage -->|Update| State[Game State]
    State -->|Feedback| Input

    State -->|Time Up| Result[Results]
    Result -->|Retry| Input
    Result -->|Next| Complete[Level Complete]

    style Input fill:#e3f2fd,stroke:#1565c0
    style Place fill:#e3f2fd,stroke:#1565c0
    style Coverage fill:#e3f2fd,stroke:#1565c0
    style State fill:#e3f2fd,stroke:#1565c0
    style Result fill:#f3e5f5,stroke:#7b1fa2
    style Complete fill:#f3e5f5,stroke:#7b1fa2
`)

const coreFeatures = [
  {
    title: 'Game Flow Management',
    description: 'A comprehensive game state management system controlling different game phases and transitions. Features countdown mechanics, score calculation, and scene management, ensuring a smooth and complete gaming experience.',
    media: {
      type: 'diagram',
      content: smallGameFlowDiagram,
      des: 'Game Flow Diagram'
    }
  },
  {
    title: 'Advanced Physics-Driven Drag and Drop System',
    description: 'An advanced physics-driven drag and drop system where object movement and rotation follow realistic physical rules. Objects with different masses have distinct drag feelings and inertial behaviors. The system features real-time collision detection and response, ensuring natural interactions between objects.',
    media: [
      {
        url: '/images/Alien/show_drag_1.gif',
        des: 'Advanced Physics-Driven Drag and Drop System'
      }
    ]
  },
  {
    title: 'Door Coverage System',
    description: 'A real-time area coverage calculation system that determines how effectively objects block the door. Features multi-object overlap detection and special rule validation, serving as the core mechanic for win/loss conditions.',
    media: [
      {
        url: '/images/Alien/door_cover_lose.gif',
        des: 'Real-time percentage display & lose condition'
      },
      {
        url: '/images/Alien/door_cover_win.gif',
        des: 'Visual feedback for valid/invalid placements & win conditions'
      }
    ]
  },
  {
    title: 'Collectible System',
    description: 'A diverse collection system featuring unique unlock mechanisms for each collectible. Includes progress tracking, unlock animations, and persistent storage, adding an exploratory element to the gameplay.',
    media: [
      {
        url: '/images/Alien/collectible_unlock.gif',
        des: 'Unlock different collectibles'
      },
      {
        url: '/images/Alien/lose_collection.gif',
        des: 'checkout the collection'
      }
    ]
  }
]

const developmentProcess = [
  '[开发阶段1]: [具体内容]',
  '[开发阶段2]: [具体内容]',
  '[开发阶段3]: [具体内容]',
  '[开发阶段4]: [具体内容]'
]

const challengeAndSolution = {
  challenge: '[目中遇到的主要挑战]',
  solution: '[如何解决这些挑战]'
}

const learningOutcome = '[项目中的主要收获和学习成果]'

const links = {
  demo: 'https://bestdtang.itch.io/knock-knock-alien-is-here',
  source: 'https://github.com/WeizhengLiang/Knock-Knock-Alien-is-There'
}

const gameFlowDiagram = ref(`
graph LR
    %% Main Flow
    MainMenu --> GamePrep
    GamePrep --> Gameplay
    Gameplay --> Results
    Results -->|Restart/Exit| MainMenu
    Results -->|Retry| Gameplay
    
    %% Subgraph for Core Gameplay
    subgraph Gameplay[Active Gameplay]
        direction LR
        subgraph Core[Core Loop]
            direction LR
            Drag -->|Input| Place
            Place -->|Calculate| Coverage
            Coverage -->|Update| Feedback
            Feedback -->|Check| Collectibles
            Collectibles -->|Continue| Drag
        end
        
        %% Timer Note
        Timer[20s Time Limit]
    end
    
    %% Results States
    subgraph Results[Results]
        direction LR
        Calc{Calculation} -->|<60%| Failure
        Calc -->|≥60%| Success
        Calc -->|Special Condition| TrueEnding
    end
    
    %% Transitions
    GamePrep -->|Countdown Complete| Core
    Core -->|Time Up| Calc
    
    %% Styling
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px
    classDef active fill:#e3f2fd,stroke:#1565c0
    classDef results fill:#f3e5f5,stroke:#7b1fa2
    
    class Core,Timer active
    class Results,Failure,Success,TrueEnding results
`)

const codeSnippets = [
  {
    title: "Core Drag System Implementation (DragSystem.cs)",
    code: `public class DragSystem : IGameSystem
{
    private readonly DraggableObject owner;
    private readonly Camera mainCamera;
    private readonly Rigidbody2D rb;
    
    private HingeJoint2D dragJoint;
    private GameObject dragAnchor;
    
    private Vector2 lastDragPosition;
    private Vector2 dragStartPosition;
    private Vector2 lastDragDirection;
    private Vector2 dragVelocity;

    public void UpdateDrag(Vector2 mousePosition)
    {
        if (dragAnchor == null) return;

        // Update position
        Vector2 currentPos = dragAnchor.transform.position;
        Vector2 newPos = Vector2.Lerp(currentPos, mousePosition, owner.DragSpeed * Time.deltaTime);
        dragAnchor.transform.position = newPos;

        // Update velocity
        if (Time.time - lastVelocityUpdateTime > velocityUpdateInterval)
        {
            dragVelocity = (mousePosition - lastDragPosition) / velocityUpdateInterval;
            lastDragPosition = mousePosition;
            lastVelocityUpdateTime = Time.time;
        }

        // Update rotation
        UpdateRotation(mousePosition);
    }
}`,
    language: "csharp"
  },
  {
    title: "State Management and Event System",
    code: `public class DraggableObjectState
{
    private bool isDragging;
    private bool isInvalidPosition;
    private bool isMouseOver;
    private bool isFrozen;
    private readonly DraggableObject owner;

    public void SetDragging(bool value)
    {
        if (isDragging != value)
        {
            isDragging = value;
            DraggableObjectManager.Instance?.SetDragging(value, owner);
            DraggableObjectEvents.RaiseDragStateChanged(owner, value);
        }
    }
}`,
    language: "csharp"
  },
  {
    title: "System Architecture Design",
    code: `public class DraggableObject : MonoBehaviour
{
    #region Systems
    public DraggableObjectState state;
    private GameSystemManager systemManager;
    private DragSystem dragSystem;
    private MaterialSystem materialSystem;
    private PhysicsSystem physicsSystem;
    private PlacementSystem placementSystem;
    #endregion

    protected virtual void InitializeSystems()
    {
        systemManager = new GameSystemManager();
        state = new DraggableObjectState(this);
        
        dragSystem = new DragSystem(this, Camera.main);
        materialSystem = new MaterialSystem(this);
        physicsSystem = new PhysicsSystem(this);
        placementSystem = new PlacementSystem(this, collisionLayer, surfaceIgnoreDistance);

        systemManager.AddSystem(dragSystem);
        systemManager.AddSystem(materialSystem);
        systemManager.AddSystem(physicsSystem);
        systemManager.AddSystem(placementSystem);
    }
}`,
    language: "csharp"
  },
  {
    title: "Collectible System Implementation",
    code: `public class CollectibleObject : DraggableObject
{
    protected override bool IsValidPlacement()
    {
        if (IsUnlocked())
            return base.IsValidPlacement();

        Collider2D[] colliders = Physics2D.OverlapBoxAll(
            transform.position,
            col.bounds.size,
            transform.rotation.eulerAngles.z,
            collisionLayer
        );

        foreach (Collider2D otherCol in colliders)
        {
            if (otherCol != col && otherCol.gameObject != gameObject)
            {
                TriggerObject trigger = otherCol.GetComponent<TriggerObject>();
                if (trigger != null && !IsUnlocked())
                {
                    if (trigger.CompareTag(data.unlockMethod.ToString()))
                    {
                        currentMergeTarget = otherCol.gameObject;
                        return true;
                    }
                }
            }
        }
        return base.IsValidPlacement();
    }
}`,
    language: "csharp"
  }
]

const keyAlgorithms = [
  {
    title: "Drag Physics System with Inertia and Rotation Algorithm (DragSystem.cs)",
    code: `public class DragSystem : IGameSystem
{
    private Vector2 dragVelocity;
    private float lastVelocityUpdateTime;
    private readonly float velocityUpdateInterval = 0.1f;
    private readonly float dragInertiaMultiplier = 0.3f;
    private Vector2 lastDragDirection;

    public void UpdateDrag(Vector2 mousePosition)
    {
        // Position smooth interpolation
        Vector2 currentPos = dragAnchor.transform.position;
        Vector2 newPos = Vector2.Lerp(currentPos, mousePosition, owner.DragSpeed * Time.deltaTime);
        dragAnchor.transform.position = newPos;

        // Velocity calculation
        if (Time.time - lastVelocityUpdateTime > velocityUpdateInterval)
        {
            dragVelocity = (mousePosition - lastDragPosition) / velocityUpdateInterval;
            lastDragPosition = mousePosition;
            lastVelocityUpdateTime = Time.time;
        }

        // Rotation calculation
        Vector2 direction = mousePosition - dragStartPosition;
        if (direction.magnitude > 0.01f)
        {
            float angle = Vector2.SignedAngle(lastDragDirection, direction);
            if (Mathf.Abs(angle) > owner.RotationThreshold)
            {
                angle *= owner.RotationDamping;
                owner.transform.Rotate(0, 0, angle * owner.RotationSpeed * Time.deltaTime);
            }
            lastDragDirection = direction;
        }
    }

    public void EndDrag()
    {
        // Apply inertia
        if (rb != null)
        {
            Vector2 finalVelocity = dragVelocity / Time.fixedDeltaTime;
            rb.velocity = finalVelocity * dragInertiaMultiplier;
        }
    }
}`,
    language: "csharp",
    features: [
      "Implements smooth drag effect",
      "Physics-based inertia system",
      "Natural rotation control",
      "Performance optimization (using time intervals for updates)",
      "Threshold and damping system to prevent jittering"
    ]
  },
  {
    title: "Door Area Coverage Calculation Algorithm (PlacementSystem.cs)",
    code: `public class PlacementSystem : IGameSystem
{
    private readonly float surfaceIgnoreDistance;

    public virtual bool ValidatePlacement()
    {
        if (col == null) return true;

        // Efficient collision detection using Physics2D.OverlapBoxAll
        Collider2D[] colliders = Physics2D.OverlapBoxAll(
            owner.transform.position,
            col.bounds.size,
            owner.transform.rotation.eulerAngles.z,
            collisionLayer
        );

        bool isValid = true;
        foreach (Collider2D otherCol in colliders)
        {
            if (otherCol != col && otherCol.gameObject != owner.gameObject)
            {
                // Get precise collision distance using Physics2D.Distance
                ColliderDistance2D distance = Physics2D.Distance(col, otherCol);
                if (distance.distance < -surfaceIgnoreDistance)
                {
                    isValid = false;
                    break;
                }
            }
        }

        owner.state.SetInvalidPosition(!isValid);
        return isValid;
    }

    public void OnDrawGizmos()
    {
        if (col == null) return;

        // Visualization of collision bounds and surface ignore distance
        if (col is PolygonCollider2D poly)
        {
            Vector2[] points = poly.points;
            for (int i = 0; i < points.Length; i++)
            {
                Vector2 current = owner.transform.TransformPoint(points[i]);
                Vector2 next = owner.transform.TransformPoint(points[(i + 1) % points.Length]);
                Vector2 dir = (next - current).normalized;
                Vector2 normal = new Vector2(-dir.y, dir.x);
                
                Gizmos.DrawLine(
                    current + normal * surfaceIgnoreDistance, 
                    next + normal * surfaceIgnoreDistance
                );
            }
        }
    }
}`,
    language: "csharp",
    features: [
      "Efficient spatial partitioning detection",
      "Precise collision distance calculation",
      "Handles object rotation",
      "Includes error tolerance (surfaceIgnoreDistance)",
      "Visual debugging support"
    ]
  }
]

const openLink = (url) => {
  window.open(url, '_blank')
}

// Development Phases Data
const developmentPhases = [
  {
    title: "Concept & Design",
    date: "Nov 13 - Nov 16, 2023",
    description: "Brainstormed game concepts, finalized the alien invasion theme with a twist on traditional narratives. Established core mechanics of physics-based object placement and door coverage calculation.",
    milestones: [
      "Finalized game concept from three initial ideas",
      "Established core gameplay mechanics",
      "Created initial design documentation",
      "Completed technical feasibility assessment"
    ]
  },
  {
    title: "Prototype Development",
    date: "Nov 17 - Nov 22, 2023",
    description: "Implemented core gameplay mechanics including drag-and-drop system, physics interactions, and coverage calculation algorithm.",
    milestones: [
      "Basic drag-and-drop system",
      "Physics-based object interaction",
      "Initial coverage calculation system",
      "Prototype level design"
    ]
  },
  {
    title: "Art Integration & Story",
    date: "Nov 23 - Dec 2, 2023",
    description: "Integrated visual assets and narrative elements, establishing the game's unique aesthetic and storytelling approach.",
    milestones: [
      "2D art asset creation",
      "UI design implementation",
      "VFX integration",
      "Story integration with gameplay"
    ]
  },
  {
    title: "Testing & Iteration",
    date: "Dec 3 - Dec 9, 2023",
    description: "Conducted extensive testing, refined gameplay mechanics, and optimized performance across platforms.",
    milestones: [
      "Internal playtesting",
      "Bug fixing and optimization",
      "Level design refinement",
      "Final performance optimization"
    ]
  }
]

// Technical Challenges Data
const technicalChallenges = [
  {
    title: "Physics-Based Drag and Drop System",
    challenge: [
      "Complex physics interactions between multiple objects",
      "Maintaining responsive controls while preserving realistic physics",
      "Accurate collision detection and response during drag operations"
    ],
    solution: [
      "Implemented custom physics handlers using Unity's physics engine",
      "Created state management system for smooth transitions between drag and free states",
      "Optimized collision detection using spatial partitioning"
    ]
  },
  {
    title: "Door Coverage Detection",
    challenge: [
      "Real-time calculation of door coverage percentage",
      "Handling multiple overlapping objects accurately",
      "Performance optimization for complex coverage scenarios"
    ],
    solution: [
      "Developed grid-based coverage detection system",
      "Implemented efficient overlap detection algorithms",
      "Used spatial optimization to reduce calculation overhead"
    ]
  },
  {
    title: "Performance Optimization",
    challenge: [
      "Heavy CPU load from physics calculations",
      "Memory management for dynamic object creation",
      "Frame rate drops during complex interactions"
    ],
    solution: [
      "Implemented object pooling for frequently created objects",
      "Optimized physics calculations using spatial partitioning",
      "Created efficient data structures for quick lookups and updates"
    ]
  }
]

// Development Stack Data
const developmentStack = [
  {
    category: "Core Development",
    tools: [
      {
        name: "Unity 2022",
        icon: "/icons/unity.svg",
        description: "Primary game engine"
      },
      {
        name: "C#",
        icon: "/icons/csharp.svg",
        description: "Main programming language"
      }
    ]
  },
  {
    category: "Version Control",
    tools: [
      {
        name: "Git",
        icon: "/icons/git.svg",
        description: "Source control management"
      }
    ]
  },
  {
    category: "Development Tools",
    tools: [
      {
        name: "Unity Profiler",
        icon: "/icons/profiler.svg",
        description: "Performance optimization"
      },
      {
        name: "Rider",
        icon: "/icons/rider.svg",
        description: "IDE for development"
      }
    ]
  }
]

// Team Structure Data
const teamStructure = [
  {
    name: "Weizheng Liang",
    role: "Lead Programmer",
    responsibilities: [
      "Core gameplay systems",
      "Performance optimization",
      "Technical architecture",
      "Development tools"
    ],
    avatar: "/images/Alien/liang.jpg"
  },
  {
    name: "Mingxuan Cao",
    role: "2D Artist & UI Designer",
    responsibilities: [
      "Visual assets creation",
      "UI/UX design",
      "Game design support",
      "Art direction"
    ],
    avatar: "/images/Alien/cao.jpg"
  },
  {
    name: "Ziyi Liu",
    role: "Story & Game Designer",
    responsibilities: [
      "Narrative design",
      "Story development",
      "Game design",
      "Level design support"
    ],
    avatar: "/images/Alien/liu.jpg"
  },
  {
    name: "Weidi Tang",
    role: "Product Manager & VFX Artist & Programmer",
    responsibilities: [
      "Visual effects",
      "Technical support",
      "Game design",
      "Performance optimization"
    ],
    avatar: "/images/Alien/tang.jpg"
  },
  {
    name: "Shiqi Yu",
    role: "Comic Artist & 2D Artist",
    responsibilities: [
      "Comic creation",
      "2D art assets",
      "Game design",
      "Visual storytelling"
    ],
    avatar: "/images/Alien/yu.jpg"
  },
  {
    name: "Ange Zhao",
    role: "Concept Artist & 2D Artist",
    responsibilities: [
      "Concept art",
      "2D art assets",
      "Game design",
      "Visual development"
    ],
    avatar: "/images/Alien/zhao.jpg"
  }
]

// Communication Flow Data
const communicationFlow = {
  tools: [
    {
      name: "WeChat",
      purpose: "Daily communication",
      frequency: "Real-time"
    },
    {
      name: "Google Sheets",
      purpose: "Task tracking",
      frequency: "Daily updates"
    }
  ],
  meetings: [
    {
      type: "Daily Standup",
      duration: "15 minutes",
      focus: "Progress updates"
    },
    {
      type: "Weekly Review",
      duration: "3 hour",
      focus: "Milestone review"
    }
  ]
}

// Learning Outcomes and Future Plans Data
const learningOutcomes = {
  technical: [
    "Deepened understanding of physics-based game development",
    "Mastered real-time calculation optimization techniques",
    "Gained expertise in Unity's physics engine and custom tooling development",
    "Enhanced proficiency in performance optimization and debugging"
  ],
  teamwork: [
    "Successfully led a cross-functional team of 6 members",
    "Improved communication and coordination skills in a game development context",
    "Learned to balance technical constraints with design aspirations",
    "Developed effective problem-solving strategies in a team environment"
  ],
  personal: [
    "Strengthened project management capabilities",
    "Enhanced ability to make technical decisions under time constraints",
    "Improved documentation and knowledge sharing practices",
    "Developed a deeper appreciation for user-centered design"
  ]
}

const futurePlans = {
  features: [
    {
      title: "Gameplay Expansion",
      description: "Introduce new object types and mechanics to enhance strategic depth",
      details: [
        "Additional object types with unique physical properties",
        "Community level sharing system",
        "Advanced puzzle mechanics"
      ]
    },
    {
      title: "Narrative Enhancement",
      description: "Expand story branches and narrative possibilities",
      details: [
        "Multiple story paths and endings",
        "Character background stories",
        "Interactive narrative elements"
      ]
    },
    {
      title: "Technical Improvements",
      description: "Optimize performance and expand platform support",
      details: [
        "Mobile platform optimization",
        "Enhanced physics calculations",
        "Improved coverage detection system"
      ]
    },
    {
      title: "Social Features",
      description: "Add competitive and collaborative elements",
      details: [
        "Global leaderboard system",
        "Player achievements",
        "Community challenges"
      ]
    },
    {
      title: "User Experience",
      description: "Enhance overall game feel and accessibility",
      details: [
        "Improved tutorial system",
        "Enhanced visual feedback",
        "Refined sound design",
        "Accessibility options"
      ]
    }
  ],
  timeline: {
    shortTerm: [
      "Performance optimization for current platforms",
      "Tutorial system improvements",
      "Basic leaderboard implementation"
    ],
    mediumTerm: [
      "New object types and mechanics",
      "Community level sharing features",
      "Enhanced visual effects"
    ],
    longTerm: [
      "Mobile platform support",
      "Multiplayer features",
      "Advanced narrative content"
    ]
  }
}

// 在 mounted 时初始化代码高亮
onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })
})

const highlightCode = (code, language) => {
  return hljs.highlight(code, { language }).value
}
</script>

<template>
  <div class="items-center">
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <div class="flex justify-end gap-4 mt-6">
        <Button @click="openLink(links.source)" variant="outline">
          View Source Code
        </Button>

        <Button @click="openLink(links.demo)">
          Play Demo
        </Button>
    </div>

    <div class="blog-main-container">
      <BlogImage :image="MainBG" />

      <BlogBody>
        <h2>Core Features</h2>
        <div class="space-y-12">
          <div v-for="feature in coreFeatures" :key="feature.title">
            <h3 class="font-bold text-xl mb-4">{{ feature.title }}</h3>
            <p class="mb-6">{{ feature.description }}</p>
            
            <!-- Diagram type media -->
            <template v-if="feature.media.type === 'diagram'">
              <div class="bg-white p-4 rounded-lg shadow w-2/3 mx-auto">
                <vue-mermaid-string 
                  :value="feature.media.content.value"
                  :config="{
                    theme: 'default',
                    themeVariables: {
                      fontSize: '16px',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      nodeSpacing: 50,
                      rankSpacing: 50,
                    },
                    flowchart: {
                      diagramPadding: 8,
                      curve: 'basis',
                      useMaxWidth: true
                    }
                  }"
                />
              </div>
            </template>
            
            <!-- Image type media -->
            <template v-else>
              <div class="flex flex-col items-center space-y-4">
                <div :class="[
                  'flex justify-center',
                  feature.media.length > 1 ? 'gap-8' : ''
                ]">
                  <template v-for="item in feature.media" :key="item.url">
                    <div class="flex flex-col items-center space-y-2">
                      <img 
                        :src="item.url" 
                        :alt="item.des"
                        :class="[
                          'rounded-lg shadow-lg',
                          feature.media.length > 1 ? 'w-[480px]' : 'w-2/3'
                        ]"
                      />
                      <p class="text-sm text-gray-600 text-center">{{ item.des }}</p>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </BlogBody>

      <div>
        <h2>Development Journey</h2>
        
        <!-- Timeline Section -->
        <div class="space-y-12">
          <section>
            <h3 class="text-xl font-semibold mb-6">Project Timeline</h3>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <!-- Timeline visualization -->
              <div class="relative">
                <div class="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2"></div>
                <div class="space-y-12">
                  <div v-for="(phase, index) in developmentPhases" 
                       :key="phase.title"
                       class="relative"
                  >
                    <div class="flex items-center">
                      <!-- Timeline node -->
                      <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      
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
          </section>

          <!-- 在 Project Timeline section 后添加 -->
        <section>
        <div class="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold mb-6">Community Engagement</h3>
            <div class="space-y-4">
            <div class="aspect-video relative">
                <img 
                src="/images/Alien/streaming.png"
                alt="Streamer RheiaGaming playing Knock Knock Alien Is Here"
                class="rounded-lg shadow-lg w-full h-full object-cover"
                />
            </div>
            <p class="text-center text-gray-600 mt-2">
                A Twitch streamer enjoying Knock Knock Alien Is Here during a live session
            </p>
            </div>
        </div>
        </section>



          <!-- Technical Challenges Section -->
          <section>
            <h3 class="text-xl font-semibold mb-6">Technical Challenges</h3>
            <div class="space-y-8">
              <div v-for="challenge in technicalChallenges" :key="challenge.title">
                <Card>
                  <CardHeader>
                    <CardTitle>{{ challenge.title }}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-6">
                      <div>
                        <h4 class="font-semibold mb-3">Challenge:</h4>
                        <ul class="list-disc pl-6 space-y-2">
                          <li v-for="item in challenge.challenge" 
                              :key="item" 
                              class="text-gray-700"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-3">Solution:</h4>
                        <ul class="list-disc pl-6 space-y-2">
                          <li v-for="item in challenge.solution" 
                              :key="item" 
                              class="text-gray-700"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <!-- Development Stack Section -->
          <!-- <section>
            <h3 class="text-xl font-semibold mb-6">Development Stack</h3>
            <div class="space-y-6">
              <div v-for="category in developmentStack" 
                   :key="category.category"
                   class="bg-white rounded-lg shadow-lg p-6"
              >
                <h4 class="font-semibold mb-4">{{ category.category }}</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div v-for="tool in category.tools" 
                       :key="tool.name"
                       class="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
                  >
                    <img :src="tool.icon" 
                         :alt="tool.name"
                         class="w-8 h-8"
                    />
                    <div>
                      <p class="font-medium">{{ tool.name }}</p>
                      <p class="text-sm text-gray-600">{{ tool.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> -->

          <BlogBody>
        <h2>Game Flow and Key Code Snippets</h2>
        <p>This diagram illustrates the core gameplay loop:</p>
        
        <div class="my-8">
          <div class="w-full overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
            <div class="min-w-[800px]">
              <vue-mermaid-string 
                :value="gameFlowDiagram"
                :config="{
                  theme: 'default',
                  themeVariables: {
                    fontSize: '16px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  },
                  flowchart: {
                    diagramPadding: 8,
                    nodeSpacing: 50,
                    rankSpacing: 50,
                    curve: 'basis'
                  }
                }"
              ></vue-mermaid-string>
            </div>
          </div>

          <!-- Code Implementation Section -->
          <h3 class="mt-12 font-bold text-2xl">Code Implementation</h3>
          <div class="space-y-8">
            <div v-for="snippet in codeSnippets" :key="snippet.title">
              <h4 class="font-bold text-xl mb-4">{{ snippet.title }}</h4>
              <CodeBlock 
                :code="snippet.code"
                :language="snippet.language"
                :title="snippet.title"
              />
            </div>
          </div>

          <!-- Key Algorithms Section -->
          <h3 class="mt-12 font-bold text-2xl">Key Algorithms</h3>
          <div class="space-y-12">
            <div v-for="algorithm in keyAlgorithms" :key="algorithm.title">
              <h4 class="font-bold text-xl mb-4">{{ algorithm.title }}</h4>
              <CodeBlock 
                :code="algorithm.code"
                :language="algorithm.language"
                :title="algorithm.title"
              />
              <div class="mt-4">
                <h4 class="font-semibold mb-2">Algorithm Features:</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li v-for="feature in algorithm.features" 
                      :key="feature" 
                      class="text-gray-700"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BlogBody>

          <!-- Team & Communication Section -->
          <section>
            <h3 class="text-xl font-semibold mb-6">Team & Communication</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Team Structure -->
              <Card>
                <CardHeader>
                  <CardTitle>Team Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="space-y-4">
                    <div v-for="member in teamStructure" 
                         :key="member.name"
                         class="flex items-start space-x-4"
                    >
                      <img :src="member.avatar" 
                           :alt="member.name"
                           class="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p class="font-semibold">{{ member.name }}</p>
                        <p class="text-sm text-gray-600">{{ member.role }}</p>
                        <ul class="mt-1 space-y-1">
                          <li v-for="resp in member.responsibilities" 
                              :key="resp"
                              class="text-xs text-gray-500"
                          >
                            • {{ resp }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <!-- Communication Flow -->
              <Card>
                <CardHeader>
                  <CardTitle>Communication Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="space-y-6">
                    <div>
                      <h4 class="font-semibold mb-3">Tools</h4>
                      <div class="space-y-2">
                        <div v-for="tool in communicationFlow.tools" 
                             :key="tool.name"
                             class="flex justify-between items-center"
                        >
                          <span class="font-medium">{{ tool.name }}</span>
                          <span class="text-sm text-gray-600">{{ tool.purpose }}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-3">Meetings</h4>
                      <div class="space-y-2">
                        <div v-for="meeting in communicationFlow.meetings" 
                             :key="meeting.type"
                             class="flex justify-between items-center"
                        >
                          <span class="font-medium">{{ meeting.type }}</span>
                          <span class="text-sm text-gray-600">{{ meeting.duration }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>


      <!-- Learning Outcomes Section -->
    <div>
    <h2 class="mt-16">Learning Outcomes</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Technical Learning -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2">
            <CodeIcon class="w-5 h-5" />
            <span>Technical Growth</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-2">
            <li v-for="outcome in learningOutcomes.technical" 
                :key="outcome"
                class="flex items-start space-x-2"
            >
              <CheckIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-sm">{{ outcome }}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Teamwork Learning -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2">
            <UsersIcon class="w-5 h-5" />
            <span>Team Collaboration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-2">
            <li v-for="outcome in learningOutcomes.teamwork" 
                :key="outcome"
                class="flex items-start space-x-2"
            >
              <CheckIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-sm">{{ outcome }}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- Personal Growth -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2">
            <UserIcon class="w-5 h-5" />
            <span>Personal Development</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-2">
            <li v-for="outcome in learningOutcomes.personal" 
                :key="outcome"
                class="flex items-start space-x-2"
            >
              <CheckIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-sm">{{ outcome }}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
</div>


  <!-- Future Plans Section -->
  <div>
    <h2 class="mt-16">Future Plans</h2>
    
    <!-- Feature Roadmap -->
    <div class="space-y-8">
      <div v-for="feature in futurePlans.features" 
           :key="feature.title"
           class="bg-white rounded-lg shadow-lg p-6"
      >
        <h4 class="text-lg font-semibold mb-3">{{ feature.title }}</h4>
        <p class="text-gray-600 mb-4">{{ feature.description }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="detail in feature.details" 
               :key="detail"
               class="bg-gray-50 rounded-lg p-3"
          >
            <span class="text-sm">{{ detail }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Development Timeline -->
    <div class="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h4 class="text-lg font-semibold mb-6">Development Timeline</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Short Term -->
        <div>
          <h5 class="font-medium text-blue-600 mb-3">Short Term</h5>
          <ul class="space-y-2">
            <li v-for="item in futurePlans.timeline.shortTerm" 
                :key="item"
                class="flex items-start space-x-2 text-sm"
            >
              <ArrowRightIcon class="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Medium Term -->
        <div>
          <h5 class="font-medium text-purple-600 mb-3">Medium Term</h5>
          <ul class="space-y-2">
            <li v-for="item in futurePlans.timeline.mediumTerm" 
                :key="item"
                class="flex items-start space-x-2 text-sm"
            >
              <ArrowRightIcon class="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Long Term -->
        <div>
          <h5 class="font-medium text-indigo-600 mb-3">Long Term</h5>
          <ul class="space-y-2">
            <li v-for="item in futurePlans.timeline.longTerm" 
                :key="item"
                class="flex items-start space-x-2 text-sm"
            >
              <ArrowRightIcon class="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>


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

:deep(.mermaid svg) {
  height: auto !important;
  width: 100% !important;
}

.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 4px;
}

.timeline-node::before {
  content: '';
  @apply absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2;
}

.timeline-line {
  @apply absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2;
}
</style> 