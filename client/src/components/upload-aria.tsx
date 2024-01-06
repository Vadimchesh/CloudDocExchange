import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, SVGProps, useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function UploadAria() {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      console.log(files);
      setSelectedFiles(files);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      if (prevFiles === null) {
        return [];
      }
      return Array.from(prevFiles).filter((_, i) => i !== index);
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
        <Input
          className="sr-only"
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
        />
        <label
          className="flex flex-col items-center justify-center space-y-4"
          htmlFor="file-upload"
        >
          <UploadIcon className="h-8 w-8 text-gray-400" />
          <span className="text-base text-gray-500 dark:text-gray-400">
            Drag and drop files here or click to browse
          </span>
        </label>
      </div>
      {selectedFiles &&
        selectedFiles.map((file, index) => (
          <div className="mt-6" key={index}>
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-base text-gray-500 dark:text-gray-400">
                {file.name}
              </span>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleRemoveFile(index)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      <div className="mt-8">
        <Button>Upload</Button>
      </div>
    </div>
  );
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
