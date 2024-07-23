import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

import Link from 'next/link';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

const SdvHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Security Definition Validation">
        <SkipToContent />
        {/* <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        /> */}
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM">
            CICS TS
          </HeaderName>
        </Link>
        
        {/* <HeaderNavigation aria-label="Security Definition Validation">
          <Link href="/problem" passHref legacyBehavior>
            <HeaderMenuItem>Problem</HeaderMenuItem>
          </Link>
          <Link href="/concepts" passHref legacyBehavior>
            <HeaderMenuItem>Concepts</HeaderMenuItem>
          </Link>
          <Link href="/demo" passHref legacyBehavior>
            <HeaderMenuItem>Demo</HeaderMenuItem>
          </Link>
          <Link href="/how" passHref legacyBehavior>
            <HeaderMenuItem href="/how">How</HeaderMenuItem>
          </Link>
        </HeaderNavigation> */}
        {/* <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/problem" passHref legacyBehavior>
                <HeaderMenuItem>Problem</HeaderMenuItem>
              </Link>
              <Link href="/concepts" passHref legacyBehavior>
                <HeaderMenuItem>Concepts</HeaderMenuItem>
              </Link>
              <Link href="/demo" passHref legacyBehavior>
                <HeaderMenuItem>Demo</HeaderMenuItem>
              </Link>
              <Link href="/how" passHref legacyBehavior>
                <HeaderMenuItem>How</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav> */}
        {/* <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
            className="action-icons"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar> */}
      </Header>
    )}
  />
);

export default SdvHeader;