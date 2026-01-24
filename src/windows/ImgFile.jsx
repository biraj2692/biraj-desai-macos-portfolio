import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/windows'
import React from 'react'

const ImgFile = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile.data

    if (!data) return null

    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div id='window-header'>
                <WindowControls target='imgfile' />
                <h2 className="text-sm font-medium ml-2">{data.name}</h2>
            </div>

            <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-100 p-4">
                {data.imageUrl ? (
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="max-w-full max-h-full object-contain shadow-lg"
                    />
                ) : (
                    <div className="text-gray-400">No image to display</div>
                )}
            </div>
        </div>
    )
}

const ImgFileWindow = WindowWrapper(ImgFile, 'imgfile')

export default ImgFileWindow
