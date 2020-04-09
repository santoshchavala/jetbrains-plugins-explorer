import styled from '@emotion/styled';
import { Col, Container, Row, Section } from '@webteam/layout';
import SocialShare from '@webteam/social-share';
import { useTextStyles } from '@webteam/typography';
import { ThemeProvider } from '@webteam/ui-contexts';
import { Logo } from 'components';
import config from 'config';
import React, { FunctionComponent } from 'react';
import { useData, useFilteredData } from 'store';

const StyledSection = styled(Section)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  padding: 0;
`;

const StyledRow = styled(Row)`
  margin: 1rem 0;
`;

const Footer: FunctionComponent = () => {
  const textCn = useTextStyles();
  const [data] = useData();
  const [filteredData] = useFilteredData();

  return (
    <StyledSection background={'dark'}>
      <ThemeProvider theme={'dark'}>
        <Container>
          <StyledRow alignItems="center">
            <Col span={1}>
              <Logo />
            </Col>
            <Col span={6}>
              <SocialShare {...config.socialShare} size={'s'} />
              <p className={textCn('wt-text-3', { flow: true })}>
                Copyright © 2000-2020 JetBrains s.r.o. Developed with drive and IntelliJ IDEA
              </p>
            </Col>
            <Col span={5}>
              <p className={textCn('wt-text-3', { flow: true })}>
                Displaying
                <strong>
                  {' '}
                  {filteredData.length} of {data.length}{' '}
                </strong>
                repositories.
              </p>
              <p className={textCn('wt-text-3', { flow: true })}>
                Let us know if you have any feedback or{' '}
                <a
                  href="https://youtrack.jetbrains.com/newIssue?project=IJSDK&summary=%5BPlugins%20Explorer%5D"
                  className={textCn('wt-link')}
                >
                  feature request
                </a>
                .
              </p>
            </Col>
          </StyledRow>
        </Container>
      </ThemeProvider>
    </StyledSection>
  );
};

export default Footer;
