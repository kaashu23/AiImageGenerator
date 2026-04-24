import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag & drop your assets. We auto-optimize formats and size'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great fidelity'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready video.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: ' Try the platform at no cost',
        credits: 25,
        features: [
            '25 credits',
            'Started quality',
            'No Watermark',
            'Slow generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: ' Creators and small teams.',
        credits: 80,
        features: [
            '80 credits',
            'HD quality',
            'No Watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: ' Scale across teams and agencies',
        credits: 300,
        features: [
            '300 credits',
            'FHD quality',
            'No Watermark',
            'Fast generation speed',
            'Chat  + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How long does it take to generate a video?',
        answer: 'Most videos are generated within a few seconds to a couple of minutes depending on length, quality and server load. You will see real-time progress while your content is being processed.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We support standard image formats such as JPG, PNG and WEBP. You can also provide text prompts to generate AI visuals and short promotional videos.'
    },
    {
        question: 'Is there a limit to how many videos I can create?',
        answer: 'Yes – generation limits depend on your subscription plan or available credits. Higher plans allow more daily generations and longer video durations.'
    },
    {
        question: 'Is my data and content secure?',
        answer: 'Yes – all uploads and generated content are processed securely. We do not share your data with third parties and your projects remain private within your account.'
    }

];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];