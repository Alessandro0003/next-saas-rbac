import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Button>
        <Link href="/auth/sign-in">Sign In</Link>
      </Button>
    </div>
  )
}
