import React from "react";
import { CSVReader } from "react-papaparse";

interface FileReaderProps {
  onFileRead: (numbers: number[]) => void;
}

export const FileReader: React.FC<FileReaderProps> = ({
  onFileRead,
}): JSX.Element => {
  const handleOnDrop = (csv: any): void => {
    const csvData = csv?.[0]?.data;
    const numbers: number[] = csvData.map(Number);
    onFileRead(numbers);
  };

  const handleOnError = (
    err: any,
    _file: any,
    _inputElem: any,
    _reason: any
  ): void => {
    console.log(err);
  };

  return (
    <>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton={true}
        noProgressBar={true}
      >
        <span>Drop CSV file here</span>
      </CSVReader>
    </>
  );
};
