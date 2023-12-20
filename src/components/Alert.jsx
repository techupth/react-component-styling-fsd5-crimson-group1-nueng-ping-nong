/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "error-alert") {
    return (
      <div
        css={css`
          background-color: #f9c8c8;
          color: #444444;
          font-size: 5px;
          border-radius: 10px;
          height: 76px;
          width: 650px;
          display: flex;
          flex-direction: row;
          font-family: kanit;
          gap: 10px;
          margin: 10px;
        `}
      >
        <img
          css={css`
            margin-left: 20px;
            margin-top: 25px;
          `}
          src="images\frown.svg"
          height="24px"
          width="24px"
        />
        <h1
          css={css`
            margin-left: 10px;
            margin-top: 30px;
          `}
        >
          This is error alert box
        </h1>
      </div>
    );
  } else if (props.type === "warning-alert") {
    return (
      <div
        css={css`
          background-color: #f9d9c8;
          color: #444444;
          font-weight: bold;
          border-radius: 10px;
          height: 76px;
          width: 650px;
          font-size: 5px;
          text-align: left;
          display: flex;
          flex-direction: row;
          font-family: kanit;
          gap: 10px;
          margin: 10px;
        `}
      >
        <img
          css={css`
            margin-left: 20px;
            margin-top: 25px;
          `}
          src="images\alert-triangle.svg"
          height="24px"
          width="24px"
        />
        <h1
          css={css`
            margin-left: 10px;
            margin-top: 30px;
          `}
        >
          This is warning alert box
        </h1>
      </div>
    );
  } else if (props.type === "info-alert") {
    return (
      <div
        css={css`
          background-color: #f9ebc8;
          color: #444444;
          font-weight: bold;
          border-radius: 10px;
          height: 76px;
          width: 650px;
          font-size: 5px;
          text-align: left;
          display: flex;
          flex-direction: row;
          font-family: kanit;
          gap: 10px;
          margin: 10px;
        `}
      >
        <img
          css={css`
            margin-left: 20px;
            margin-top: 25px;
          `}
          src="images\alert-circle.svg"
          height="24px"
          width="24px"
        />
        <h1
          css={css`
            margin-left: 10px;
            margin-top: 30px;
          `}
        >
          This is info alert box
        </h1>
      </div>
    );
  } else if (props.type === "success-alert") {
    return (
      <div
        css={css`
          background-color: #cef7cd;
          color: #444444;
          font-weight: bold;
          border-radius: 10px;
          height: 76px;
          width: 650px;
          font-size: 5px;
          text-align: left;
          display: flex;
          flex-direction: row;
          font-family: kanit;
          gap: 10px;
          margin: 10px;
        `}
      >
        <img
          css={css`
            margin-left: 20px;
            margin-top: 25px;
          `}
          src="images\check-circle.svg"
          height="24px"
          width="24px"
        />
        <h1
          css={css`
            margin-left: 10px;
            margin-top: 30px;
          `}
        >
          This is success alert box
        </h1>
      </div>
    );
  }
}

export default Alert;
