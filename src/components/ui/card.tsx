import type { TextProps, ViewProps } from 'react-native'

import * as React from 'react'
import { Platform, View } from 'react-native'

import { Text, TextClassContext } from '@/components/ui/text'
import { cn } from '@/lib/utils'

function Card({
  className,
  size = 'default',
  ...props
}: ViewProps & { size?: 'default' | 'sm' }) {
  return (
    <TextClassContext value='text-card-foreground text-sm'>
      <View
        data-slot='card'
        data-size={size}
        className={cn(
          'group/card bg-card gap-4 overflow-hidden rounded-xl py-4 ring-1 ring-foreground/10 data-[size=sm]:gap-3 data-[size=sm]:py-3 flex flex-col',
          Platform.select({
            web: 'has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
          }),
          className,
        )}
        {...props}
      />
    </TextClassContext>
  )
}

function CardHeader({ className, ...props }: ViewProps) {
  return (
    <View
      data-slot='card-header'
      className={cn(
        'gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: TextProps) {
  return (
    <Text
      data-slot='card-title'
      className={cn(
        'text-base leading-snug font-medium group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: TextProps) {
  return (
    <Text
      data-slot='card-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: ViewProps) {
  return (
    <View
      data-slot='card-action'
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: ViewProps) {
  return (
    <View
      data-slot='card-content'
      className={cn('px-4 group-data-[size=sm]/card:px-3', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: ViewProps) {
  return (
    <View
      data-slot='card-footer'
      className={cn(
        'rounded-b-xl px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3 flex items-center',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
