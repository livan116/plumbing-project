import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FileText,
  Scale,
  Clock,
  AlertTriangle,
  ShieldAlert,
  Handshake,
  Globe,
} from "lucide-react";
import Navbar from "../components/Navbar";
import PipeoFooter from "../components/footer/PipeoFooter";

// AnimatedSection component for fade-in sections
const AnimatedSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// TermsSection component for each terms section with collapsible content
const TermsSection = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center">
          {icon}
          <h3 className="ml-3 text-lg font-medium text-gray-800">{title}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

// LastUpdated component showing when terms were last updated
const LastUpdated = ({ date }) => (
  <p className="text-sm text-gray-500 mb-6">
    Last Updated: <time dateTime={date}>{date}</time>
  </p>
);

// IntroSection component for the terms introduction
const IntroSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Agreement to Terms
    </h2>
    <p className="text-gray-600 mb-4">
      These Terms and Conditions constitute a legally binding agreement made
      between you, whether personally or on behalf of an entity ("you") and
      [Company Name] ("we," "us" or "our"), concerning your access to and use of
      our website as well as any other media form, media channel, mobile website
      or mobile application related, linked, or otherwise connected thereto
      (collectively, the "Site").
    </p>
    <p className="text-gray-600">
      You agree that by accessing the Site, you have read, understood, and agree
      to be bound by all of these Terms and Conditions. If you do not agree with
      all of these Terms and Conditions, then you are expressly prohibited from
      using the Site and you must discontinue use immediately.
    </p>
  </div>
);

// The main Terms and Conditions component
const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

    <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
              <Scale className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Terms and Conditions
            </h1>
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <TermsSection
            title="Use License"
            icon={<FileText className="w-5 h-5 text-indigo-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the
                materials on the Site for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the Site
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
              <p className="text-gray-600">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by us at any time.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <TermsSection
            title="User Representations"
            icon={<Handshake className="w-5 h-5 text-green-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  You have the legal capacity to accept these Terms and
                  Conditions
                </li>
                <li>You are at least 18 years of age</li>
                <li>
                  You will not access the Site through automated or non-human
                  means
                </li>
                <li>
                  You will not use the Site for any illegal or unauthorized
                  purpose
                </li>
                <li>
                  Your use of the Site will not violate any applicable law or
                  regulation
                </li>
              </ul>
              <p className="text-gray-600">
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Site.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <TermsSection
            title="Prohibited Activities"
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
              <p className="text-gray-600">
                As a user of the Site, you agree not to:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  Systematically retrieve data or other content from the Site to
                  create a collection, compilation, database, or directory
                </li>
                <li>
                  Make any unauthorized use of the Site, including collecting
                  usernames, email addresses, or passwords
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site
                </li>
                <li>
                  Use the Site to advertise or offer to sell goods and services
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the Site
                </li>
                <li>
                  Upload or transmit viruses, Trojan horses, or other material
                  that interferes with any party's use of the Site
                </li>
                <li>
                  Use any device, software, or routine that interferes with the
                  proper working of the Site
                </li>
              </ul>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <TermsSection
            title="Intellectual Property Rights"
            icon={<ShieldAlert className="w-5 h-5 text-purple-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the "Content") and the trademarks, service
                marks, and logos contained therein (the "Marks") are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights.
              </p>
              <p className="text-gray-600">
                The Content and the Marks are provided on the Site "AS IS" for
                your information and personal use only. Except as expressly
                provided in these Terms and Conditions, no part of the Site and
                no Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or
                otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <TermsSection
            title="Term and Termination"
            icon={<Clock className="w-5 h-5 text-yellow-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                These Terms and Conditions shall remain in full force and effect
                while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE TERMS AND CONDITIONS OR OF ANY
                APPLICABLE LAW OR REGULATION.
              </p>
              <p className="text-gray-600">
                We may terminate your use or participation in the Site or delete
                any content or information that you posted at any time, without
                warning, in our sole discretion.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <TermsSection
            title="Governing Law"
            icon={<Globe className="w-5 h-5 text-blue-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                These Terms and Conditions and your use of the Site are governed
                by and construed in accordance with the laws of the State of
                [State], applicable to agreements made and to be entirely
                performed within the State of [State], without regard to its
                conflict of law principles.
              </p>
              <p className="text-gray-600">
                Any legal action of whatever nature brought by either you or us
                shall be commenced or prosecuted in the state and federal courts
                located in [County], [State], and you hereby consent to, and
                waive all defenses of lack of personal jurisdiction and forum
                non conveniens with respect to venue and jurisdiction in such
                state and federal courts.
              </p>
            </div>
          </TermsSection>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="text-gray-800">
              <p>
                <span className="font-medium">Email:</span> legal@company.com
              </p>
              <p>
                <span className="font-medium">Address:</span> 123 Legal Avenue,
                Terms City, 12345
              </p>
              <p>
                <span className="font-medium">Phone:</span> (555) 987-6543
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <PipeoFooter/>
    </div>
  );
};

export default TermsAndConditions;
