import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'
import { useMemo } from 'react'
import { View } from 'react-native'

import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

function FieldSet({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      data-slot='field-set'
      className={cn(
        'flex flex-col gap-6',
        'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot='field-legend'
      className={cn('mb-3 font-medium text-base', className)}
      {...props}
    />
  )
}

function FieldGroup({
  className,
  ...props
}: React.ComponentProps<typeof View>) {
  return (
    <View
      data-slot='field-group'
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'group/field flex w-full gap-3 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof View> & VariantProps<typeof fieldVariants>) {
  return (
    <View
      role='group'
      data-slot='field'
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({
  className,
  ...props
}: React.ComponentProps<typeof View>) {
  return (
    <View
      data-slot='field-content'
      className={cn(
        'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot='field-label'
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({
  className,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot='field-label'
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot='field-description'
      className={cn(
        'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof View> & { children?: React.ReactNode }) {
  return (
    <View
      data-slot='field-separator'
      data-content={!!children}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className,
      )}
      {...props}
    >
      <View className='absolute inset-0 top-1/2 w-full h-0.5 bg-border' />
      {children && (
        <View
          className='bg-background text-muted-foreground relative mx-auto block w-fit px-2'
          data-slot='field-separator-content'
        >
          {children}
        </View>
      )}
    </View>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<typeof View> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) return children

    if (!errors?.length) return null

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length === 1) return uniqueErrors[0]?.message

    return (
      <View className='ml-4 flex list-disc flex-col gap-1'>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && (
              // oxlint-disable-next-line no-array-index-key
              <Text key={index} className='text-destructive text-sm'>
                {error.message}
              </Text>
            ),
        )}
      </View>
    )
  }, [children, errors])

  if (!content) return null

  return (
    <Text
      data-slot='field-error'
      className={cn('text-destructive text-sm font-normal', className)}
      {...props}
    >
      {content}
    </Text>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
