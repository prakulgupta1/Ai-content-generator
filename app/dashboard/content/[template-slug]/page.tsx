// app/dashboard/content/[template-slug]/page.tsx (assuming this is the path)
"use client";
import React, { useEffect, useState, useContext } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import templates from '@/app/(data)/templates';
import { TEMPLATE } from '../../_components/TemplateListSection'; // Assuming this path is correct
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from "moment";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useRouter } from 'next/navigation';


interface PROPS {
  params: { 
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {

  const initialTemplateSlug = props.params['template-slug'];

  const [templateSlug, setTemplateSlug] = useState<string | null>(initialTemplateSlug);
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user}=useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router=useRouter();
  const { updateCreditUsage ,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);


  useEffect(() => {

    setTemplateSlug(props.params['template-slug']);
  }, [props.params]); 

  useEffect(() => {
    if (templateSlug) {
      const template = templates?.find((item) => item.slug === templateSlug);
      setSelectedTemplate(template);
    }
  }, [templateSlug]);

  const GenerateAIContent = async (formData: any) => {
    if(totalUsage >= 10000){ 
      console.log("Please Upgrade");
      router.push('/dashboard/billing')
      return ;
    }
    setLoading(true);

    try {
      const selectedPrompt = selectedTemplate?.aiPrompt || '';
      const finalPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;
      const result = await chatSession.sendMessage(finalPrompt);
      const output = await result.response.text();
      setAiOutput(output);
      await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,output)
    } catch (error) {
      console.error('Error generating AI content:', error);
    }
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug ?? "",
      aiResponse:aiResp ?? "",
      createdBy:user?.primaryEmailAddress?.emailAddress ?? "",
      createdAt:moment().format('DD/MM/yyyy') 
    });
    console.log(result);
  }

  if (!selectedTemplate) return <div className="p-10">Loading template...</div>;

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft />Back</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
