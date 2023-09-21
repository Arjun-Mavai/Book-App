import * as React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="link1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://math-assessement-project.vercel.app/"
        >
          Math-assesement
        </a>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="links ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://react-weather-app-blush-six.vercel.app/"
        >
          React Weather App
          {/* (disabled) */}
        </a>
      </div>
    ),
    icon: <SmileOutlined />,
    disabled: false,
  },
  {
    key: "3",
    label: (
      <a
        className=" 
      bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent text-bold text-lg shadow-lg text font-extrabold"
        target="_blank"
        rel="noopener noreferrer"
        href="https://arjun-mavai.github.io/Responsive-Portfolio/"
      >
        My Portfolio
        {/* (disabled) */}
      </a>
    ),
    disabled: false,
  },
  // {
  //   key: "4",
  //   danger: true,
  //   label: "a danger item",
  // },
];

const Drops = () => {
  return (
    <div className="drop">
      <Dropdown menu={{ items }} className="bxDrop font-bold text-lg">
        <a onClick={(e) => e.preventDefault()}>
          <Space
            className=" 
          bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent text-bold text-lg shadow-lg text font-extrabold"
          >
            Check out My Projects
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Drops;

// flex items-center whitespace-nowrap rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] motion-reduce:transition-none
