import { faCrown, faFilePdf, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { v4 } from "uuid";
import { InfoPofolWrap } from "../../../styles/StudentInfoStyle";
import { useParams } from "react-router";

const StudentPofol = ({ userFile }) => {
  const { istudent } = useParams();

  return (
    <InfoPofolWrap>
      <li>
        <h2>포트폴리오</h2>
      </li>
      <li>
        <div>
          {userFile && userFile.portFolio && userFile.portFolio.length > 0 ? (
            userFile.portFolio.map(item => (
              <div className="portfolio-box" key={v4()}>
                <div>
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faFilePdf} />
                    </p>
                    <a
                      href={`https://greenjobgo.kr/img/student/${istudent}/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp;
                      {item.file}
                    </a>
                  </div>
                  <div className="portfolio-icons">
                    {item.mainYn === 1 ? (
                      <div className="main-pofol">
                        <span>
                          <FontAwesomeIcon
                            icon={faCrown}
                            style={{ color: "#fff" }}
                          />
                          대표
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <span>{item.oneWord}</span>
              </div>
            ))
          ) : (
            <div>
              <div className="portfolio-zero">
                <span>등록된 포트폴리오 PDF 파일이 없습니다.</span>
              </div>
            </div>
          )}
        </div>
        <div>
          {userFile && userFile.fileLinks && userFile.fileLinks.length > 0 ? (
            userFile.fileLinks.map(item => (
              <div className="portfolio-box" key={v4()}>
                <div>
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faLink} />
                    </p>
                    <a
                      href={`http://${item.fileLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp;{item.fileLink}
                    </a>
                  </div>
                </div>
                <span>{item.oneWord}</span>
              </div>
            ))
          ) : (
            <div>
              <div className="portfolio-zero">
                <span>등록된 포트폴리오 링크가 없습니다.</span>
              </div>
            </div>
          )}
        </div>
      </li>
    </InfoPofolWrap>
  );
};

export default StudentPofol;
