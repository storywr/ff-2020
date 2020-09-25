import { Dictionary } from '@area2k/use-localization'
import enUS from 'date-fns/locale/en-US'

export const codes = ['en-US', 'en']
export const key = 'en-US'
export const date = enUS

export const dictionary: Dictionary = {
  pager: {
    next: 'Next',
    page: ({ page, totalPages }) => `Page ${page} of ${totalPages}`,
    previous: 'Previous'
  },
  testModal: ({ name }) => `Hello, ${name}!`
}
