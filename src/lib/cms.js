// src/lib/cms.js
import { client } from '../client.config.js'

const BASE = `${client.cmsUrl}/api`
const TENANT = client.tenantSlug

async function fetchPayload(collection, params = {}) {
  const query = new URLSearchParams({
    'where[tenant.slug][equals]': TENANT,
    limit: '100',
    ...params
  })
  const res = await fetch(`${BASE}/${collection}?${query}`)
  if (!res.ok) throw new Error(`CMS error: ${res.status}`)
  const data = await res.json()
  return data.docs || []
}

export const getPages = () => fetchPayload('pages')
export const getServices = () => fetchPayload('services')
export const getTestimonials = () => fetchPayload('testimonials')
export const getBlogPosts = () => fetchPayload('blog')
export const getGallery = () => fetchPayload('gallery')

export async function getPage(slug) {
  const pages = await fetchPayload('pages', {
    'where[slug][equals]': slug
  })
  return pages[0] || null
}
