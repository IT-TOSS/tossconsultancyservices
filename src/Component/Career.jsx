import React from 'react';

import { useState } from 'react';

// 
// export default function Career() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
//         <p className="text-lg md:text-xl mb-6">We’re building the future — come be a part of it.</p>
//         <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
//           View Open Roles
//         </button>
//       </section>

//       {/* Culture Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Work With Purpose</h2>
//           <p className="text-gray-700 mb-4">
//             We believe in impact, ownership, and collaboration. Whether you're remote or in-office, you’ll be empowered to grow and create meaningful work.
//           </p>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>Flexible schedules</li>
//             <li>Remote-first culture</li>
//             <li>Diverse, inclusive team</li>
//           </ul>
//         </div>
//         <img
//           src="https://source.unsplash.com/800x600/?team,office"
//           alt="Team culture"
//           className="rounded-2xl shadow-xl"
//         />
//       </section>

//       {/* Job Filter + Listings */}
//       <section className="bg-gray-50 py-16 px-6">
//         <div className="max-w-4xl mx-auto mb-8">
//           <h3 className="text-2xl font-semibold mb-4">Open Roles</h3>
//           {/* Fake Filter UI */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             <button className="px-4 py-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">All</button>
//             <button className="px-4 py-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">Engineering</button>
//             <button className="px-4 py-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">Design</button>
//             <button className="px-4 py-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">Marketing</button>
//           </div>

//           {/* Sample Job Cards */}
//           <div className="space-y-6">
//             {[
//               { title: "Senior Frontend Engineer", location: "Remote · Full-time" },
//               { title: "Product Designer", location: "San Francisco · Hybrid" },
//               { title: "Growth Marketing Lead", location: "Remote · Full-time" }
//             ].map((job, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between"
//               >
//                 <div>
//                   <h4 className="text-xl font-semibold">{job.title}</h4>
//                   <p className="text-gray-600">{job.location}</p>
//                 </div>
//                 <button className="mt-4 md:mt-0 bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
//                   Apply
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import { useState } from 'react';

// 

export default function Career () {
  const [activeTab, setActiveTab] = useState('openings');

  const jobOpenings = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[rgba(160,130,180,0.4)] via-[rgba(150,120,190,0.4)] via-[rgba(140,130,200,0.4)] via-[rgba(130,140,210,0.4)] to-[rgba(120,150,220,0.4)] text-black rounded-md shadow-md transition duration-300">
        <div className="container mx-auto px-4 sm:px-8 py-16 lg:py-50 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-base sm:text-xl mb-8 max-w-2xl mx-auto">
            We're looking for passionate individuals to help us build the future. Discover your next career opportunity with us.
          </p>
          <button
            className="bg-white text-black py-4 px-6 sm:py-5 sm:px-10 rounded-md shadow-md transition duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400"
            style={{
              fontSize: '18px',
              fontFamily: 'Archivo, sans-serif',
              borderRadius: '9px',
              borderColor: 'blue'
            }}
            onClick={() => setActiveTab('openings')}
          >
            View Open Positions
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8">
          {['openings', 'benefits', 'process'].map(tab => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'openings' ? 'Open Positions' : tab === 'benefits' ? 'Benefits & Culture' : 'Hiring Process'}
            </button>
          ))}
        </div>

        {/* Openings Tab */}
        {activeTab === 'openings' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map(job => (
                <div key={job.id} className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-700">{job.title}</h3>
                      <p className="text-gray-600">{job.department} • {job.location} • {job.type}</p>
                    </div>
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 px-4 rounded transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">Benefits & Culture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: '👨‍⚕️', title: 'Health & Wellness', desc: 'Comprehensive health insurance, wellness programs, and gym memberships.' },
                { icon: '🖥️', title: 'Flexible Work', desc: 'Remote-friendly environment with flexible hours.' },
                { icon: '📚', title: 'Learning & Development', desc: 'Educational stipends and career growth opportunities.' },
                { icon: '🏖️', title: 'Time Off', desc: 'Generous vacation policy, paid holidays, and parental leave.' }
              ].map((b, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-orange-500 text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hiring Process Tab */}
        {activeTab === 'process' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">Our Hiring Process</h2>
            <div className="space-y-8">
              {[
                { title: "Application Review", desc: "Our team reviews your application to assess your qualifications and experience." },
                { title: "Initial Interview", desc: "A conversation with our recruiting team to learn more about you and your interests." },
                { title: "Technical Assessment", desc: "Depending on the role, you may complete a skills assessment or case study." },
                { title: "Team Interviews", desc: "Meet with potential team members and leadership to ensure mutual fit." },
                { title: "Offer & Onboarding", desc: "We make an offer and help you get set up for success in your new role." }
              ].map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Ready to Take the Next Step?</h2>
          <p className="text-base sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join our talented team and help us build something amazing together.
          </p>
          <button
            className="bg-white text-black py-4 px-6 sm:py-5 sm:px-10 rounded-md shadow-md transition duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400"
            style={{
              fontSize: '18px',
              fontFamily: 'Archivo, sans-serif',
              borderRadius: '9px',
              borderColor: 'blue'
            }}
            onClick={() => setActiveTab('openings')}
          >
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
