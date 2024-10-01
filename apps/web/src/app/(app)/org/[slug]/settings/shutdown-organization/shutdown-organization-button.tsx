import { XCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { actionShutdownOrganization } from './action-shutdown'

export function ShutdownOrganizationButton() {
  return (
    <form action={actionShutdownOrganization}>
      <Button type="submit" variant="destructive" className="w-56">
        <XCircle className="mr-2 size-4" />
        Shutdown organization
      </Button>
    </form>
  )
}
