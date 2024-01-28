import React from "react";

const HashTag = ({
  hashTag,
  hashSave,
  handleAddHashTag,
  handleRemoveHashTag,
  handleHashChange,
  handleKeyDown,
}) => {
  return (
    <div className="hash-tag-wrap">
      <div className="hash-tag-inner">
        {hashSave.length > 0 &&
          hashSave.map(item => {
            return (
              <div className="tags" key={item.icertificate}>
                <p>{item.certificate}</p>
                <img
                  className="remove"
                  src={`${process.env.PUBLIC_URL}/assets/ph_x-bold.png`}
                  alt="cancel"
                  onClick={() => {
                    handleRemoveHashTag(item.icertificate);
                  }}
                />
              </div>
            );
          })}
        <input
          className="hash-tag-input"
          type="text"
          id="hash-input"
          name="hash-tag"
          value={hashTag}
          onChange={handleHashChange}
          onKeyUp={handleAddHashTag}
          onKeyDown={handleKeyDown}
          placeholder="자격증을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default HashTag;
