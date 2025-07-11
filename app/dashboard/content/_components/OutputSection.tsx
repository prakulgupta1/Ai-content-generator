"use client";
import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Editor as EditorType } from '@toast-ui/react-editor';

const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
  ssr: false,
});

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<EditorType>(null);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const markdown = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdown);
    }
  };

  // 👇 Update editor content when aiOutput changes
  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance && aiOutput) {
      editorInstance.setMarkdown(aiOutput); // or .setHTML() if you're using HTML
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={handleCopy}>
          <Copy className="w-4 h-4 mr-2" />Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
