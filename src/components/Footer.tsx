import styled from '@emotion/styled';
import SocialShare from '@webteam/social-share';
import { ThemeProvider } from '@webteam/ui-contexts';
import config from 'config';
import React, { FunctionComponent } from 'react';
import { Col, Container, Row, Section } from '@webteam/layout';
import { useTextStyles } from '@webteam/typography';
import { Logo } from 'components';

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

  return (
    <StyledSection background={'dark'}>
      <ThemeProvider theme={'dark'}>
        <Container>
          <StyledRow>
            <Col span={1}>
              <Logo />
            </Col>
            <Col span={10}>
              <SocialShare {...config.socialShare} size={'s'} />

              <p className={textCn('wt-text-3', { flow: true })}>
                Copyright © 2000-2020 JetBrains s.r.o. Developed with drive and IntelliJ IDEA
              </p>
            </Col>
          </StyledRow>
        </Container>
      </ThemeProvider>
    </StyledSection>
  );
};

export default Footer;
