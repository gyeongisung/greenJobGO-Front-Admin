import React, { useCallback, useState } from "react";

const ExcelUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = async event => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // 파일을 서버로 업로드
        await axios.post("/api/upload", formData);

        // 성공 메시지 설정
        setUploadedFile("파일 업로드 성공!");
      } catch (error) {
        console.error("파일 업로드 실패:", error);
        setUploadedFile("파일 업로드 중 오류가 발생했습니다. 다시 시도하세요.");
      }
    }
  };

  return (
    <>
      <h2>Excel 파일 업로드</h2>
      <input
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={e => handleDrop(e.target.files)}
      />
    </>
  );
};

export default ExcelUpload;
