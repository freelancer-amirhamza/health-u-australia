import { aryan, brain, capacity1, capacity2, capacity3, community_participation1, community_participation2, community_participation3, community_participation4, evelyn, jose, service1, service2, service3, service4, service5, service6, service7, service8, sil_image1, sil_image2, sil_image3, sil_image4 } from "assets"


export const nav_items = [
    {
        label:"Home",
        options:[{label:"About Health U", path:"/about"}]
    },
    {label:"NDIS", path:"/ndis"},
    {
        label:"Services",
        options:[
            {label:"Community Participation", path:"/community-participation"},
            {label:"Capacity Building", path:"/capacity-building"},
            {label:"Support Coordination", path:"/support-coordination"},
            {label:"Assist In Self-care", path:"/assist-in-self-care"},
            {label:"Assist In Transport", path:"/assist-in-transport"},
            {label:"Home Modification", path:"/home-modification"},
            {label:"Non NDIS Free Service", path:"/non-ndis"},
            {label:"Gardening/House And Yard", path:"/gardening-house-yard"},
        ]
    },
    {label:"Sil house", path:"/sil-house"},
    {label:"Compassion in Action", path:"/compassion-in-action"},
    {
        label:"Events And News",
        options:[
            {label:"Current Events",path:"current-events"},
            {label:"Past Events",path:"past-events"},
        ]
    },
    {label:"Gallery", path:"/gallery"},
    {label:"Contact Us", path:"/contact"},
    {label:"Referral", path:"/referral"},
]

export const service_items = [
    {
        title:"Community Participation",
        image:service1,
        path:"/community-participation"
    },
    {
        title:"Assist In Self-Care",
        image:service2,
        path:"/assist-in-self-care"
    },
    {
        title:"Assist In Transport",
        image:service3,
        path:"/assist-in-transport"
    },
    {
        title:"Support Coordination",
        image:service4,
        path:"/support-coordination"
    },
    {
        title:"Gardening / House And Yard Maintenance",
        image:service5,
        path:"/gardening-yard-maintenance"
    },
    {
        title:"Capacity Building",
        image:service6,
        path:"/capacity-building"
    },
    {
        title:"Home Modification",
        image:service7,
        path:"/home-modification"
    },
    {
        title:"Non NIDS Free Services",
        image:service8,
        path:"/non-ndis"
    },

]


export const google_reviews = [
    {
        image:aryan,
        name:"Aryan Arya",
        date:"1 years",
        rates:5,
        paragraph:"Really nice environment. Everyone was so helpful and friendly, also the whole process for the interview was really comfortable. Had a really great experience with them.",
    },
    {
        image:jose,
        name:"Jose Elias",
        date:"1 years",
        rates:5,
        paragraph:"The team at Health U has been incredible. The administrative staff, in particular, have been so helpful, always quick to respond to my calls, texts, and emails whenever I’ve reached out. They’ve made the whole process easy and stress-free. I’m really impressed with their support and would highly recommend them to anyone in need. ",
    },
    {
        image:brain,
        name:"Brian Lopez-Luna",
        date:"1 years",
        rates:5,
        paragraph:"I met one of the team members at Health U Australia, and she was fantastic—really friendly and helpful. She answered all my questions and made sure I got the assistance I needed. I’m really happy with the service and would definitely recommend Health U Australia to others."
    },
    {
        image:evelyn,
        name:"Evelyn Kate",
        date:"1 years",
        rates:5,
        paragraph:"My experience with Health U Australia, a company that provides NDIS disability support services, has been truly impressive. The staff are knowledgeable and genuinely caring, ensuring that all services are tailored to meet individual needs effectively. They offer a broad range of support, from daily living assistance to more specialized care, all handled with great competence and compassion. It’s clear that they prioritize the well-being and empowerment of their clients, making them a reliable choice for anyone looking for quality disability support services."
    },
];


export const sil_house = [
    {
        image:sil_image1,
        title1:"Live an Independent & Fulfilling Life with Our",
        title2:"Supported Independent Living Program",
        paragraph1:"We at Health U Support Services are on a mission to empower participants with our exceptional care and support. Whether you want support to live comfortably in your own home or want to move to another place for a change in scenario, our specialised supported independent living program will foster an environment where you can thrive.",
        paragraph2:"From supporting you with your everyday activities to building your skills, our service will cover everything to help you live an independent and fulfilling life. Whether you want our support staff to attend to you 24/7 or just a few hours in a day, we will plan our assistance depending on your needs and circumstances.",
    },
    {
        image:sil_image2,
        title1:"What is",
        title2:"SIL?",
        paragraph1:"SIL, or supported independent living, is a support program designed by the NDIS and is referred to as a core component of the scheme tailored to meet the unique needs of participants and enable their futures. It ensures that you live life independently, develop social skills, and actively participate in your community. It also provides assistance with daily tasks in your own home or in a shared living space.",
        paragraph2:"If you want more detailed knowledge about SIL, feel free to reach out to our team at any time.",
    },
    {
        image:sil_image3,
        title1:"Live an Independent & Fulfilling Life with Our",
        title2:"Supported Independent Living Program",
        paragraph1:"It should come to your attention that to opt for SIL assistance, you need to be eligible for the program. To confirm your",
        paragraph2:"If you are this type of individual, we are ready to take our professional SIL assistance to your doorstep and arrange a shared living facility for you to provide you with the support you need to ensure a future of continued independence.",
        bullet_title:"eligibility, you must meet the following criteria:",
        bullet_points:[
            "The individual should have a significant or permanent disability that impacts their ability to live independently without professional support.",
            "The individual needs ongoing support with daily living activities, personal care, or social tasks",
            "The individual should have goals related to achieving greater independence, improving community participation, or enhancing quality of life."
        ]
    },
    {
        image:sil_image4,
        title1:"Why Choose Health U Support",
        title2:"Services for SIL Assistance?",
        paragraph1:"We at Health U Support Services support you the way you are and in the way you want. Here are a few reasons why we are an",
        bullet_title:"excellent choice for your SIL assistance requirements:",
        bullet_points:[
            "We are a trusted and reliable provider of SIL assistance.",
            "We take a person-centred approach to NDIS supported independent living.",
            "We have experienced support workers on our team to assist you.",
            "We create supportive and comfortable shared spaces for participants.",
            "We prioritise your safety and security and empower your independence.",
            "We respect your choices and decisions about SIL support.",
        ]
    },
]

