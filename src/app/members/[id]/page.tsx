'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { members } from '@/data/members';
import { Member } from '@/types/member';

export default function MemberPortfolioPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const memberId = params?.id as string;
  const member = members.find(m => m.id === memberId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Member Not Found</h1>
          <p className="text-gray-600 mb-6">The member you're looking for doesn't exist.</p>
          <Link
            href="/members"
            className="inline-block px-6 py-3 bg-blue-primary text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Back to Members
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        {/* Back Button */}
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            href="/members"
            className="inline-flex items-center text-blue-primary hover:text-blue-800 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Members
          </Link>
        </div>

        {/* Header Section */}
        <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Profile Picture/Initials */}
            {member.image ? (
              <img
                src={member.image}
                alt={member.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-primary"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-blue-primary flex items-center justify-center text-white text-4xl font-bold">
                {member.fullName
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
            )}

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold text-blue-primary mb-2">
                    {member.fullName}
                  </h1>
                  <p className="text-xl text-gray-700 mb-2">{member.major}</p>
                  {member.graduationMonth && member.graduationYear && (
                    <p className="text-gray-600">
                      Graduating {member.graduationMonth} {member.graduationYear}
                    </p>
                  )}
                </div>
                
                {/* Role Badge */}
                <div className="mt-2 md:mt-0">
                  {member.role === 'officer' && (
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gold rounded-full">
                      Officer
                    </span>
                  )}
                  {member.role === 'alumni' && (
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">
                      Alumni
                    </span>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`${member.fullName}'s LinkedIn`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label={`${member.fullName}'s GitHub`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-primary hover:text-blue-800 transition-colors"
                    aria-label={`${member.fullName}'s Website`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-primary hover:text-blue-800 transition-colors"
                    aria-label={`Email ${member.fullName}`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        {member.bio && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{member.bio}</p>
          </div>
        )}

        {/* Experience Section */}
        {member.experience && member.experience.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Experience</h2>
            <div className="space-y-6">
              {member.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-primary pl-6 pb-6 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-primary font-medium">{exp.company}</p>
                      {exp.location && (
                        <p className="text-sm text-gray-600">{exp.location}</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mt-2 md:mt-0">
                      <p>
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : '- Present'}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 mt-2 mb-3">{exp.description}</p>
                  )}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((ach, achIndex) => (
                          <li key={achIndex}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {member.education && member.education.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Education</h2>
            <div className="space-y-6">
              {member.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-blue-primary font-medium">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-sm text-gray-600">{edu.location}</p>
                  )}
                  {edu.startDate && (
                    <p className="text-sm text-gray-600 mt-2">
                      {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : '- Present'}
                    </p>
                  )}
                  {edu.fieldOfStudy && (
                    <p className="text-gray-700 mt-2">Field of Study: {edu.fieldOfStudy}</p>
                  )}
                  {edu.gpa && (
                    <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>
                  )}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mt-2">
                      <p className="font-semibold text-gray-900">Honors:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        {edu.honors.map((honor, honorIndex) => (
                          <li key={honorIndex}>{honor}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                    <div className="mt-2">
                      <p className="font-semibold text-gray-900">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.relevantCoursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {member.projects && member.projects.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {member.skills && member.skills.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {member.achievements && member.achievements.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Achievements</h2>
            <div className="space-y-4">
              {member.achievements.map((achievement, index) => (
                <div key={index} className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  {achievement.organization && (
                    <p className="text-blue-primary font-medium">{achievement.organization}</p>
                  )}
                  {achievement.date && (
                    <p className="text-sm text-gray-600">{achievement.date}</p>
                  )}
                  {achievement.description && (
                    <p className="text-gray-700 mt-2">{achievement.description}</p>
                  )}
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests Section */}
        {member.interests && member.interests.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-6">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {member.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

