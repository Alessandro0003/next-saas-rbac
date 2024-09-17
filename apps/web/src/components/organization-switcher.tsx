import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'

import { getOrganization } from '@/http/organizations/get-organizations'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export async function OrganizationSwitcher() {
  const { organizations } = await getOrganization()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-[164px] items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:right-2 focus-visible:ring-primary">
        <span className="text-muted-foreground">Select organization</span>
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        className="w-[200px]"
        sideOffset={12}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          {organizations.map((org) => {
            return (
              <DropdownMenuItem key={org.id} asChild>
                <Link href={`/org/${org.slug}`}>
                  <Avatar className="mr-2 size-4">
                    {org.avatarUrl && <AvatarImage src={org.avatarUrl} />}
                    <AvatarFallback />
                  </Avatar>
                  <span className="line-clamp-1">{org.name}</span>
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/create-organization">
            <PlusCircle className="mr-2 size-4" />
            Create New
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