export const community_participation = [
    {
        image:community_participation1,
        title1:"Live an Independent & Fulfilling Life with Our",
        title2:"Supported Independent Living Program",
        paragraph1:"Various challenges can stop you from actively participating in your community. But we at Health U Support Services are dedicated to not letting this happen. We are here to help you overcome every challenge that comes your way and ensure successful community participation. Our community participation support program is designed to assist you in connecting with others fearlessly",
        paragraph2:"We believe that community participation is not just mingling and socialising; it can also stand for sharing spaces with people, be it in a movie theatre, park, or cafe. So, our expert support team will keep this at the forefront, work closely with you to understand your specific needs and preferences for community engagement, and craft a comprehensive and personalised plan to support your goals.",
        paragraph3:"Our service is more like a commitment to keeping you on top of socialisation and community participation.",
    },
    {
        image:community_participation2,
        title1:"How an Our Community Participation",
        title2:"Service Support You?",
        paragraph1:"We promise an exceptional transformation of your life with our community participation service. It is an extensive program that we offer with constant advancements to give you the life you truly deserve. Here is how the service can support you:",
        bullet_points:[
            "Assistance with attending personal development courses.",
            "Assistance with joining a social group or club",
            "Support with going on a camp or taking a holiday",
            "Support for seeing a movie or concert",
            "Assistance with visiting your local library",
            "Assistance with joining a sporting club",
            "Support with everything else that’s related to your community participation",
        ],
    },
    {
        image:community_participation3,
        title1:"Develop Skills That Keep",
        title2:"You Moving Confidently",
        paragraph1:"Your dream of moving confidently in your community and staying prepared for any task can come true with our comprehensive skill development program. Our experienced team of support workers prepares a plan, keeping your goals and aspirations in mind, and implements it with precision and care to help you develop the skills you need to actively engage in your community and show everyone what you are capable of.",
        paragraph2:"We help you find an ideal way out of your suffocating and frustrating life and live the way you have always dreamed of.",
    },
    {
        image:community_participation4,
        title1:"Why Choose Health U Support Services",
        title2:"for Community Participation?",
        paragraph1:"Here is why we at Health U Support Services are an excellent choice for your community participation support requirements:",
        bullet_points:[
            "We offer personalised assistance with community participation to participants.",
            "We are a trusted, reliable, and reputed name in the disability sector.",
            "We ensure 100% quality in our community participation support program.",
            "We have an experienced team of support workers to assist you.",
            "We respect your choices and decisions about living independently in your community.",
        ]
    },
]

export const capacity_building = [
    {
        image:capacity1,
        title1:"Unlocking Independence with Specialized",
        title2:"Capacity Building Support",
        paragraph1:"Being able to live life independently and doing things yourself is a major breakthrough for participants. It not only indicates the enhancement of your quality of life but also unlocks various growth opportunities that can help you ensure a future full of continued freedom. So, join hands with Health U Australia and make this dream come true.",
        paragraph2:"We specialise in offering exceptional capacity-building support to you and assisting you in developing the skills that perfectly accompany you on your journey to achieving all your personal goals. From cooking and cleaning to finding a job, we will help you become skilled and confident in every way possible to enable you to seize the day on your own.",
    },
    {
        image:capacity2,
        title1:"How Can Our Capacity Building",
        title2:"Assistance Assist You?",
        paragraph1:"SIL, or supported independent living, is a support program designed by the NDIS and is referred to as a core component of the scheme tailored to meet the unique needs of participants and enable their futures. It ensures that you live life independently, develop social skills, and actively participate in your community. It also provides assistance with daily tasks in your own home or in a shared living space.",
        paragraph2:"We can assist you with various other things, but the purpose of our service will remain the same: helping you achieve your goal of long-term independence. Our capacity-building support will make you understand the real meaning of life and how you can lead it your own way.",
        bullet_points:[
            "We can help you learn how to cook.",
            "We can help you learn how to dress yourself.",
            "We can assist you in developing a strict daily routine and self-management skills.",
            "We can assist you in building your understanding of personal safety.",
            "We can help you learn how to bathe.",
            "We can help build your social and communication skills.",
            "We can assist you in working towards your employment and help you find a suitable job.",
        ]
    },
    {
        image:capacity3,
        title1:"Why Choose Us for",
        title2:"Capacity Building Support?",
        paragraph1:"We are a leading name in the disability sector for capacity-building support. Here are a few reasons why you should choose us to improve your quality of life:",
        paragraph2:"Let’s get you the opportunity to regain your stability and mobility!",
        bullet_points:[
            "We have experienced support professionals on our team.",
            "We are a trusted and reliable provider of capacity-building support.",
            "We offer personalised support for capacity building.",
            "We support your unique choices and decisions about our service.",
            "We empower your independence in a short period of time.",
        ]
    },
]