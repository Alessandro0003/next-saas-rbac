'use server'

import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMembers } from '@/http/members/remove-members'

export async function removeMemberAction(memberId: string) {
  const currentOrg = getCurrentOrg()
  await removeMembers({
    org: currentOrg!,
    memberId,
  })

  revalidateTag(`${currentOrg}/members`)
}
