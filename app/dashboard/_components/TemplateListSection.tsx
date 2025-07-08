import React from 'react'
import TemplateCard from './TemplateCard'
import templates from '@/app/(data)/templates'


export interface TEMPLATE {
    name: string,
    desc: string,
    icon?: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}
export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplateListSection() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {templates.map((item: TEMPLATE, index: number) => (
            <TemplateCard {...item}/>
        ))}
    </div>
  )
}
export default TemplateListSection