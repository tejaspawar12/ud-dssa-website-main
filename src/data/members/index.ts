// This file automatically imports and exports all member portfolios
// When you add a new member file, you need to:
// 1. Import it at the top (like the examples below)
// 2. Add it to the members array

import { Member } from '@/types/member';
import { tejasPawar } from './tejas-pawar';
import { testUser } from './test-user';
// Add more imports here as members are added:
// import { johnSmith } from './john-smith';
// import { janeDoe } from './jane-doe';

// Export all members in this array
// Add your new member object here after importing it above
export const members: Member[] = [
  tejasPawar,
  testUser,
  // Add more members here:
  // johnSmith,
  // janeDoe,
];

