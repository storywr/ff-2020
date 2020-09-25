import { IconLookup } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import Button from '@/components/Button'
import Icon from '@/components/Icon'

import { FullPropsOfStyled } from '@/util/styles'

type ButtonProps = FullPropsOfStyled<typeof Button>

const defaultSpinner: IconLookup = { iconName: 'spinner-third', prefix: 'far' }

type Props = ButtonProps & {
  icon?: IconLookup
  isLoading: boolean
  prompt?: string
}

const LoadingButton: React.FC<Props> = ({
  children, icon = defaultSpinner, isLoading, prompt, type = 'submit', ...rest
}) => (
  <Button
    {...rest}
    as='button'
    disabled={isLoading}
    type={type}
    foo='bar'
  >
    {isLoading &&
      <Icon
        spin
        icon={icon}
        rMargin={0.875}
      />
    }
    {isLoading
      ? prompt || children
      : children
    }
  </Button>
)

export default LoadingButton
