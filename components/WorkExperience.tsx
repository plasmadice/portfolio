import React from 'react';

const experiences = [
  {
    company: 'Glossi',
    location: 'Los Angeles, CA',
    title: 'Full-Stack Developer',
    duration: 'December 2023 - October 2024',
    responsibilities: [
      'Implemented V2 of Glossi’s app, leading to a full-time position.',
      'Boosted daily user sign-ups by over 5x by optimizing the onboarding process.',
      'Reduced page load times by over 50% through code optimization.',
      'Migrated to a custom Stripe payment system with complex webhooks.',
      'Integrated data reporting tools to provide actionable insights.',
    ],
  },
  {
    company: 'Olive AI',
    location: 'Columbus, OH',
    title: 'Software Engineer I',
    duration: 'September 2021 - April 2023',
    responsibilities: [
      'Automated over 20 claim-statusing workflows, saving 100+ hours monthly.',
      'Reduced errors to 0% in automation processes.',
      'Contributed to microservices architecture using Node.js and TypeScript.',
      'Presented actionable insights leading to new data validation protocols.',
      'Developed internal Postman test suites for third-party APIs.',
    ],
  },
  {
    company: 'Carley Corporation',
    location: 'Oviedo, FL',
    title: 'Courseware Programmer I',
    duration: 'July 2019 - September 2021',
    responsibilities: [
      'Led a team to convert 300+ Navy courseware lessons from Flash to HTML.',
      'Reduced conversion time by up to 90% per lesson using Adobe Animate’s API.',
      'Created a library of Easel.js and JavaScript code snippets.',
      'Trained 4 new hires in company-specific tools and workflows.',
      'Ensured 100% compliance with Navy standards.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h2 className="font-bold text-2xl mt-12">Work Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className="mt-6">
          <h3 className="font-semibold text-xl">
            {job.title} at {job.company}
          </h3>
          <p className="text-sm text-gray-600">
            {job.location} | {job.duration}
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            {job.responsibilities.map((item, idx) => (
              <li key={idx} className="mt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
