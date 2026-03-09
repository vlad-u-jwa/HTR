// HTR Windows & Doors – Alberta Landing Page Content

export const siteConfig = {
  company: 'HTR Windows & Doors',
  tagline: 'Alberta\'s Trusted Window & Door Replacement Specialists',
  phone: '+1 (403) 000-0000', // placeholder – replace with real AB number
  email: 'office@htrwindows.ca',
  website: 'https://htrwindows.ca',
  quoteUrl: 'https://htrwindows.ca/#get-a-free-quote',
}

export const stats = [
  { value: '1,500+', label: 'Windows & Doors Installed' },
  { value: '4.9★', label: '945 Verified Reviews' },
  { value: '20+', label: 'Years of Experience' },
  { value: '25-Year', label: 'Full Product Warranty' },
]

export const awards = [
  { label: 'Best of TrustedPros 2023', image: '/images/award-trustedpros.png' },
  { label: 'Best of HomeStars 2024', image: '/images/award-homestars.png' },
  { label: "Reader's Choice 2023 Diamond", image: '/images/award-readers-choice.png' },
  { label: 'Best of Houzz Service 2023', image: '/images/award-houzz.png' },
]

export interface Product {
  name: string
  description: string
  image: string
  category: 'window' | 'door'
}

export const products: Product[] = [
  {
    name: 'Casement Windows',
    description:
      'The most popular choice for Alberta homes – classic design with superior energy efficiency for cold Prairie winters.',
    image: '/images/casement-windows.jpg',
    category: 'window',
  },
  {
    name: 'Double Hung Windows',
    description:
      'Two sashes that slide up and down independently, making them easy to clean and ideal for any room.',
    image: '/images/double-hung-windows.jpg',
    category: 'window',
  },
  {
    name: 'Awning Windows',
    description:
      'Hinged at the top and opening outward, awning windows provide ventilation even during Alberta rain.',
    image: '/images/awning-windows.jpg',
    category: 'window',
  },
  {
    name: 'Bay & Bow Windows',
    description:
      'Create a stunning focal point in any room while flooding your interior with natural Alberta sunlight.',
    image: '/images/bay-windows.jpg',
    category: 'window',
  },
  {
    name: 'Fiberglass Entry Doors',
    description:
      'Customisable, weather-resistant, and built to handle Calgary\'s extreme temperature swings without warping.',
    image: '/images/fiberglass-doors.jpg',
    category: 'door',
  },
  {
    name: 'Steel Entry Doors',
    description:
      'Maximum security and durability in sophisticated designs – perfect for the demanding Alberta climate.',
    image: '/images/steel-doors.jpg',
    category: 'door',
  },
  {
    name: 'Patio Doors',
    description:
      'Smooth-gliding patio doors that connect your home to Alberta\'s stunning outdoor spaces with style.',
    image: '/images/patio-doors.jpg',
    category: 'door',
  },
]

export const whyUsPoints = [
  {
    icon: '🏆',
    title: 'Award-Winning Service',
    description:
      'Recognised by TrustedPros, HomeStars, and Houzz as one of Canada\'s top-rated window and door companies.',
  },
  {
    icon: '❄️',
    title: 'Built for Alberta Winters',
    description:
      'Our triple-pane, Energy Star-certified products are engineered to withstand Calgary\'s harsh freeze-thaw cycles.',
  },
  {
    icon: '✅',
    title: '25-Year Full Warranty',
    description:
      'Every installation is backed by our comprehensive product and labour warranty for total peace of mind.',
  },
  {
    icon: '💰',
    title: '0% Interest Financing',
    description:
      'Approved for up to $40,000 with 0% interest plans – get your new windows and doors today and pay over time.',
  },
  {
    icon: '🚀',
    title: 'Fast, Clean Installation',
    description:
      'Our certified Alberta crews complete most projects in a single day, leaving your home spotless when we\'re done.',
  },
  {
    icon: '⭐',
    title: '4.9-Star Rated',
    description:
      'Over 945 verified five-star reviews from homeowners across Ontario, BC, and now Calgary, Alberta.',
  },
]

export const serviceAreas = [
  'Calgary',
  'Airdrie',
  'Okotoks',
  'Cochrane',
  'Chestermere',
  'Strathmore',
  'High River',
  'Langdon',
  'Crossfield',
  'Carstairs',
  'Olds',
  'Canmore',
  'Banff',
  'Lethbridge',
  'Red Deer',
  'Medicine Hat',
  'Brooks',
  'Drumheller',
  'Edmonton',
]

export const testimonials = [
  {
    name: 'Stephen Wise',
    location: 'Concord, ON',
    rating: 5,
    text: 'I am so happy with our new door, we get compliments all the time. Dennis was amazing, quoted us the best price, had it made and installed in the timeline he said it would. The installer did a great job and cleaned the worksite perfectly, even in the cold of winter. I would definitely use them again.',
  },
  {
    name: 'Kathryn Mulberry',
    location: 'Kelowna, BC',
    rating: 5,
    text: 'We recently had 7 windows replaced with HTR and we are very pleased with dealing with Vadim the sales rep – absolutely a pleasure to deal with. The installers did such an amazing job inside and out! Highly recommend!',
  },
  {
    name: 'Mike Stern',
    location: 'Halifax, NS',
    rating: 5,
    text: "I got several quotes on replacing 10 windows. I chose HTR because they had the best quote and don't use high pressure sales. They came and installed all the windows in one day. Great guys, professional installers. They cleaned up everything before they left. HTR was 5 stars!",
  },
  {
    name: 'Wendy',
    location: 'Vernon, BC',
    rating: 5,
    text: 'All I can say is WOW! From the estimate to the final installation – outstanding! The windows are so efficient we are blown away. You can\'t hear anything from outside. We have tried other window companies and the quality of these are far superior. HIGHLY RECOMMEND!!!',
  },
  {
    name: 'Sean',
    location: 'Toronto, ON',
    rating: 5,
    text: 'Our family is very satisfied with our experience with HTR. From the quote to customer service to the installers, they were all incredibly efficient and supportive. We no longer have cold drafts coming in through our windows, and our energy bills have been reduced.',
  },
]

export const faqs = [
  {
    question: 'Do you service Calgary and surrounding areas?',
    answer:
      'Yes! We proudly serve Calgary and the entire surrounding region including Airdrie, Okotoks, Cochrane, Chestermere, Canmore, and more. Contact us to confirm availability in your specific location.',
  },
  {
    question: 'How long does a typical window replacement take?',
    answer:
      'Most residential window replacement projects are completed in a single day. Larger projects or complex installations may take two days. Our team works efficiently to minimise disruption to your daily routine.',
  },
  {
    question: 'Are your windows Energy Star certified for Alberta\'s climate?',
    answer:
      'Absolutely. All our windows meet or exceed Energy Star standards. Our triple-pane vinyl windows are specifically designed to handle Alberta\'s extreme temperature range, reducing heat loss significantly.',
  },
  {
    question: 'What financing options do you offer?',
    answer:
      'We offer approved financing up to $40,000 with 0% interest plans. We also have 60 equal monthly payment plans and various cut-rate monthly options to suit every budget. Contact us for details (OAC).',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'Every installation comes with our 25-year full product warranty. This covers both materials and workmanship, giving you long-term peace of mind with your investment.',
  },
  {
    question: 'How do I get a free quote?',
    answer:
      'Simply fill out the quote form on this page or call us directly. A local HTR representative will contact you within 24 hours to schedule a no-obligation, in-home assessment.',
  },
]
