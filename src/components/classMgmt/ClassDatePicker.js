import { ko } from "date-fns/locale";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ClassDatePicker = () => {
  return (
    <ul>
      <li>
        <DatePicker
          className="datepicker"
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </li>
      <li>
        <DatePicker
          className="datepicker"
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </li>
    </ul>
  );
};

export default ClassDatePicker;
