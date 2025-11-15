export const PROJECT_TYPES = {
  RECENT: 'RECENT',
  ONGOING: 'ONGOING',
  SIDE_PROJECT: 'SIDE_PROJECT',
  GAME_DESIGN: 'GAME_DESIGN',
  PROGRAMMING: 'PROGRAMMING',
  TECHNICAL_DESIGN: 'TECHNICAL_DESIGN',
  PRODUCTION: 'PRODUCTION',
  SOLO: 'SOLO',
  NARRATIVE_DESIGN: 'NARRATIVE_DESIGN',
  UI_UX_DESIGN: 'UI_UX_DESIGN',
  SOUND_DESIGN: 'SOUND_DESIGN'
}

export const PROJECT_TYPES_INFO = {
  [PROJECT_TYPES.RECENT]: {
    color: 'info' as const,
    label: 'Recent'
  },
  [PROJECT_TYPES.ONGOING]: {
    color: 'success' as const,
    label: 'Ongoing'
  },
  [PROJECT_TYPES.GAME_DESIGN]: {
    color: 'neutral' as const,
    label: 'Game Design'
  },
  [PROJECT_TYPES.PROGRAMMING]: {
    color: 'neutral' as const,
    label: 'Programming'
  },
  [PROJECT_TYPES.TECHNICAL_DESIGN]: {
    color: 'neutral' as const,
    label: 'Technical Design'
  },
  [PROJECT_TYPES.PRODUCTION]: {
    color: 'neutral' as const,
    label: 'Production'
  },
  [PROJECT_TYPES.SOLO]: {
    color: 'neutral' as const,
    label: 'Solo Developer'
  },
  [PROJECT_TYPES.NARRATIVE_DESIGN]: {
    color: 'neutral' as const,
    label: 'Narrative Design'
  },
  [PROJECT_TYPES.UI_UX_DESIGN]: {
    color: 'neutral' as const,
    label: 'UI & UX Design'
  },
  [PROJECT_TYPES.SOUND_DESIGN]: {
    color: 'neutral' as const,
    label: 'Sound Design'
  }
} as const
