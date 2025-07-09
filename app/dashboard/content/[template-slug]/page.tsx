"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import templates from '@/app/(data)/templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
  params: {
    'template-slug': string
  }
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = templates?.find(
    (item) => item.slug === props.params['template-slug']
  );

  const GenerateAIContent = (formData: any) => {

  };

  return (
    <div className='p-10'>
        <Link href = {"/dashboard"}>
            <Button><ArrowLeft/>Back</Button>
        </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => console.log(v)}
        />
        {/* Output Section */}
        <div className="col-span-2">
            <OutputSection/>
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent