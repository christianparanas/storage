import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Logo = (props) => (
  <Link to="/">
  <motion.svg whileHover={{ scale: 1.1 }} initial={{ y: -200 }}  animate={{ y: 10 }} transition={{ type: "spring", stiffness: 120}} className="logo" height={150} {...props}>
    <g>
      <title>{"Layer 1"}</title>
      <ellipse
        fill="none"
        strokeWidth={5}
        cx={110}
        cy={110}
        id="svg_2"
        rx={22}
        ry={22}
        stroke="#5D3AC5"
      />
      <rect
        fill="#5D3AC5"
        stroke="#5D3AC5"
        x={118}
        y={100}
        width={7}
        height={30}
        id="svg_5"
        rx={3}
      />
      <rect
        fill="#5D3AC5"
        stroke="#5D3AC5"
        x={95}
        y={100}
        width={7}
        height={30}
        id="svg_6"
        rx={3}
      />
    </g>
  </motion.svg>
  </Link>
);

export default Logo;
