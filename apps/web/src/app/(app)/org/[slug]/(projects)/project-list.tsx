import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Project 01</CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            beatae. Deserunt incidunt vero suscipit quaerat vel nam nostrum
            veniam pariatur voluptate ad facilis, rem tempore sunt, numquam
            repellendus temporibus perspiciatis.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/Alessandro0003.png" />
            <AvatarFallback />
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">
              Alessandro Brilhante
            </span>
            a day ago
          </span>

          <Button size="xs" variant="outline" className="ml-auto">
            View <ArrowRight className="ml-3 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
