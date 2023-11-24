import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const users = [
    {
      username: 'laura_johnson',
      email: 'laura.johnson@example.com',
      password: 'passwordXYZ',
      participatedHackathons: ['Hackathon A', 'Hackathon D'],
      hostedHackathons: [],
      firstName: 'Laura',
      lastName: 'Johnson',
      profileURL: 'https://example.com/laura_johnson_profile',
      bio: 'Passionate about UX design and creating user-friendly interfaces!',
      socialMedia: {
        twitter: 'lauraj_twitter',
        github: 'lauraj_github',
        linkedin: 'lauraj_linkedin'
      }
    },
    {
      username: 'peter_brown',
      email: 'peter.brown@example.com',
      password: 'password456',
      participatedHackathons: ['Hackathon B'],
      hostedHackathons: ['Hackathon J'],
      firstName: 'Peter',
      lastName: 'Brown',
      profileURL: 'https://example.com/peter_brown_profile',
      bio: 'Full-stack developer and problem-solving enthusiast!',
      socialMedia: {
        twitter: 'peterb_twitter',
        github: 'peterb_github',
        linkedin: 'peterb_linkedin'
      }
    },
    {
      username: 'emma_smith',
      email: 'emma.smith@example.com',
      password: 'password789',
      participatedHackathons: ['Hackathon C', 'Hackathon E'],
      hostedHackathons: [],
      firstName: 'Emma',
      lastName: 'Smith',
      profileURL: 'https://example.com/emma_smith_profile',
      bio: 'Passionate about AI and its applications in everyday life!',
      socialMedia: {
        twitter: 'emmas_twitter',
        github: 'emmas_github',
        linkedin: 'emmas_linkedin'
      }
    },
    {
      username: 'jason_davis',
      email: 'jason.davis@example.com',
      password: 'password123',
      participatedHackathons: ['Hackathon D'],
      hostedHackathons: [],
      firstName: 'Jason',
      lastName: 'Davis',
      profileURL: 'https://example.com/jason_davis_profile',
      bio: 'Front-end developer with a creative flair for design!',
      socialMedia: {
        twitter: 'jasond_twitter',
        github: 'jasond_github',
        linkedin: 'jasond_linkedin'
      }
    },
    {
      username: 'olivia_white',
      email: 'olivia.white@example.com',
      password: 'passwordABC',
      participatedHackathons: ['Hackathon F'],
      hostedHackathons: [],
      firstName: 'Olivia',
      lastName: 'White',
      profileURL: 'https://example.com/olivia_white_profile',
      bio: 'AI enthusiast and machine learning researcher.',
      socialMedia: {
        twitter: 'oliviaw_twitter',
        github: 'oliviaw_github',
        linkedin: 'oliviaw_linkedin'
      }
    },
    {
      username: 'adam_jones',
      email: 'adam.jones@example.com',
      password: 'passwordXYZ',
      participatedHackathons: [],
      hostedHackathons: [],
      firstName: 'Adam',
      lastName: 'Jones',
      profileURL: 'https://example.com/adam_jones_profile',
      bio: 'Passionate about coding and building meaningful applications!',
      socialMedia: {
        twitter: 'adamj_twitter',
        github: 'adamj_github',
        linkedin: 'adamj_linkedin'
      }
    }
  ];
  
  module.exports = users;
      
   

  const mongoose = require('mongoose');

  const hackathons = [
    {
      _id: new mongoose.Types.ObjectId(),
      organizerID: 'organizer123',
      title: 'CodeCrafters Hackathon',
      description: 'A coding competition for developers to showcase their skills and creativity.',
      startDate: new Date('2023-10-15T08:00:00Z'),
      endDate: new Date('2023-10-17T18:00:00Z'),
      location: 'Virtual',
      bannerImage: 'https://example.com/codecrafters_banner.jpg',
      rules: [
        'Participants must submit original code.',
        'Plagiarism is strictly prohibited.'
      ],
      prizes: [
        '1st Place: $1000 cash prize',
        '2nd Place: $500 cash prize',
        '3rd Place: $250 cash prize'
      ],
      sponsors: ['Company A', 'Company B']
    },
    {
      _id: new mongoose.Types.ObjectId(),
      organizerID: 'organizer456',
      title: 'Innovate and Elevate Hackathon',
      description: 'A challenge for innovators to create solutions that elevate the user experience.',
      startDate: new Date('2023-11-05T10:00:00Z'),
      endDate: new Date('2023-11-07T20:00:00Z'),
      location: 'Online',
      bannerImage: 'https://example.com/innovate_elevate_banner.jpg',
      rules: [
        'Teams must consist of at least 2 members.',
        'All code must be submitted on the platform.'
      ],
      prizes: [
        '1st Place: Internship opportunity',
        '2nd Place: $750 cash prize',
        '3rd Place: Tech gadgets package'
      ],
      sponsors: ['Company X', 'Company Y']
    },
    {
      _id: new mongoose.Types.ObjectId(),
      organizerID: 'organizer789',
      title: 'FutureTech Challenge',
      description: 'An exploration of futuristic technologies and their applications in today\'s world.',
      startDate: new Date('2023-12-01T09:00:00Z'),
      endDate: new Date('2023-12-03T18:00:00Z'),
      location: 'City Conference Center',
      bannerImage: 'https://example.com/futuretech_challenge_banner.jpg',
      rules: [
        'Participants must present a demo of their project.',
        'Projects should have a futuristic element.'
      ],
      prizes: [
        '1st Place: High-end VR headset',
        '2nd Place: Drone with camera',
        '3rd Place: Smart home automation kit'
      ],
      sponsors: ['Company C', 'Company D']
    },
    {
        _id: new mongoose.Types.ObjectId(),
        organizerID: 'organizer707',
        title: 'Robotics Innovation Challenge',
        description: 'Push the boundaries of robotics and automation with cutting-edge solutions.',
        startDate: new Date('2024-02-20T09:00:00Z'),
        endDate: new Date('2024-02-22T19:00:00Z'),
        location: 'Tech Hub Center',
        bannerImage: 'https://example.com/robotics_innovation_banner.jpg',
        rules: [
          'Projects should demonstrate innovative uses of robotics.',
          'Focus on automation and human-robot interaction.'
        ],
        prizes: [
          '1st Place: Robotics startup incubation',
          '2nd Place: $2500 cash prize',
          '3rd Place: Advanced robotics kit'
        ],
        sponsors: ['Company AA', 'Company BB']
      },
      {
        _id: new mongoose.Types.ObjectId(),
        organizerID: 'organizer808',
        title: 'AR/VR Experience Challenge',
        description: 'Create immersive augmented and virtual reality experiences that captivate users.',
        startDate: new Date('2024-03-10T10:00:00Z'),
        endDate: new Date('2024-03-12T20:00:00Z'),
        location: 'AR/VR Innovation Lab',
        bannerImage: 'https://example.com/ar_vr_experience_banner.jpg',
        rules: [
          'Projects should utilize AR or VR technologies.',
          'Focus on user engagement and interactivity.'
        ],
        prizes: [
          '1st Place: AR/VR development package',
          '2nd Place: $2000 cash prize',
          '3rd Place: High-end AR headset'
        ],
        sponsors: ['Company CC', 'Company DD']
      },
      {
        _id: new mongoose.Types.ObjectId(),
        organizerID: 'organizer909',
        title: 'EduTech Solutions Hackathon',
        description: 'Revolutionize education with innovative technology solutions for learners and educators.',
        startDate: new Date('2024-04-05T09:00:00Z'),
        endDate: new Date('2024-04-07T18:00:00Z'),
        location: 'Education Innovation Center',
        bannerImage: 'https://example.com/edutech_solutions_banner.jpg',
        rules: [
          'Projects should enhance the learning experience.',
          'Consider accessibility and inclusivity in design.'
        ],
        prizes: [
          '1st Place: EduTech startup incubation',
          '2nd Place: $1500 cash prize',
          '3rd Place: Education technology resources'
        ],
        sponsors: ['Company EE', 'Company FF']
      },
  ];
  
  module.exports = hackathons;
  