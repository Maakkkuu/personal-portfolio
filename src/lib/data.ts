import profilePic from '$lib/assets/profile_picture.jpg';
import awscc1 from '$lib/assets/awsccupmindanao_website_1.png';
import awscc2 from '$lib/assets/awsccupmindanao_website_2.png';
import crams1 from '$lib/assets/crams_1.png';
import crams2 from '$lib/assets/crams_2.png';
import dorm1 from '$lib/assets/upmin_dormitory_system_1.png';
import dorm2 from '$lib/assets/upmin_dormitory_system_2.png';
import durian1 from '$lib/assets/durianpy_website_1.png';
import durian2 from '$lib/assets/durianpy_website_2.png';
import cafe1 from '$lib/assets/cafecraze_1.png';
import cafe2 from '$lib/assets/cafecraze_2.png';

import awsCcp from '$lib/assets/aws_ccp.png';
import thm from '$lib/assets/advent_of_cyber.svg';
import awsMl from '$lib/assets/aws_educate_machine_learning_foundations.png';
import awsEss from '$lib/assets/aws_knowledge_cloud_essentials.png';

import sparcsLogo from '$lib/assets/sparcs_logo.jpg';
import awsccLogo from '$lib/assets/awscc-upmin-logo.png';
import awsugLogo from '$lib/assets/awsug_logo.jpg';

export const personalInfo = {
    name: "Mark Jaily Peña",
    role: "Developer | Cloud | Cybersecurity",
    description: "A passionate developer with a curious mind and a love for learning new technologies. I am driven to create business-centric solutions and innovations, constantly seeking to enhance my skills and contribute to impactful projects.",
    email: "markjaily09@gmail.com",
    location: "Davao City",
    github: "https://github.com/Maakkkuu",
    linkedin: "https://www.linkedin.com/in/makkukuma/",
    profilePic: profilePic
};

export const projects = [
    {
        title: "AWS Cloud Clubs - UP Mindanao Website",
        role: "Project Lead",
        description: "The official website of AWS Cloud Clubs - UP Mindanao. Built with vanilla HTML, CSS, and JavaScript, it serves as the central hub for the organization, featuring workshops and blogs hosted on a separate subdomain.",
        link: "https://www.awsccupmindanao.org/",
        images: [awscc1, awscc2],
        tech: ["HTML", "CSS", "JavaScript", "Jekyll"]
    },
    {
        title: "CRAMS (Classroom Reservation and Management System)",
        role: "Backend Developer & DevOps",
        description: "A web app streamlining classroom reservations with real-time tracking, forms, and admin controls.",
        link: null,
        images: [crams1, crams2],
        tech: ["Next.js", "Tailwind CSS", "Supabase", "AWS Amplify"]
    },
    {
        title: "UPMin Dormitory Management System",
        role: "Project Lead and Backend Developer",
        description: "Streamlines management processes for UP Mindanao's dormitories.",
        link: null,
        images: [dorm1, dorm2],
        tech: ["PHP", "MySQL"]
    },
    {
        title: "DurianPy Website",
        role: "Front Developer",
        description: "DurianPy is a volunteer-driven Python community in Davao City promoting Python growth through meetups, workshops, and events.",
        link: "https://www.durianpy.org/",
        images: [durian1, durian2],
        tech: ["Next.js", "Tailwind CSS"]
    },
    {
        title: "CafeCraze",
        role: "Project Lead and Developer",
        description: "A static website showcasing Mintal, Davao City’s café scene, with integrated social media links for easy exploration.",
        link: null,
        images: [cafe1, cafe2],
        tech: ["HTML", "CSS", "JavaScript"]
    }
];

export const skills = [
    "Javascript/Typescript",
    "Python",
    "React JS",
    "Tailwind CSS",
    "Supabase",
    "C/C++",
    "AWS",
    "Next JS",
    "Svelte",
    "Github"
];

export const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "May 21, 2025",
        link: "https://www.credly.com/badges/30d09f54-2cd4-46e7-a913-6c304fd75fa9",
        image: awsCcp
    },
    {
        title: "Advent of Cyber 2024",
        issuer: "TryHackMe",
        date: "December 27, 2024",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZQDMJAKRWI.pdf",
        image: thm
    },
    {
        title: "AWS Educate Machine Learning Foundations",
        issuer: "AWS Skill Builder",
        date: "August 08, 2024",
        link: "https://www.credly.com/badges/29d17ec6-a5fa-432d-b960-115eee706fe8",
        image: awsMl
    },
    {
        title: "AWS Knowledge: Cloud Essentials",
        issuer: "AWS Skill Builder",
        date: "August 03, 2024",
        link: "https://www.credly.com/badges/6ec85ce3-4599-471c-a4e9-0d2fffad28b8",
        image: awsEss
    }
];

export const organizations = [
    {
        name: "UP Mindanao Society of Programmers and Refined Computer Scientists",
        roles: [
            { title: "President", date: "July 2025 - Present" },
            { title: "Director of External Affairs", date: "August 2024 - July 2025" }
        ],
        logo: sparcsLogo
    },
    {
        name: "AWS Cloud Club - UP Mindanao",
        roles: [
            { title: "Head of Machine Learning", date: "January 2025 - Present" }
        ],
        logo: awsccLogo
    },
    {
        name: "AWS User Group Davao",
        roles: [
            { title: "Co-Operations Volunteer", date: "December 2024 - October 2025" }
        ],
        logo: awsugLogo
    }
];
