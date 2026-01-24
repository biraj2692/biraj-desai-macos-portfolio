import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/windows'
import React from 'react'

const TextFile = () => {
    const { windows } = useWindowStore()
    const data = windows.txtfile.data

    if (!data) return null

    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div id='window-header'>
                <WindowControls target='txtfile' />
                <h2 className="text-sm font-medium ml-2">{data.name}</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 font-sans text-gray-800">
                <div className="max-w-2xl mx-auto space-y-6">
                    {data.image && (
                        <div className="w-full mb-6">
                            <img 
                                src={data.image} 
                                alt={data.subtitle || "Header image"} 
                                className="w-full h-auto rounded-lg object-cover max-h-[300px]"
                            />
                        </div>
                    )}
                    
                    <div className="space-y-2 text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
                        {data.subtitle && (
                            <p className="text-gray-500 italic">{data.subtitle}</p>
                        )}
                    </div>

                    <div className="space-y-4 leading-relaxed text-base">
                        {data.description && data.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const TextFileWindow = WindowWrapper(TextFile, 'txtfile')

export default TextFileWindow
