import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  RefreshCw,
  CalendarClock,
  CreditCard,
  ShoppingCart,
  HelpCircle,
  Store,
  ReceiptText,
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

// IntroSection component for the refund policy introduction
const IntroSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Our Refund Policy
    </h2>
    <p className="text-gray-600 mb-4">
      At [Company Name], we strive to ensure your complete satisfaction with our
      products and services. This Refund Policy outlines our procedures and
      guidelines regarding returns, refunds, and exchanges.
    </p>
    <p className="text-gray-600">
      We encourage you to read this policy carefully before making a purchase.
      By placing an order with us, you agree to the terms outlined in this
      Refund Policy.
    </p>
  </div>
);

// The main Refund Policy component
const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <RefreshCw className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Refund Policy
            </h1>
            <LastUpdated date="March 20, 2025" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <PolicySection
            title="Eligibility for Refunds"
            icon={<ShoppingCart className="w-5 h-5 text-green-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                To be eligible for a refund, please make sure the following
                conditions are met:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  The item must be unused and in the same condition that you
                  received it
                </li>
                <li>The item must be in its original packaging</li>
                <li>You must have the receipt or proof of purchase</li>
                <li>
                  The return must be initiated within the specified return
                  period
                </li>
              </ul>
              <p className="text-gray-600">
                The following items cannot be refunded:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Custom or personalized items</li>
                <li>Items marked as non-refundable at the time of purchase</li>
                <li>Certain health and personal care items</li>
              </ul>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <PolicySection
            title="Return Timeframe"
            icon={<CalendarClock className="w-5 h-5 text-orange-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                To be eligible for a return, you must initiate the return
                process within:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">30 days</span> of purchase for
                  most products
                </li>
                <li>
                  <span className="font-medium">14 days</span> of purchase for
                  electronics
                </li>
                <li>
                  <span className="font-medium">7 days</span> of purchase for
                  perishable items
                </li>
              </ul>
              <p className="text-gray-600">
                If more than the specified timeframe has passed since your
                purchase, we are sorry but we cannot offer you a refund or
                exchange.
              </p>
              <p className="text-gray-600">
                For seasonal, sale, or clearance items, please note that these
                may have different return timeframes which will be clearly
                indicated at the time of purchase.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <PolicySection
            title="Refund Process"
            icon={<ReceiptText className="w-5 h-5 text-blue-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Once we receive your returned item, we will inspect it and
                notify you that we have received your returned item. We will
                also notify you of the approval or rejection of your refund.
              </p>
              <p className="text-gray-600">
                If approved, your refund will be processed, and a credit will be
                automatically applied to your original method of payment within:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">3-5 business days</span> for
                  credit card payments
                </li>
                <li>
                  <span className="font-medium">5-10 business days</span> for
                  bank transfers
                </li>
                <li>
                  <span className="font-medium">1-2 business days</span> for
                  store credit or gift cards
                </li>
              </ul>
              <p className="text-gray-600">
                Please note that depending on your credit card company, it may
                take an additional 2-10 business days after your credit is
                applied for it to post to your account.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <PolicySection
            title="Shipping Costs"
            icon={<Store className="w-5 h-5 text-purple-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Return shipping costs are the responsibility of the customer
                except in the following cases:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>The item received was damaged or defective</li>
                <li>We sent you an incorrect item</li>
                <li>The item differs significantly from its description</li>
              </ul>
              <p className="text-gray-600">
                In these cases, we will provide a prepaid shipping label or
                reimburse your return shipping costs.
              </p>
              <p className="text-gray-600">
                Original shipping costs are non-refundable. If you receive a
                refund, the cost of return shipping will be deducted from your
                refund unless one of the above exceptions applies.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <PolicySection
            title="Exchange Policy"
            icon={<CreditCard className="w-5 h-5 text-red-600" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                We are happy to exchange items that meet our return eligibility
                requirements. To request an exchange:
              </p>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                <li>
                  Contact our customer service team within the eligible return
                  period
                </li>
                <li>
                  Provide your order number and details of the item you wish to
                  exchange
                </li>
                <li>Specify the item you would like to receive instead</li>
                <li>
                  Return the original item as directed by our customer service
                  team
                </li>
              </ol>
              <p className="text-gray-600">
                If the exchange item is of greater value than your original
                purchase, you will need to pay the difference. If the exchange
                item is of lesser value, we will refund the difference to your
                original payment method.
              </p>
              <p className="text-gray-600">
                Please note that we can only exchange items if the replacement
                is in stock. If the item is unavailable, we will issue a refund
                instead.
              </p>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <PolicySection
            title="Frequently Asked Questions"
            icon={<HelpCircle className="w-5 h-5 text-yellow-600" />}
          >
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-gray-800 mb-1">
                  Can I return a gift?
                </h4>
                <p className="text-gray-600">
                  Yes, gifts can be returned with a gift receipt or proof of
                  purchase. Refunds for gifts will be issued as store credit or
                  gift cards.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-gray-800 mb-1">
                  What if my item is damaged or defective?
                </h4>
                <p className="text-gray-600">
                  Please contact us immediately if you receive a damaged or
                  defective item. We will arrange for a return shipping label
                  and process a replacement or refund as soon as possible.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-gray-800 mb-1">
                  Can I cancel my order?
                </h4>
                <p className="text-gray-600">
                  Orders can be canceled within 24 hours of placement if they
                  have not yet been shipped. Please contact our customer service
                  team immediately if you wish to cancel an order.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-gray-800 mb-1">
                  What about sale or clearance items?
                </h4>
                <p className="text-gray-600">
                  Items purchased on sale or clearance may have different return
                  policies, which will be clearly indicated at the time of
                  purchase. Generally, final sale items cannot be returned.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-1">
                  How do I initiate a return?
                </h4>
                <p className="text-gray-600">
                  To initiate a return, please contact our customer service team
                  through our website, email, or phone. You will need to provide
                  your order number and details about the item(s) you wish to
                  return.
                </p>
              </div>
            </div>
          </PolicySection>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="bg-green-50 rounded-lg p-6 border border-green-100 mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Refund Policy, please contact
              our customer service team:
            </p>
            <div className="text-gray-800">
              <p>
                <span className="font-medium">Email:</span> returns@company.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> (555) 456-7890
              </p>
              <p>
                <span className="font-medium">Hours:</span> Monday-Friday,
                9am-5pm EST
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default RefundPolicy;
