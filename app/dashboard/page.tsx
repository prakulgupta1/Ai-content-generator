"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>(''); 

  return (
    <div>
      <SearchSection
        onSearchInput={setUserSearchInput}
        searchValue={userSearchInput} 
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}
export default Dashboard;
