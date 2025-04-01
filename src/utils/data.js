import jane from "././../assets/images/staff/pexels-andrea-piacquadio-774909.jpg";
import cody from "././../assets/images/staff/pexels-monstera-5384445.jpg";
import wilson from "././../assets/images/staff/wilson.jpg";
import nat from "././../assets/images/staff/cody.jpg";
import robert from "././../assets/images/staff/pexels-pixabay-220453.jpg";


import gold1 from "././../assets/images/banner/gold-w1_thumb.jpg";
import gold2 from "././../assets/images/banner/gold-w2_thumb.jpg";
import gold3 from "././../assets/images/banner/gold2_thumb.jpg";
import gold4 from "././../assets/images/banner/gold-w_thumb.jpg";
import gold5 from "././../assets/images/banner/gold-bullion1_thumb.jpg";

export const MJ_SECURITY_VAULT_DATA = {
    STAFF: [
        {
            image: jane,
            name: "Jane Cooper",
            role: "Chief Executive Officer"
        },
        {
            image: wilson,
            name: "Joseph Wilson",
            role: "Head of Security Operations"
        },
        {
            image: robert,
            name: "Robert Fox",
            role: "Lead Systems Engineer"
        },
        {
            image: cody,
            name: "Cody Fisher",
            role: "Vault Technology Architect"
        },
        {
            image: nat,
            name: "Nathaniel Robertson",
            role: "Client Relations Manager"
        }

    ],
    SERVICES: [
        {
            title: 'Private Vault Storage',
            description: "Ideal for individuals looking to store jewelry, cash, legal documents, data drives, or other valuables in personal vaults of varying sizes.",
            icon: ''
        },
        {
            title: 'Corporate Storage Solutions',
            description: "Secure and scalable vaulting services tailored for law firms, financial institutions, and other high-profile clients.",
            icon: ''
        },
        {
            title: 'Custom Security Solutions',
            description: "Need something unique? Our experts can help you create customized vault storage and security setups.",
            icon: ''
        },
        {
            title: "Secure Item Transport,",
            description: "From your doorstep to the vault — we provide armored and insured transport for items you wish to store.",
            icon: ''
        },
    ],
    KEY_FEATURES: [
        '24/7 Armed Surveillance',
        'Biometric & Facial Recognition Access',
        'Fireproof and Floodproof Vaults',
        'Private Viewing Rooms',
        'Insurance Options Available',
        'Emergency Access Services'
    ],
    REASONS_TO_CHOOSE: [
        {
            image: gold1,
            title: 'Multi-Layered Security',
            description: 'Access starts at the front gate, then into the building, then biometric systems per vault section. All access is logged and monitored live.',
        },
        {
            image: gold2,
            title: 'Advanced Monitoring',
            description: 'AI-powered CCTV with motion detection and facial recognition alerts our team of trained guards immediately.',
        },
        {
            image: gold3,
            title: 'Biometric Vault Entry',
            description: 'Facial recognition, iris scanning, and fingerprint match — all must align before a vault opens.',
        },
        {
            image: gold4,
            title: 'Fireproof, Floodproof & EMP-Protected',
            description: 'Our vaults withstand natural and man-made disasters. You can rest easy knowing your valuables are safe even during emergencies.',
        },
        {
            image: gold5,
            title: 'Backup Systems',
            description: 'Redundant power generators and internet connections ensure zero downtime.',
        },
    ],
    CORE_VALUES: [
        {

            title: 'Confidentiality',
            description: 'We never ask what\'s in your vault.'
        },
        {
            title: 'Integrity',
            description: 'We do what we promise, 24/7.'
        },
        {
            title: 'Innovation',
            description: 'From AI surveillance to EMP-proof vaults.'
        },
        {
            title: 'Client-First',
            description: 'We design for your security and comfort.'
        }
    ],
    PLANS: [
        {
            title: 'Mini Plan',
            size: 'Small',
            insurance: 'Optional',
            access: '24/7 Biometric',
            useCase: 'Jewelry, USBs, Cash',
            price: '$20/month'
        },
        {
            title: 'Standard Plan',
            size: 'Medium',
            insurance: 'Optional',
            access: '24/7 Biometric',
            useCase: 'Documents, Laptops',
            price: '$40/month'
        },
        {
            title: 'Premium Plan',
            size: 'Large',
            insurance: 'Optional',
            access: '24/7 Biometric + Dual Key',
            useCase: 'Gold, Art, Collectibles',
            price: '$80/month'
        },
        {
            title: 'Corporate Plan',
            size: 'X-Large',
            insurance: 'Customizable',
            access: '24/7 with Team Access',
            useCase: 'Contracts, Archives, Servers',
            price: 'Contact Us'
        }
    ]
};

