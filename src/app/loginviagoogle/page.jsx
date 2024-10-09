// page.js (assuming this is in the pages directory)
import React from 'react';
import { SignIn } from '@/components/signin/signin';
import UserAvatar from '@/components/sessiontesting/User';
import { auth } from '@/auth';
import { SignOut } from '@/components/signout/signoutbutton';

const Page = async () => {
  const session = await auth();

  // Ensure session is a plain object
  const user = session?.user ? {
   theuser: session.user
    
    // include other necessary fields
  } : null;

  return (
    <div>
      <SignIn/>
      <SignOut/>
      <UserAvatar user={user}/>
    </div>
  );
};

export default Page;
