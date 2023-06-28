"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import privacyPolicyData from './privacy-policy.json';
import Footer from '@/components/footer';

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({});

  useEffect(() => {
    setPrivacyPolicy(privacyPolicyData);
  }, []);

  return (
    <div className="">
     

      <main className="container mx-auto max-w-screen-xl px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 font-inter">{privacyPolicy.title}</h1>
        <div className="prose font-montserrat text-justify">{privacyPolicy.content}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
