import { describe, expect, it } from 'vitest'
import { gifWorks, navItems, responses, videoWorks } from './content'

describe('portfolio content', () => {
  it('contains the requested navigation and media', () => {
    expect(navItems.map((item) => item.label)).toEqual(['角色介绍', '作品', '互动'])
    expect(videoWorks.length).toBeGreaterThanOrEqual(4)
    expect(gifWorks.length).toBeGreaterThanOrEqual(5)
    expect(responses.length).toBeGreaterThanOrEqual(5)
  })
})
