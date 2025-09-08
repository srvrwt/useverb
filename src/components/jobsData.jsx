// Job
import FrontDeskCoordinator from "../assets/img/Front-Desk-Coordinator.webp";
import TechnicalSupport from "../assets/img/Technical-Support-Associate.webp";
import AccountManager from "../assets/img/Account-Manager.webp";
import TechCorpCustomerSuccess from "../assets/img/TechCorp-Customer-Success-Manager.webp";
import NextGenTechnicalSupport from "../assets/img/NextGen-Technical-Support.webp";
import MarketBridgeCustomerSuccess from "../assets/img/MarketBridge-Customer-Success-Manager.webp";
import ModaMartCustomerSuccess from "../assets/img/ModaMart-Customer-Success.webp";
import StratEdgeCustomerOutreach from "../assets/img/StratEdge-Customer-Outreach.webp";
import StyleNestStoreManager from "../assets/img/StyleNest-Store-Manager.webp";
import BitBridgeHelpDeskCoordinator from "../assets/img/BitBridge-Help-Desk-Coordinator.webp";
import AssistProSupportOperations from "../assets/img/AssistPro-Support-Operations-Analyst.webp";
import PhoneFlowInboundSales from "../assets/img/PhoneFlow-Inbound-Sales-Representative.webp";
import ByteMateTechnicalSolutions from "../assets/img/ByteMate-Technical-Solutions-Consultant.webp";
import ByteMateSupportOperations from "../assets/img/ByteMate-Support-Operations-Analyst.webp";
import BrandPulseCustomerAdvocacyLead from "../assets/img/BrandPulse-Customer-Advocacy-Lead.webp";

import SwiftStartOnboardingSuccess from "../assets/img/SwiftStart-Onboarding-Success-Manager.webp";
import FunnelAidCRMSupportExecutive from "../assets/img/FunnelAid-CRM-Support-Executive.webp";

// company Logo
import TechCorp from "../assets/icons/Logo-TechCorp.svg";
import VibeWorks from "../assets/icons/Logo-VibeWorks.svg";
import TechCorp2 from "../assets/icons/Logo-TechCorp2.svg";
import TechCorp3 from "../assets/icons/Logo-TechCorp3.svg";
import NextGenSystems from "../assets/icons/Logo-NextGenSystems.svg";
import MarketBridge from "../assets/icons/Logo-MarketBridge.svg";
import ModaMart from "../assets/icons/Logo-ModaMart.svg";
import StratEdge from "../assets/icons/Logo-StratEdge.svg";
import BitBridge from "../assets/icons/Logo-BitBridge.svg";
import AssistPro from "../assets/icons/Logo-AssistPro.svg";
import PhoneFlow from "../assets/icons/Logo-PhoneFlow.svg";
import ByteMate from "../assets/icons/Logo-ByteMate.svg";

import SwiftStart from "../assets/icons/Logo-SwiftStart.svg";
import CoreIQ from "../assets/icons/Logo-CoreIQ.svg";

