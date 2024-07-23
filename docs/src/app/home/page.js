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
  ProgressIndicator,
  ProgressStep,
  CodeSnippet
} from '@carbon/react';

import {
  ZeroTrust,
  DataPrivacy,
  AppModernization,
} from '@carbon/pictograms-react';

import Image from 'next/image';
import Link from 'next/link';

import { InfoSection, InfoCard } from '../components/Info/Info';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        {/* <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <Link href="/" passHref legacyBehavior>Getting started</Link>
          </BreadcrumbItem>
        </Breadcrumb> */}
        <br />
        <br />
        <h1 className="landing-page__heading">Security Definition Validation (SDV)</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Problem</Tab>
            <Tab>Concepts</Tab>
            <Tab>Demo</Tab>
            <Tab>How</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                  <h3 className="landing-page__subheading">What is Security Definition Validation?</h3>
                  <p className="landing-page__p">
                    Some high-level chat here about SDV...
                  </p>
                  <Button>The Problem...</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={604}
                    height={498}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
              <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                  <p className="landing-page__p">
                    Some chat about the problem...
                  </p>
                  <Button>Concepts...</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={604}
                    height={498}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                    <p className="landing-page__p">
                      Some chat about the concepts...
                    </p>
                    <Button>Demo...</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                    <Image
                      className="landing-page__illo"
                      src="/tab-illo.png"
                      alt="Carbon illustration"
                      width={604}
                      height={498}
                    />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column md={4} lg={8} sm={4} className="landing-page__tab-content">
                    <center>
                        <iframe width="756px" height="425px%" src="https://www.youtube.com/embed/bmS5nFIeGWs?si=W4PuiAX1CJa6nO0K" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <div><br /></div>
                        <Button>How...</Button>
                    </center>
                </Column>
                <Column md={4} lg={{ span: 7, offset: 8 }} sm={4}>
                    <Image
                      className="landing-page__illo"
                      src="/tab-illo.png"
                      alt="Carbon illustration"
                      width={604}
                      height={498}
                    />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={2} md={4} sm={1} className="landing-page__tab-content" height='496px'>
                  <ProgressIndicator vertical='true' currentIndex={3} onChange={(stepIndex) => alert(`Clicked index ${stepIndex}`)} spaceEqually='true'>
                      <ProgressStep label="Preparation" description="Gather prerequisites" />
                      <ProgressStep label="SDC Configuration" description="" />
                      <ProgressStep label="z/OS Configuration" description="" />
                      <ProgressStep label="Galasa Tests & properties" description="" />
                      <ProgressStep label="Repository creation & configuration" description="" />
                      <ProgressStep label="Galasa Architecture" description="" />
                      <ProgressStep label="Approval Bot" description="" />
                      <ProgressStep label="CI Pipeline" description="" />
                    </ProgressIndicator>
                </Column>
                <Column lg={14} md={4} sm={3} className="landing-page__tab-content">
                    <br />
                    <p className="landing-page__p">
                      fhuerhfguehfesauofhesaufhesapfueisafjhueasjhf
                      fjeushfaeshfusehafuhefsuah
                    </p>

                    <p className="landing-page__p">
                      fhuerhfguehfesauofhesaufhesapfueisafjhueasjhf
                      fjeushfaeshfusehafuhefsuah
                    </p>
                    <center>
                    <Tabs>
                      <TabList aria-label="Examples" contained>
                        <Tab>Tekton</Tab>
                        <Tab>Jenkins</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <CodeSnippet type="multi" feedback="Copied to clipboard">
                            {`a load of bash`}
                          </CodeSnippet>
                        </TabPanel>
                        <TabPanel>
                        <CodeSnippet type="multi" feedback="Copied to clipboard">
                            {`a load of jenkins stuff`}
                          </CodeSnippet>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                    </center>
                    <br />
                    <br />
                    <br />
                    <p className="landing-page__p">
                      fhuerhfguehfesauofhesaufhesapfueisafjhueasjhf
                      fjeushfaeshfusehafuhefsuah
                    </p>
                    <p className="landing-page__p">
                      fhuerhfguehfesauofhesaufhesapfueisafjhueasjhf
                      fjeushfaeshfusehafuhefsuah
                    </p>
                    <p className="landing-page__p">
                      fhuerhfguehfesauofhesaufhesapfueisafjhueasjhf
                      fjeushfaeshfusehafuhefsuah
                    </p>
                    
                  </Column>
                </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles">
          <InfoCard
            heading="SDV....Zero Trust sales pitch #1"
            body="It's great..."
            icon={() => <ZeroTrust size={32} />}
          />
          <InfoCard
            heading="SDV....DevSecOps sales pitch #2"
            body="It's marvellous..."
            icon={() => <AppModernization size={32} />}
          />
          <InfoCard
            heading="SDV....Security sales pitch #3"
            body="It changes lives..."
            icon={() => <DataPrivacy size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
