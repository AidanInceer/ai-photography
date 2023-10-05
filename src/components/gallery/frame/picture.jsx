import React from "react";

class PictureFrame extends React.Component {
  render() {
    const { filePaths } = this.props;
    const imagesPerRow = 3; // Number of images per row

    const rows = [];
    for (let i = 0; i < filePaths.length; i += imagesPerRow) {
      const rowImages = filePaths.slice(i, i + imagesPerRow);

      const row = (
        <div key={i} className="flex wrap">
          {rowImages.map((filePath, index) => (
            <img
              key={index}
              src={filePath}
              alt={`Image ${index}`}
              className="p-1 rounded-lg hover:bg-gray-100 flex"
            />
          ))}
        </div>
      );

      rows.push(row);
    }

    return <div className="image-list">{rows}</div>;
  }
}

export default PictureFrame;
