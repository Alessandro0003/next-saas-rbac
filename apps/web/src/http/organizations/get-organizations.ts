import { api } from '../api-client'

interface GetOrganizationResponse {
  organizations: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getOrganization() {
  const result = await api.get('organizations').json<GetOrganizationResponse>()

  return result
}
