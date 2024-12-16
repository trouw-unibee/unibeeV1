import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionDashboardBanners1 from '../components/dashboard-banners/IndexSectionDashboardBanners1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionDashboardBanners1 />
    </React.Fragment>
  );
}

