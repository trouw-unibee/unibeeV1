import React from 'react';

export default function IndexSectionDashboardBanners1() {
    return (
        <React.Fragment>
            <>
                <section className="bg-coolGray-50 py-72">  <div className="container px-8 mx-auto">    <div className="relative py-11 md:py-36 px-14 mx-auto bg-coolGray-900 rounded-md overflow-hidden">      <img className="absolute z-10 left-4 top-4" src="flex-ui-assets/elements/dashboard/banners/dots-purple.svg" alt />      <img className="absolute z-10 right-4 bottom-4" src="flex-ui-assets/elements/dashboard/banners/dots-red.svg" alt />      <img className="absolute h-64 top-0 -right-16 object-cover" src="flex-ui-assets/elements/dashboard/banners/wave.svg" alt />      <img className="absolute h-64 -bottom-20 -left-16 object-cover" src="flex-ui-assets/elements/dashboard/banners/wave.svg" alt />      <div className="relative z-10 text-center">        <h2 className="mb-6 text-2xl font-bold text-white tracking-tighter">UniBee Coming Soon...</h2>        <p className="mb-6 font-semibold text-coolGray-300">Where ideas flow effortlessly from university labs to the global marketplace.</p>    </div>  </div></div></section>


            </>
        </React.Fragment>
    );
}

