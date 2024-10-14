import { api } from '../api-client'

interface RevokeInviteRequest {
  org: string
  inviteId: string
}

export async function revokeInvite(props: RevokeInviteRequest) {
  const { org, inviteId } = props

  await api.delete(`organizations/${org}/invites/${inviteId}`)
}
