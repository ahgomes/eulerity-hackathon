import React from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

export default function Download() {
    const selectCount = useSelector((state) => state.select.count);

    const downloadImages = () => {
        let selected = [...document.querySelectorAll('.selected')];
        let downloadInfo = selected.map((box) => {
            let info = {...box.dataset};
            let fileName = info.title.replace(/\s+/g, '_') + '.jpeg';
            return {url: info.url, fileName};
        });
        downloadInfo.forEach((img) => {
            saveAs(img.url, img.fileName);
        });
    };

    return (
        <span>
            <span>({selectCount}) </span>
            <button onClick={downloadImages}>Download Selected</button>
        </span>
    );
}
