'use client';

import { useState, useEffect } from 'react';
import { members } from '@/data/members';
import { Member } from '@/types/member';
import MemberCard from '@/components/MemberCard';

export default function MembersPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterRole, setFilterRole] = useState<'all' | 'officer' | 'member' | 'alumni'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort members
  const filteredMembers = members
    .filter((member) => {
      // Role filter
      if (filterRole !== 'all' && member.role !== filterRole) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          member.fullName.toLowerCase().includes(query) ||
          member.major.toLowerCase().includes(query) ||
          member.skills?.some(skill => skill.toLowerCase().includes(query)) ||
          member.bio?.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => {
      // Featured members first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then by name
      return a.fullName.localeCompare(b.fullName);
    });

  // Separate featured and regular members
  const featuredMembers = filteredMembers.filter(m => m.featured);
  const regularMembers = filteredMembers.filter(m => !m.featured);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        {/* Header Section */}
        <div className={`text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl font-bold text-blue-primary sm:text-5xl md:text-6xl mb-4">
            Our Members
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the talented graduate students, officers, and alumni building the future of data science at UD
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={`transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                placeholder="Search by name, major, skills, or bio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterRole('all')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filterRole === 'all'
                    ? 'bg-blue-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Members
              </button>
              <button
                onClick={() => setFilterRole('officer')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filterRole === 'officer'
                    ? 'bg-blue-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Officers
              </button>
              <button
                onClick={() => setFilterRole('member')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filterRole === 'member'
                    ? 'bg-blue-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Members
              </button>
              <button
                onClick={() => setFilterRole('alumni')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filterRole === 'alumni'
                    ? 'bg-blue-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Alumni
              </button>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredMembers.length} of {members.length} members
            </div>
          </div>
        </div>

        {/* Featured Members Section */}
        {featuredMembers.length > 0 && (
          <div className={`transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-blue-primary mb-4">Featured Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* All Members Section */}
        {regularMembers.length > 0 && (
          <div className={`transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {featuredMembers.length > 0 && (
              <h2 className="text-2xl font-bold text-blue-primary mb-4">All Members</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No members found matching your criteria.</p>
            <button
              onClick={() => {
                setFilterRole('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-blue-primary text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center bg-gray-50 p-8 rounded-lg transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl font-bold text-blue-primary mb-4">
            Want to Join Us?
          </h2>
          <p className="text-gray-700 mb-6">
            Showcase your projects, connect with peers, and build the data science community at UD.
          </p>
          <a
            href="/#contact-form"
            className="inline-block px-6 py-3 bg-blue-primary text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Get Connected
          </a>
        </div>
      </div>
    </div>
  );
}

