import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SkewedContainer from '../components/SkewedContainer';
import {
  Link,
  GlobalHeader,
  GlobalFooter,
  Trans,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';

const NotFoundPage = ({ pageContext }) => {
  const { t } = useTranslation();
  return (
    <>
      <GlobalHeader />
      <div
        css={css`
          display: grid;
          grid-template-rows: 1fr auto;
          grid-template-areas:
            'content'
            'footer';
          min-height: 100vh;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            grid-area: content;
          `}
        >
          <SkewedContainer
            css={css`
              font-size: 1.125rem;
              padding: 8rem 0;
            `}
          >
            <h1
              css={css`
                font-family: var(--secondary-font-family);
                font-size: 9rem;
                font-weight: normal;
                line-height: 1;
              `}
            >
              {t('404.statusCode')}
            </h1>
            <Trans i18nKey="404.errorMessage" parent="p">
              The URL you entered may be broken, or the page has been removed.{' '}
              <Link to="/">Go back to the home page</Link>.
            </Trans>
          </SkewedContainer>
        </div>
        <GlobalFooter fileRelativePath={pageContext.fileRelativePath} />
      </div>
    </>
  );
};

NotFoundPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default NotFoundPage;