const jobsData = [
  {
    id: 1,
    title: "Front Desk Coordinator",
    company: "TechCorp",
    logo: TechCorp,
    location: "New York, USA",
    description:
      "Welcome Clients, Manage Bookings, and Maintain a Smooth Front Office Experience. Coordinate Visitor Flow, Support Staff, And Maintain Scheduling Systems.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: FrontDeskCoordinator,
  },
  {
    id: 2,
    title: "Technical Support Associate",
    company: "VibeWorks",
    logo: VibeWorks,
    location: "New York, USA",
    description:
      "Oversee support workflows, optimize ticket response systems, monitor performance metrics, create process documentation, and drive team efficiency through structured operations management.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: TechnicalSupport,
  },
  {
    id: 3,
    title: "Account Manager",
    company: "TechCorp",

    logo: TechCorp2,
    location: "New York, USA",
    description:
      "Offer first-line IT support, resolve hardware and software issues, manage internal tools access, and escalate complex technical cases to senior engineers when required.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: AccountManager,
  },
  {
    id: 4,
    title: "Customer Success Manager",
    company: "TechCorp",
    logo: TechCorp3,
    location: "New York, USA",
    description:
      "Assist Users With Product Issues. Troubleshoot Problems, Document Resolutions, And Ensure Satisfaction Across Various Technical Touchpoints.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: TechCorpCustomerSuccess,
  },
  {
    id: 5,
    title: "Technical Support Associate",
    company: "NextGen Systems",
    logo: NextGenSystems,
    location: "New York, USA",
    description:
      "Respond To Real-Time Customer Inquiries Via Live Chat, Resolve Complaints Quickly, Guide Users Through Solutions, And Log Case Details For Reporting And Quality Review.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: NextGenTechnicalSupport,
  },
  {
    id: 6,
    title: "Customer Success Manager",
    company: "MarketBridge",
    logo: MarketBridge,
    location: "New York, USA",
    description:
      "Build And Nurture Online Communities. Organize Events, Drive Conversations, Measure Engagement, And Improve Digital Community Experiences.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: MarketBridgeCustomerSuccess,
  },
  {
    id: 7,
    title: "Customer Success Manager",
    company: "ModaMart",
    logo: ModaMart,
    location: "New York, USA",
    description:
      "Build And Nurture Online Communities. Organize Events, Drive Conversations, Measure Engagement, And Improve Digital Community Experiences.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: ModaMartCustomerSuccess,
  },
  {
    id: 8,
    title: "Customer Outreach Coordinator",
    company: "StratEdge",
    logo: StratEdge,
    location: "New York, USA",
    description:
      "Run Outreach Campaigns, Follow Up On NPS Feedback, Handle Email Responses, And Support The Marketing Team In Personalizing User Reactivation Messages.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: StratEdgeCustomerOutreach,
  },
  {
    id: 9,
    title: "Store Manager",
    company: "StyleNest",
    logo: VibeWorks,
    location: "New York, USA",
    description:
      "Run Daily Store Operations, Lead The Team, Manage Inventory, Oversee Staffing, Ensure Clean Displays, And Boost Customer Satisfaction.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: StyleNestStoreManager,
  },
  {
    id: 10,
    title: "Help Desk Coordinator",
    company: "BitBridge",
    logo: BitBridge,
    location: "New York, USA",
    description:
      "Supervise SaaS Support Team, Manage Advanced User Issues, Oversee Knowledge Base Accuracy, And Interface With The Dev Team To Ensure Timely Bug Fixes.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: BitBridgeHelpDeskCoordinator,
  },
  {
    id: 11,
    title: "Support Operations Analyst",
    company: "AssistPro",
    logo: AssistPro,
    location: "New York, USA",
    description:
      "Monitor Performance Metrics And Workflows. Analyze Team Data, Improve Support Processes, And Create Detailed Weekly Efficiency Reports.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: AssistProSupportOperations,
  },
  {
    id: 12,
    title: "Inbound Sales Representative",
    company: "PhoneFlow",
    logo: PhoneFlow,
    location: "New York, USA",
    description:
      "Design And Improve Support Workflows, Document Escalation Paths, Conduct Root Cause Analysis, And Ensure Support Team Tools Are Up To Date And Efficient.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: PhoneFlowInboundSales,
  },
  {
    id: 13,
    title: "Technical Solutions Consultant",
    company: "ByteMate",
    logo: ByteMate,
    location: "New York, USA",
    description:
      "Work With B2B Clients To Understand Technical Needs, Provide Software Solutioning, Troubleshoot Integrations, And Support Implementation Success From Onboarding To Scale.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: ByteMateTechnicalSolutions,
  },
  {
    id: 14,
    title: "Support Operations Analyst",
    company: "ByteMate",
    logo: ModaMart,
    location: "New York, USA",
    description:
      "Work With B2B Clients To Understand Technical Needs, Provide Software Solutioning, Troubleshoot Integrations, And Support Implementation Success From Onboarding To Scale.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: ByteMateSupportOperations,
  },
  {
    id: 15,
    title: "Customer Advocacy Lead",
    company: "BrandPulse",
    logo: VibeWorks,
    location: "Lisbon, Portugal",
    description:
      "Engage Power Users, Collect Stories And Testimonials, Manage Referral Campaigns, And Support Marketing By Highlighting Key Customer Success Use Cases.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: BrandPulseCustomerAdvocacyLead,
  },
  {
    id: 16,
    title: "Onboarding Success Manager",
    company: "SwiftStart",
    logo: SwiftStart,
    location: "Dubai, UAE",
    description:
      "Ensure Smooth Onboarding For New Customers, Offer Training, Answer Setup Queries, And Track Activation Progress Across The First 30 Days.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: SwiftStartOnboardingSuccess,
  },
  {
    id: 17,
    title: "Tech Support Project Manager",
    company: "CoreIQ",
    logo: CoreIQ,
    location: "Prague, Czech Republic",
    description:
      "Lead Tech Support Initiatives, Coordinate Cross-Functional Projects, Monitor Timelines, And Drive Service Enhancements Based On Recurring Client Technical Feedback.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: TechnicalSupport,
  },
  {
    id: 18,
    title: "CRM Support Executive",
    company: "FunnelAid",
    logo: NextGenSystems,
    location: "Johannesburg, South Africa",
    description:
      "Help Users Navigate CRM Tools, Manage Account Issues, Import/Export Data, Troubleshoot Bugs, And Offer Guidance On Best CRM Practices.",
    salary: "6 LPA",
    expiry: "20 Days",
    image: FunnelAidCRMSupportExecutive,
  },
];
export default jobsData;
