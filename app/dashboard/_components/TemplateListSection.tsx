"use client";
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import templates from '../../(data)/templates';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon?: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: { userSearchInput: string }) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(templates);

  useEffect(() => {
    if (userSearchInput.trim()) {
      const filterData = templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.length > 0 ? (
        templateList.map((item: TEMPLATE, index: number) => (
          <TemplateCard key={item.slug || index} {...item} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No templates found.</p>
      )}
    </div>
  );
}

export default TemplateListSection;
