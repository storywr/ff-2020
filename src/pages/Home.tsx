import useLocale from '@area2k/use-localization'
import useModal from '@area2k/use-modal'
import React from 'react'

import Button from '@/components/Button'

import Banner from '@/widgets/Banner'
import Content from '@/widgets/Content'
import Dropdown, { Divider, Menu, Item, Trigger } from '@/widgets/Dropdown'
import Modal from '@/widgets/Modal'
import Overlay from '@/widgets/Overlay'
import Tab from '@/widgets/Tab'
import Track from '@/widgets/Track'

interface ModalProps {
  name?: string
  hideModal: () => void
}

const TestModal = ({ name = 'World', hideModal }: ModalProps) => {
  const { formatDate, translate } = useLocale()

  return (
    <Overlay>
      <Modal title='Testing modal' onClose={hideModal}>
        {translate('testModal', { name })} It's currently: {formatDate(new Date(), 'HH:mm zzz')}
      </Modal>
    </Overlay>
  )
}

const Home = () => {
  const [showModal, hideModal] = useModal(({ name }: Partial<ModalProps>) => (
    <TestModal name={name} hideModal={hideModal} />
  ))

  return (
    <>
      <Banner
        actions={
          <>
            <Button onClick={() => showModal({ name: 'Andrew' })}>
              Show modal
            </Button>
          </>
        }
        tabs={
          <>
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
          </>
        }
        track={
          <>
            <Track
              hideInactiveSteps
              activeStep={2}
              steps={[
                { icon: { iconName: 'paper-plane', prefix: 'far' }, title: 'Step one' },
                { icon: { iconName: 'dollar-sign', prefix: 'far' }, title: 'Step two' },
                { icon: { iconName: 'box-check', prefix: 'far' }, title: 'Step three' },
                { icon: { iconName: 'h2', prefix: 'far' }, title: 'Step four' }
              ]}
            />
          </>
        }
        titleText='Home page'
      />
      <Content>
        <Dropdown>
          <Trigger>
            <Button>
              Click for dropdown
            </Button>
          </Trigger>
          <Menu>
            <Item icon={{ iconName: 'cog', prefix: 'far' }}>
              Account
            </Item>
            <Divider />
            <Item icon={{ iconName: 'sign-out', prefix: 'far' }}>
              Sign out
            </Item>
            <Item icon={{ iconName: 'cog', prefix: 'far' }}>
              Account
            </Item>
            <Divider />
            <Item icon={{ iconName: 'sign-out', prefix: 'far' }}>
              Sign out
            </Item>
            <Item icon={{ iconName: 'cog', prefix: 'far' }}>
              Account
            </Item>
            <Divider />
            <Item icon={{ iconName: 'sign-out', prefix: 'far' }}>
              Sign out
            </Item>
            <Item icon={{ iconName: 'cog', prefix: 'far' }}>
              Account
            </Item>
            <Divider />
            <Item icon={{ iconName: 'sign-out', prefix: 'far' }}>
              Sign out
            </Item>
            <Item icon={{ iconName: 'cog', prefix: 'far' }}>
              Account
            </Item>
            <Divider />
            <Item icon={{ iconName: 'sign-out', prefix: 'far' }}>
              Sign out
            </Item>
          </Menu>
        </Dropdown>
      </Content>
    </>
  )
}

export default Home
