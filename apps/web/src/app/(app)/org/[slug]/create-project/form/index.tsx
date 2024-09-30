'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormState } from '@/hooks/use-form-state'
import { queryClient } from '@/lib/react-query'

import { createProjectActions } from '../action'

export function ProjectForm() {
  const { slug: org } = useParams<{ slug: string }>()
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    createProjectActions,
    () => {
      queryClient.invalidateQueries({
        queryKey: [org, 'projects'],
      })
    },
  )

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Failed to create an project!!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        {success === true && message && (
          <Alert variant="success">
            <AlertTriangle className="size-4" />
            <AlertTitle>Success!!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-1">
          <Label htmlFor="name">Project name</Label>
          <Input name="name" id="name" />

          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" id="name" />

          {errors?.description && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.description[0]}
            </p>
          )}
        </div>

        <Button className="w-full" type="submit">
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Save project'
          )}
        </Button>
      </form>
    </div>
  )
}
