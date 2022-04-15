import React, { useState } from "react";
import "./style.css";
/* eslint-disable */

const Card = () => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [data, setData] = useState([]);

  const changeData1 = (event) => {
    const chr = /^[0-9\b]+$/;
    if (event.target.value === "" || chr.test(event.target.value)) {
      setField1(event.target.value);
    }
  };

  const changeData2 = (event) => {
    const chr = /^[0-9\b]+$/;
    if (event.target.value === "" || chr.test(event.target.value)) {
      setField2(event.target.value);
    }
  };

  const changeData3 = (event) => {
    const chr = /^[0-9\b]+$/;
    if (event.target.value === "" || chr.test(event.target.value)) {
      setField3(event.target.value);
    }
  };

  const changeData4 = (event) => {
    const chr = /^[0-9\b]+$/;
    if (event.target.value === "" || chr.test(event.target.value)) {
      setField4(event.target.value);
    }
  };

  var clr = document.getElementsByClassName("test");

  Array.from(clr).forEach(function (val) {
    val.addEventListener("keyup", function (event) {
      if (val.value.length == 4) {
        val.nextElementSibling.focus();
      }
      if (val.value.length == 0) {
        val.previousElementSibling.focus();
      }
    });
  });

  const Show = (event) => {
    console.log(event.clipboardData.getData("Text"));
    let displayInput = event.clipboardData.getData("Text");
    if (displayInput.length > 4 && displayInput.length <= 16) {
      let intAs1 = displayInput.slice(0, 4);
      console.log(intAs1);
      setField1(intAs1);
      let intAs2 = displayInput.slice(4, 8);
      setField2(intAs2);
      let intAs3 = displayInput.slice(8, 12);
      setField3(intAs3);
      let intAs4 = displayInput.slice(12);
      setField4(intAs4);
    } else {
      alert("Card Number Should Be 16 Digit!");
    }
  };

  const Submit = () => {
    if (field1.length + field2.length + field3.length + field4.length != 16) {
      alert("Card Number Should Be 16 Digit!");
    } else {
      const tempObject = {
        field1: field1,
        field2: field2,
        field3: field3,
        field4: field4,
        id: Date.now(),
      };
      setData([...data, tempObject]);

      setField1("");
      setField2("");
      setField3("");
      setField4("");
    }
  };

  const Delete = (event) => {
    let id = event;
    let a = data.filter((obj) => obj.id != id);
    setData(a);
  };

  return (
    <div>
      <div className="shape text-center">
        <h3 style={{ marginTop: "50px" }}>
          Card Number<span style={{ color: "red" }}>*</span>
        </h3>
        <br />
        <input
          type="text"
          maxLength="4"
          value={field1}
          className="test"
          onShow={Show}
          onChange={changeData1}
          required
        />
        <input
          type="text"
          maxLength="4"
          value={field2}
          className="test"
          onChange={changeData2}
          required
        />
        <input
          type="text"
          maxLength="4"
          value={field3}
          className="test"
          onChange={changeData3}
          required
        />
        <input
          type="text"
          maxLength="4"
          value={field4}
          className="test"
          onChange={changeData4}
          required
        />
      </div>
      <br />
      <button onClick={Submit} className="btn">
        Submit
      </button>
      <br />
      <br />
      <br />

      <table className="table text-center">
        <tr>
          <th>
            <h4>Card Number Details</h4>
          </th>
          <th>
            {" "}
            <h4>Action</h4>
          </th>
        </tr>

        {data.length > 0 &&
          data.map((event) => {
            return (
              <tr>
                <td>
                  {event.field1} {event.field2} {event.field3} {event.field4}{" "}
                </td>
                <td key={event.id} onClick={() => Delete(event.id)}>
                  {" "}
                  <i className="fa-solid fa-trash-can delete"></i>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Card;