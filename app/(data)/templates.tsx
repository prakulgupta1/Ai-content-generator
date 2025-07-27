const templates = [
  {
    name: 'Blog Title',
    desc: 'An AI tool that generates blog title depends on your blog information',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/5508/5508507.png',
    aiPrompt: 'Give me 5 blog topic ideas in bullet wise only based on given niche and outline and give me result in Rich text editor format',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Outline',
    desc: 'An AI tool that serves as your personal blog post title',
    category: 'Youtube Tool',
    slug: 'youtube-tag',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    aiPrompt: 'Generate 10 Youtube tags in bullet point based on title',
    form: [
      {
        label: 'Enter your youtube title',
        field: 'input',
        name: 'title',
        required: true,
      },
    ],
  },
  {
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'An AI tool to rewrite existing articles into original content',
    category: 'Article Tool',
    slug: 'rewrite-article',
    icon: 'https://cdn-icons-png.flaticon.com/128/599/599305.png',
    aiPrompt: 'Rewrite the given article in a plagiarism-free way',
    form: [
      {
        label: 'Enter the article you want to rewrite',
        field: 'textarea',
        name: 'article',
        required: true,
      },
    ],
  },
  {
    name: 'Medical Advice Generator',
    desc: 'Provides general medical guidance based on symptoms',
    category: 'Healthcare Tool',
    slug: 'medical-advice',
    icon: 'https://cdn-icons-png.flaticon.com/128/10489/10489852.png',
    aiPrompt: 'Give general health advice based on the symptoms. Mention this is not a substitute for professional care.',
    form: [
      {
        label: 'Describe your symptoms',
        field: 'textarea',
        name: 'symptoms',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Caption Generator',
    desc: 'Create engaging Instagram captions for your posts',
    category: 'Social Media Tool',
    slug: 'instagram-caption',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
    aiPrompt: 'Generate 5 creative Instagram captions for the given photo description or topic',
    form: [
      {
        label: 'Describe your Instagram post',
        field: 'textarea',
        name: 'description',
        required: true,
      },
    ],
  },
  {
    name: 'Tweet Generator',
    desc: 'Generate viral tweets from a simple idea or keyword',
    category: 'Social Media Tool',
    slug: 'tweet-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
    aiPrompt: 'Generate 5 engaging tweets under 280 characters based on the idea or topic',
    form: [
      {
        label: 'Enter a tweet topic or idea',
        field: 'input',
        name: 'idea',
        required: true,
      },
    ],
  },
  {
    name: 'Meta Description Generator',
    desc: 'Generate SEO-friendly meta descriptions for your website or blog',
    category: 'SEO Tool',
    slug: 'meta-description',
    icon: 'https://cdn-icons-png.flaticon.com/128/10395/10395140.png',
    aiPrompt: 'Generate a meta description under 160 characters for SEO, based on the provided content',
    form: [
      {
        label: 'Enter page or blog content',
        field: 'textarea',
        name: 'content',
        required: true,
      },
    ],
  },
  {
    name: 'Product Description Generator',
    desc: 'Write compelling product descriptions to boost sales',
    category: 'E-commerce Tool',
    slug: 'product-description',
    icon: 'https://cdn-icons-png.flaticon.com/128/891/891419.png',
    aiPrompt: 'Generate a compelling product description based on the input',
    form: [
      {
        label: 'Enter product name and features',
        field: 'textarea',
        name: 'product',
        required: true,
      },
    ],
  },
  {
<<<<<<< HEAD
    name: 'Cold Email Generator',
    desc: 'Generate professional cold emails for outreach or sales',
    category: 'Email Tool',
    slug: 'cold-email-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/5610/5610944.png',
    aiPrompt: 'Write a cold email for outreach based on the given recipient details and purpose',
    form: [
      {
        label: 'Who is your target audience?',
        field: 'input',
        name: 'audience',
        required: true,
      },
      {
        label: 'Purpose of the email',
        field: 'textarea',
        name: 'purpose',
=======
    name: 'Facebook Ad Copy Generator',
    desc: 'Create high-converting Facebook ad copy based on your product or offer',
    category: 'Marketing Tool',
    slug: 'facebook-ad-copy',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384005.png',
    aiPrompt: 'Generate 3 Facebook ad copies for the given product or service in a persuasive tone',
    form: [
      {
        label: 'Describe your product or offer',
        field: 'textarea',
        name: 'product',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
  {
<<<<<<< HEAD
    name: 'LinkedIn Bio Generator',
    desc: 'Create a professional LinkedIn bio to showcase your profile',
    category: 'Social Media Tool',
    slug: 'linkedin-bio',
    icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
    aiPrompt: 'Generate a professional LinkedIn bio based on job title and experience',
    form: [
      {
        label: 'Enter your job title and experience',
        field: 'textarea',
        name: 'bioInput',
=======
    name: 'LinkedIn Post Generator',
    desc: 'Craft professional LinkedIn posts to increase engagement and reach',
    category: 'Social Media Tool',
    slug: 'linkedin-post',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384014.png',
    aiPrompt: 'Generate a professional LinkedIn post based on the provided idea or event',
    form: [
      {
        label: 'What do you want to talk about?',
        field: 'textarea',
        name: 'topic',
        required: true,
      },
    ],
  },
  {
    name: 'Cold Email Generator',
    desc: 'Generate personalized cold emails for outreach or sales',
    category: 'Email Tool',
    slug: 'cold-email',
    icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
    aiPrompt: 'Write a persuasive cold email based on recipient’s profession and your offer',
    form: [
      {
        label: 'Describe your offer or purpose',
        field: 'textarea',
        name: 'offer',
        required: true,
      },
      {
        label: 'Who is the recipient (job title or company)?',
        field: 'input',
        name: 'recipient',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
  {
    name: 'FAQ Generator',
<<<<<<< HEAD
    desc: 'Generate frequently asked questions for your product or service',
    category: 'Website Tool',
    slug: 'faq-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/5460/5460377.png',
    aiPrompt: 'Generate 5 common FAQs based on the provided product or service',
    form: [
      {
        label: 'Describe your product or service',
        field: 'textarea',
        name: 'productService',
=======
    desc: 'Automatically create FAQs for websites or product pages',
    category: 'Website Tool',
    slug: 'faq-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/2907/2907271.png',
    aiPrompt: 'Generate 5 FAQ questions and answers for the given product or topic',
    form: [
      {
        label: 'Enter topic or product name',
        field: 'input',
        name: 'topic',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
  {
<<<<<<< HEAD
    name: 'Ad Copy Generator',
    desc: 'Create persuasive ad copy for your campaigns',
    category: 'Marketing Tool',
    slug: 'ad-copy-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
    aiPrompt: 'Write 3 variations of ad copy for the given product or service',
    form: [
      {
        label: 'Enter product name and target audience',
        field: 'textarea',
        name: 'adDetails',
        required: true,
      },
    ],
  },
  {
    name: 'Slogan Generator',
    desc: 'Create catchy slogans for your brand or campaign',
    category: 'Branding Tool',
    slug: 'slogan-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/10405/10405802.png',
    aiPrompt: 'Generate 5 catchy slogans based on the brand or product',
    form: [
      {
        label: 'Enter brand name and purpose',
        field: 'input',
        name: 'brandPurpose',
        required: true,
      },
    ],
  },
  {
    name: 'Resume Summary Generator',
    desc: 'Write a compelling resume summary for job applications',
    category: 'Career Tool',
    slug: 'resume-summary',
    icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
    aiPrompt: 'Generate a professional resume summary based on experience and skills',
    form: [
      {
        label: 'Enter your work experience and skills',
        field: 'textarea',
        name: 'resumeDetails',
=======
    name: 'Call-to-Action Generator',
    desc: 'Generate strong CTAs for emails, landing pages, and ads',
    category: 'Marketing Tool',
    slug: 'cta-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
    aiPrompt: 'Generate 5 powerful call-to-action lines for the provided product or goal',
    form: [
      {
        label: 'Describe your product or goal',
        field: 'textarea',
        name: 'goal',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
  {
<<<<<<< HEAD
    name: 'YouTube Script Generator',
    desc: 'Generate a short video script based on a topic',
    category: 'Youtube Tool',
    slug: 'youtube-script',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
    aiPrompt: 'Generate a 2-minute YouTube script on the given topic',
    form: [
      {
        label: 'Enter video topic',
        field: 'input',
        name: 'videoTopic',
=======
    name: 'YouTube Video Description Generator',
    desc: 'Write optimized YouTube descriptions that boost video SEO',
    category: 'Youtube Tool',
    slug: 'youtube-description',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
    aiPrompt: 'Generate a YouTube video description with hashtags and SEO keywords based on title and content',
    form: [
      {
        label: 'Enter video title',
        field: 'input',
        name: 'title',
        required: true,
      },
      {
        label: 'Enter video content/summary',
        field: 'textarea',
        name: 'summary',
      },
    ],
  },
  {
    name: 'Pinterest Pin Description Generator',
    desc: 'Create SEO-friendly pin descriptions to drive traffic',
    category: 'Social Media Tool',
    slug: 'pinterest-pin',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png',
    aiPrompt: 'Generate an engaging Pinterest pin description with keywords based on the given topic',
    form: [
      {
        label: 'Enter pin topic or product',
        field: 'input',
        name: 'topic',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
  {
<<<<<<< HEAD
    name: 'Newsletter Generator',
    desc: 'Create engaging newsletter content for your subscribers',
    category: 'Email Tool',
    slug: 'newsletter-generator',
    icon: 'https://cdn-icons-png.flaticon.com/128/5610/5610944.png',
    aiPrompt: 'Generate a newsletter introduction and 3 content sections based on the theme',
    form: [
      {
        label: 'Enter newsletter theme or topic',
        field: 'input',
        name: 'newsletterTopic',
=======
    name: 'Value Proposition Generator',
    desc: 'Define clear and concise value propositions for your business or product',
    category: 'Business Tool',
    slug: 'value-proposition',
    icon: 'https://cdn-icons-png.flaticon.com/128/2702/2702602.png',
    aiPrompt: 'Generate a strong value proposition statement for the given product or business idea',
    form: [
      {
        label: 'Describe your product or business',
        field: 'textarea',
        name: 'business',
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
        required: true,
      },
    ],
  },
];

export default templates;
