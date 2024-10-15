import {
  BoltIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ClockIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/new-benefit-one.png";
import benefitTwoImg from "../../public/img/new-benefit-two.png";

const benefitOne = {
  id: "benefit-one",
  title: "Why Choose Zabam Loans?",
  desc: "Discover the key benefits of choosing Zabam Loans, from personalized support to fast approvals, all designed to meet your financial needs effectively.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personalized Support",
      desc: "We take the time to understand your financial situation, offering tailored loan solutions that work best for you.",
      icon: <UserCircleIcon />,
    },
    {
      title: "Fast Approvals",
      desc: "With our quick and efficient approval process, you can get the funding you need without delays.",
      icon: <ClockIcon />,
    },
    {
      title: "Long-Term Stability",
      desc: "Our transparent terms and flexible repayment plans ensure financial security and peace of mind for the long term.",
      icon: <BriefcaseIcon />,
    },
  ],
};

const benefitTwo = {
  id: "benefit-one",
  title: "Tailored Solutions for Every Need",
  desc: "Zabam Loans provides flexible, customer-centric loan solutions to help you achieve your financial goals. With easy access and modern technology, we ensure a smooth experience.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Accessible on All Devices",
      desc: "Our platform is fully responsive, allowing you to apply for loans and manage your finances from any device, anytime.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Advanced Technology",
      desc: "We leverage the latest tech to provide a seamless, fast, and secure loan application process.",
      icon: <BoltIcon />,
    },
    {
      title: "Secure Transactions",
      desc: "Zabam Loans ensures the safety of your information with industry-leading encryption and security measures.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

const locations = [
  {
    address: "3511 Cowper St, Palo Alto, CA 94306",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5691480760074!2d-122.11966892417286!3d37.42365743230827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba6811fbcd99%3A0x52536d4328b13d62!2s3511%20Cowper%20St%2C%20Palo%20Alto%2C%20CA%2094306%2C%20USA!5e0!3m2!1sen!2sus!4v1728752259029!5m2!1sen!2sus",
  },
  {
    address: "324 Langton Ave, Los Altos, CA 94022",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.640906138926!2d-122.11682552417286!3d37.38334057982771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f89e7f8c8f%3A0xa1f0a85b37b6c10!2s324%20Langton%20Ave%2C%20Los%20Altos%2C%20CA%2094022%2C%20USA!5e0!3m2!1sen!2sus!4v1728752610772!5m2!1sen!2sus",
  },
  {
    address: "811 Hamilton Ave, Menlo Park, CA 94025",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5122615513355!2d-122.18856522417286!3d37.454763279825304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba623b63e565%3A0x5e052b24f6b7b9e9!2s811%20Hamilton%20Ave%2C%20Menlo%20Park%2C%20CA%2094025%2C%20USA!5e0!3m2!1sen!2sus!4v1728752651260!5m2!1sen!2sus",
  },
  {
    address: "1062 Ray Ave, Los Altos, CA 94022",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.571845965679!2d-122.12836642417286!3d37.39411387983568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f86e5d6051%3A0x30f1d0f02154e256!2s1062%20Ray%20Ave%2C%20Los%20Altos%2C%20CA%2094022%2C%20USA!5e0!3m2!1sen!2sus!4v1728752682019!5m2!1sen!2sus",
  },
  {
    address: "2350 Sierra Ct, Palo Alto, CA 94303",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5141626012167!2d-122.13602922417286!3d37.43957397982509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba53a9b78e69%3A0xe46f8d80329ffb93!2s2350%20Sierra%20Ct%2C%20Palo%20Alto%2C%20CA%2094303%2C%20USA!5e0!3m2!1sen!2sus!4v1728752711178!5m2!1sen!2sus",
  },
  {
    address: "1131 Del Norte Ave, Menlo Park, CA 94025",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.537542903395!2d-122.19917682417286!3d37.4581383798253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba3d8b70d91b%3A0x4c36d7bfe8f70c8!2s1131%20Del%20Norte%20Ave%2C%20Menlo%20Park%2C%20CA%2094025%2C%20USA!5e0!3m2!1sen!2sus!4v1728752737583!5m2!1sen!2sus",
  },
  {
    address: "3261 Camino Diablo, Byron, CA 94514",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.687598645088!2d-121.68307542416903!3d38.06805567971952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f5a236dcfef97%3A0x1c7e8788447cc4ae!2s3261%20Camino%20Diablo%2C%20Byron%2C%20CA%2094514%2C%20USA!5e0!3m2!1sen!2sus!4v1728752769014!5m2!1sen!2sus",
  },
  {
    address: "6983 Rockton Pl, San Jose, CA 95119",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.9819916131956!2d-121.88318632416903!3d37.189760079823984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca62371a6f07%3A0xd95d376d10ac8f66!2s6983%20Rockton%20Pl%2C%20San%20Jose%2C%20CA%2095119%2C%20USA!5e0!3m2!1sen!2sus!4v1728752791048!5m2!1sen!2sus",
  },
  {
    address: "27429 Walnut Ct, Tracy, CA 95304",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5540143014736!2d-121.44333232416903!3d37.73951517978984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4a8274c4f75%3A0x3b9641b7160743fc!2s27429%20Walnut%20Ct%2C%20Tracy%2C%20CA%2095304%2C%20USA!5e0!3m2!1sen!2sus!4v1728752814866!5m2!1sen!2sus",
  },
  {
    address: "3955 Duncan Pl, Palo Alto, CA 94306",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5666979792533!2d-122.13917892417286!3d37.42343967982907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba6c1bfb0c95%3A0x71ae0c978e74e6d3!2s3955%20Duncan%20Pl%2C%20Palo%20Alto%2C%20CA%2094306%2C%20USA!5e0!3m2!1sen!2sus!4v1728752841212!5m2!1sen!2sus",
  },
  {
    address: "1265 Greenbrier Rd, San Carlos, CA 94070",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7767370842845!2d-122.25145332417286!3d37.4908361798315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c358dc22ef5%3A0xfed02837cde5a5c9!2s1265%20Greenbrier%20Rd%2C%20San%20Carlos%2C%20CA%2094070%2C%20USA!5e0!3m2!1sen!2sus!4v1728752870468!5m2!1sen!2sus",
  },
  {
    address: "2735 Live Oak Terrace, Hayward, CA 94541",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.873109746789!2d-122.08467452416903!3d37.65111857982624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f81dbf68d4b5b%3A0xf591d0459bdfbd83!2s2735%20Live%20Oak%20Terrace%2C%20Hayward%2C%20CA%2094541%2C%20USA!5e0!3m2!1sen!2sus!4v1728752894365!5m2!1sen!2sus",
  },
  {
    address: "3124 Dominic Dr, Castro Valley, CA 94546",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.9608265889195!2d-122.09679732416903!3d37.689894979726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8d8c2cf72c5b%3A0x99de0344b816e5bc!2s3124%20Dominic%20Dr%2C%20Castro%20Valley%2C%20CA%2094546%2C%20USA!5e0!3m2!1sen!2sus!4v1728752918205!5m2!1sen!2sus",
  },
  {
    address: "45 Paquita Espana Ct, Morgan Hill, CA 95037",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.9739014822995!2d-121.65968782416903!3d37.11662257978057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f3e486eea16c3%3A0x3aa3c5f7c1e4b07!2s45%20Paquita%20Espana%20Ct%2C%20Morgan%20Hill%2C%20CA%2095037%2C%20USA!5e0!3m2!1sen!2sus!4v1728752932110!5m2!1sen!2sus",
  },
  {
    address: "849 Second St, Gilroy, CA 95020",
    openHours: "Mon-Sat / 9-5:30",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.290080479432!2d-121.56949682416903!3d37.00793557982587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f0c87ecb7cb6b%3A0x85eeb34d2be746e6!2s849%20Second%20St%2C%20Gilroy%2C%20CA%2095020%2C%20USA!5e0!3m2!1sen!2sus!4v1728752952454!5m2!1sen!2sus",
  },
];

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Benefits of Non-Bank Loans",
    href: "/non-bank-loan-benefits",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const contactInformation = [
  {
    label: "Address",
    icon: <MapPinIcon />,
    detail: "3511 Cowper St, Palo Alto, CA 94306",
    href: "",
  },
  {
    label: "Phone Number",
    icon: <PhoneIcon />,
    detail: "(478) 758-7475",
    href: "tel:+4787587475",
  },
  {
    label: "Email",
    icon: <EnvelopeIcon />,
    detail: "info@zabamloans.com",
    href: "mailto:info@zabamloans.com",
  },
  {
    label: "License Number",
    icon: <BuildingOffice2Icon />,
    detail: `License Number - 662801`,
    href: "",
  }
];

export { benefitOne, benefitTwo, locations, navigation, contactInformation };
