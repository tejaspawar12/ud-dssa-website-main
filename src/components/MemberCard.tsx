'use client';

import { Member } from '@/types/member';
import Link from 'next/link';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Link 
      href={`/members/${member.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-blue-primary cursor-pointer"
    >
      {/* Header with Image and Name */}
      <div className="flex items-start space-x-4 mb-4">
        {member.image ? (
          <img
            src={member.image}
            alt={member.fullName}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-primary"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-primary flex items-center justify-center text-white text-2xl font-bold">
            {member.fullName
              .split(' ')
              .map(n => n[0])
              .join('')
              .toUpperCase()}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-primary">
                {member.fullName}
              </h3>
              {member.role === 'officer' && (
                <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-white bg-gold rounded-full">
                  Officer
                </span>
              )}
              {member.role === 'alumni' && (
                <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                  Alumni
                </span>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`${member.fullName}'s LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Major and Graduation */}
      <div className="mb-3">
        <p className="text-gray-700 font-medium">{member.major}</p>
        {member.graduationMonth && member.graduationYear && (
          <p className="text-sm text-gray-600">
            Graduating {member.graduationMonth} {member.graduationYear}
          </p>
        )}
      </div>

      {/* Bio */}
      {member.bio && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {member.bio}
        </p>
      )}

      {/* Skills */}
      {member.skills && member.skills.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {member.projects && member.projects.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Projects</h4>
          <div className="space-y-3">
            {member.projects.slice(0, 2).map((project, index) => (
              <div key={index} className="border-l-2 border-blue-primary pl-3">
                <h5 className="font-semibold text-gray-900 text-sm">{project.title}</h5>
                <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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
                      className="text-xs text-blue-600 hover:text-blue-800"
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

      {/* Contact */}
      {member.email && (
        <div className="pt-3 border-t border-gray-200">
          <a
            href={`mailto:${member.email}`}
            className="text-sm text-blue-primary hover:text-blue-800 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {member.email}
          </a>
        </div>
      )}
    </Link>
  );
}

