import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Shield,
  Eye,
  Lock,
  Bell,
  FileText,
  Users,
} from "lucide-react";

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

// PolicySection component for each policy section with collapsible content
const PolicySection = ({ title, icon, children }) => {
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

// LastUpdated component showing when policy was last updated
const LastUpdated = ({ date }) => (
  <p className="text-sm text-gray-500 mb-6">
    Last Updated: <time dateTime={date}>{date}</time>
  </p>
);

// IntroSection component for the privacy policy introduction
const IntroSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Our Commitment to Privacy
    </h2>
    <p className="text-gray-600 mb-4">
      At [Company Name], we take your privacy seriously. This Privacy Policy
      explains how we collect, use, disclose, and safeguard your information
      when you visit our website or use our services.
    </p>
    <p className="text-gray-600">
      Please read this Privacy Policy carefully. By accessing or using our
      service, you acknowledge that you have read, understood, and agree to be
      bound by all the terms outlined in this policy.
    </p>
  </div>
);

// The main Privacy Policy component
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <PolicySection
            title="Information We Collect"
            icon={<Eye className="w-5 h-5 text-blue-600" />}
          >
            <div className="space-y-4">
              <h4 className="font-medium text-gray-800">
                Personal Information
              </h4>
              <p className="text-gray-600">
                We may collect personal information that you voluntarily provide
                when using our service, including but not limited to your name,
                email address, phone number, and billing information.
              </p>

              <h4 className="font-medium text-gray-800">Usage Data</h4>
              <p className="text-gray-600">
                We automatically collect certain information when you visit,
                use, or navigate our website. This information may include your
                IP address, browser type, operating system, referring URLs,
                device information, and pages visited.
              </p>

              <h4 className="font-medium text-gray-800">
                Cookies and Similar Technologies
              </h4>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <PolicySection
            title="How We Use Your Information"
            icon={<FileText className="w-5 h-5 text-green-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information to improve our
                  service
                </li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <PolicySection
            title="Data Security"
            icon={<Lock className="w-5 h-5 text-red-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                We implement appropriate technical and organizational security
                measures to protect your personal data against accidental or
                unlawful destruction, loss, alteration, unauthorized disclosure,
                or access.
              </p>
              <p className="text-gray-600">
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While
                we strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <PolicySection
            title="Third-Party Disclosure"
            icon={<Users className="w-5 h-5 text-purple-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                We may share your information with third parties in certain
                situations:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  Business partners, vendors, and service providers who perform
                  services on our behalf
                </li>
                <li>
                  In connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition
                </li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights or property</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <PolicySection
            title="Your Privacy Rights"
            icon={<Bell className="w-5 h-5 text-yellow-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">Access:</span> You may request
                  copies of your personal information.
                </li>
                <li>
                  <span className="font-medium">Rectification:</span> You may
                  request that we correct inaccurate information.
                </li>
                <li>
                  <span className="font-medium">Deletion:</span> You may request
                  that we delete your personal information.
                </li>
                <li>
                  <span className="font-medium">Restriction:</span> You may
                  request that we restrict the processing of your information.
                </li>
                <li>
                  <span className="font-medium">Data Portability:</span> You may
                  request to receive your personal information in a structured,
                  machine-readable format.
                </li>
                <li>
                  <span className="font-medium">Objection:</span> You may object
                  to our processing of your information.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise any of these rights, please contact us using the
                information provided in the "Contact Us" section.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about our Privacy Policy or
              data practices, please contact us at:
            </p>
            <div className="text-gray-800">
              <p>
                <span className="font-medium">Email:</span> privacy@company.com
              </p>
              <p>
                <span className="font-medium">Address:</span> 123 Privacy
                Street, Data City, 12345
              </p>
              <p>
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
