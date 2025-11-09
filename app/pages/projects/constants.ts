export const PROJECT_TYPES = {
  RECENT: 'RECENT',
  ONGOING: 'ONGOING',
  SIDE_PROJECT: 'SIDE_PROJECT'
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
  [PROJECT_TYPES.SIDE_PROJECT]: {
    color: 'neutral' as const,
    label: 'Side Project'
  }
} as const
