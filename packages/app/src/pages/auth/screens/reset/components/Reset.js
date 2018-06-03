import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toggle } from '@bloom/ui/src/animation'
import { Divider } from '@bloom/ui/src/divider'
import { Input } from '@bloom/ui/src/input'
import { Button } from '@bloom/ui/src/button'
import { Link } from '@bloom/ui/src/link'
import { Text } from '@bloom/ui/src/text'

const messages = defineMessages({
  reset: {
    id: 'auth.reset.reset',
    defaultMessage: 'Reset Password',
  },
  password: {
    id: 'auth.reset.password',
    defaultMessage: 'Password',
  },
  confirmation: {
    id: 'auth.reset.confirmation',
    defaultMessage: 'Confirmation',
  },
  change: {
    id: 'auth.reset.change',
    defaultMessage: 'Change',
  },
  login: {
    id: 'auth.reset.login',
    defaultMessage: 'Login',
  },
})

const Reset = ({
  intl,
  password,
  confirmation,
  errors = {},
  onChangePassword,
  onChangeConfirmation,
  onReset,
}) => (
  <Column>
    <Layout basis='63px' />
    <Layout justify='center'>
      <Text
        size='xxlarge'
        color='white'
        weight='light'
        opacity
      >
        {intl.formatMessage(messages.reset)}
      </Text>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Toggle height={40} show={errors.password || errors.confirmation || errors.token}>
        <Text>
          {errors.password || errors.confirmation || errors.token}
        </Text>
      </Toggle>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <Input
        type='password'
        placeholder={intl.formatMessage(messages.password)}
        value={password}
        onEnter={onReset}
        onChange={onChangePassword}
      />
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <Input
        type='password'
        placeholder={intl.formatMessage(messages.confirmation)}
        value={confirmation}
        onEnter={onReset}
        onChange={onChangeConfirmation}
      />
    </Layout>
    <Layout basis='32px' />
    <Layout justify='center'>
      <Button
        fill
        size='large'
        onClick={onReset}
      >
        {intl.formatMessage(messages.change)}
      </Button>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Divider transparent />
    </Layout>
    <Layout basis='16px' />
    <Layout justify='center'>
      <Link to='/auth' color='white'>
        <Text
          uppercase
          size='xsmall'
          color='white300'
        >
          {intl.formatMessage(messages.login)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(Reset)
