import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
  const editorRef = useRef<Editor>(null); 

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const markdown = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdown);
    }
  };

  const handleChange = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      console.log(editorInstance.getMarkdown());
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={handleCopy}><Copy className="w-4 h-4 mr-2" />Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will be displayed here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={handleChange}
      />
    </div>
  );
}

export default OutputSection;
