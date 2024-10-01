'use server'

import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { shutdownOrganization } from '@/http/organizations/shutdown-organization'

export async function actionShutdownOrganization() {
  const currentOrg = getCurrentOrg()
  await shutdownOrganization({ org: currentOrg! })
  redirect('/')
}
