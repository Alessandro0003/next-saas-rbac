import { Role } from '@saas/auth'

import { api } from '../api-client'

interface UpdateMembersRequest {
  org: string
  role: Role
  memberId: string
}

export async function updateMembers(props: UpdateMembersRequest) {
  const { org, role, memberId } = props

  await api.put(`organizations/${org}/members/${memberId}/details`, {
    json: {
      role,
    },
  })
}
