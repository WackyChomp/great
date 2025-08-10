import React, { useState, useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import { formatSize } from '~/lib/utils';

interface FileUploaderProps{
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect } : FileUploaderProps) => {
  const uploadIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVwbG9hZC1pY29uIGx1Y2lkZS11cGxvYWQiPjxwYXRoIGQ9Ik0xMiAzdjEyIi8+PHBhdGggZD0ibTE3IDgtNS01LTUgNSIvPjxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00Ii8+PC9zdmc+`
  const xIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=`

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0] || null;
    onFileSelect?.(file);
  }, [onFileSelect])

  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    onDrop,
    multiple: false,
    accept: {'application/pdf': ['.pdf']},
    maxSize: 20 * 1024 * 1024,
  })

  const file = acceptedFiles[0] || null;



  return (
    <div className='w-full gradient_border'>
      <div {...getRootProps()}>
        <input {...getInputProps} />

        <div className="space-y-5 cursor-pointer">

          {file ? (
            <div className="uploader_selected_file" onClick={(e) => e.stopPropagation()}>
              <img src='https://img.icons8.com/ios/200/pdf--v1.png' alt="pdf" className='bg-green-500 size-10 rounded-xl p-1' />
              <div className='flex items-center space-x-4'>
                <div className="">
                  <p className='text-orange-500 text-sm font-medium truncate max-w-xs'>
                    {file.name}
                  </p>
                  <p className='text-red-600 text-sm'>
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>

              <button className='p-2 cursor-pointer' onClick={(e) => {
                onFileSelect?.(null)
              }}>
                <img src={xIcon} alt="remove" className='w-4 h-4' />
              </button>
            </div>
          ): (
            <div>
              <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <img src={uploadIcon} alt="upload" className='size-20 animate-bounce' />
              </div>

              <div className='text-pink-600 text-lg'>
                <span className='font-semibold'>
                  Click to Upload
                </span>
                <p className='text-xs'>
                  or drag and drop
                </p>

                <p className='text-blue-600 text-lg'>
                  PDF (max 20MB)
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default FileUploader