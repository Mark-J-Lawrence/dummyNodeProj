'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';

import Image from 'next/image';
import Link from 'next/link';

export default function DemoPage() {
  return (
    <Grid className="demo-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="demo-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <Link href="/" passHref legacyBehavior>Getting started</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Security Definition Validation (SDV)</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <iframe width="100%" height="10px" src="https://www.youtube.com/embed/bmS5nFIeGWs?si=W4PuiAX1CJa6nO0K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Column>
    </Grid>
  );
}
