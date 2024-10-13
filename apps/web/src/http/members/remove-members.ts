import { api } from '../api-client'

interface RemoveMembersRequest {
  org: string
  memberId: string
}

export async function removeMembers(props: RemoveMembersRequest) {
  const { org, memberId } = props

  await api.delete(`organizations/${org}/members/${memberId}/details`)
}
