import React, { FunctionComponent } from 'react';

interface Props {
  noBeams?: boolean;
}

const Logo: FunctionComponent<Props> = ({ noBeams }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox={noBeams ? '34 39 51 51' : '0 0 120.1 130.2'}
    style={{ display: 'block' }}
  >
    <g>
      {!noBeams && (
        <>
          <linearGradient
            id="XMLID_2_"
            gradientUnits="userSpaceOnUse"
            x1="31.8412"
            y1="120.5578"
            x2="110.2402"
            y2="73.24"
          >
            <stop offset="0" style={{ stopColor: '#FCEE39' }} />
            <stop offset="1" style={{ stopColor: '#F37B3D' }} />
          </linearGradient>
          <path
            id="XMLID_3041_"
            style={{ fill: 'url(#XMLID_2_)' }}
            d="M118.6,71.8c0.9-0.8,1.4-1.9,1.5-3.2c0.1-2.6-1.8-4.7-4.4-4.9
		c-1.2-0.1-2.4,0.4-3.3,1.1l0,0l-83.8,45.9c-1.9,0.8-3.6,2.2-4.7,4.1c-2.9,4.8-1.3,11,3.6,13.9c3.4,2,7.5,1.8,10.7-0.2l0,0l0,0
		c0.2-0.2,0.5-0.3,0.7-0.5l78-54.8C117.3,72.9,118.4,72.1,118.6,71.8L118.6,71.8L118.6,71.8z"
          />
          <linearGradient
            id="XMLID_3_"
            gradientUnits="userSpaceOnUse"
            x1="48.3607"
            y1="6.9083"
            x2="119.9179"
            y2="69.5546"
          >
            <stop offset="0" style={{ stopColor: '#EF5A6B' }} />
            <stop offset="0.57" style={{ stopColor: '#F26F4E' }} />
            <stop offset="1" style={{ stopColor: '#F37B3D' }} />
          </linearGradient>
          <path
            id="XMLID_3049_"
            style={{ fill: 'url(#XMLID_3_)' }}
            d="M118.8,65.1L118.8,65.1L55,2.5C53.6,1,51.6,0,49.3,0
		c-4.3,0-7.7,3.5-7.7,7.7v0c0,2.1,0.8,3.9,2.1,5.3l0,0l0,0c0.4,0.4,0.8,0.7,1.2,1l67.4,57.7l0,0c0.8,0.7,1.8,1.2,3,1.3
		c2.6,0.1,4.7-1.8,4.9-4.4C120.2,67.3,119.7,66,118.8,65.1z"
          />
          <linearGradient
            id="XMLID_4_"
            gradientUnits="userSpaceOnUse"
            x1="52.9467"
            y1="63.6407"
            x2="10.5379"
            y2="37.1562"
          >
            <stop offset="0" style={{ stopColor: '#7C59A4' }} />
            <stop offset="0.3852" style={{ stopColor: '#AF4C92' }} />
            <stop offset="0.7654" style={{ stopColor: '#DC4183' }} />
            <stop offset="0.957" style={{ stopColor: '#ED3D7D' }} />
          </linearGradient>
          <path
            id="XMLID_3042_"
            style={{ fill: 'url(#XMLID_4_)' }}
            d="M57.1,59.5C57,59.5,17.7,28.5,16.9,28l0,0l0,0c-0.6-0.3-1.2-0.6-1.8-0.9
		c-5.8-2.2-12.2,0.8-14.4,6.6c-1.9,5.1,0.2,10.7,4.6,13.4l0,0l0,0C6,47.5,6.6,47.8,7.3,48c0.4,0.2,45.4,18.8,45.4,18.8l0,0
		c1.8,0.8,3.9,0.3,5.1-1.2C59.3,63.7,59,61,57.1,59.5z"
          />
          <linearGradient
            id="XMLID_5_"
            gradientUnits="userSpaceOnUse"
            x1="52.1736"
            y1="3.7019"
            x2="10.7706"
            y2="37.8971"
          >
            <stop offset="0" style={{ stopColor: '#EF5A6B' }} />
            <stop offset="0.364" style={{ stopColor: '#EE4E72' }} />
            <stop offset="1" style={{ stopColor: '#ED3D7D' }} />
          </linearGradient>
          <path
            id="XMLID_3057_"
            style={{ fill: 'url(#XMLID_5_)' }}
            d="M49.3,0c-1.7,0-3.3,0.6-4.6,1.5L4.9,28.3c-0.1,0.1-0.2,0.1-0.2,0.2l-0.1,0
		l0,0c-1.7,1.2-3.1,3-3.9,5.1C-1.5,39.4,1.5,45.9,7.3,48c3.6,1.4,7.5,0.7,10.4-1.4l0,0l0,0c0.7-0.5,1.3-1,1.8-1.6l34.6-31.2l0,0
		c1.8-1.4,3-3.6,3-6.1v0C57.1,3.5,53.6,0,49.3,0z"
          />
        </>
      )}
      <g id="XMLID_3008_">
        <rect
          id="XMLID_3033_"
          x="34.6"
          y="37.4"
          style={{ fill: '#000000' }}
          width="51"
          height="51"
        />
        <rect
          id="XMLID_3032_"
          x="39"
          y="78.8"
          style={{ fill: '#FFFFFF' }}
          width="19.1"
          height="3.2"
        />
        <g id="XMLID_3009_">
          <path
            id="XMLID_3030_"
            style={{ fill: '#FFFFFF' }}
            d="M38.8,50.8l1.5-1.4c0.4,0.5,0.8,0.8,1.3,0.8c0.6,0,0.9-0.4,0.9-1.2l0-5.3l2.3,0
				l0,5.3c0,1-0.3,1.8-0.8,2.3c-0.5,0.5-1.3,0.8-2.3,0.8C40.2,52.2,39.4,51.6,38.8,50.8z"
          />
          <path
            id="XMLID_3028_"
            style={{ fill: '#FFFFFF' }}
            d="M45.3,43.8l6.7,0v1.9l-4.4,0V47l4,0l0,1.8l-4,0l0,1.3l4.5,0l0,2l-6.7,0
				L45.3,43.8z"
          />
          <path
            id="XMLID_3026_"
            style={{ fill: '#FFFFFF' }}
            d="M55,45.8l-2.5,0l0-2l7.3,0l0,2l-2.5,0l0,6.3l-2.3,0L55,45.8z"
          />
          <path
            id="XMLID_3022_"
            style={{ fill: '#FFFFFF' }}
            d="M39,54l4.3,0c1,0,1.8,0.3,2.3,0.7c0.3,0.3,0.5,0.8,0.5,1.4v0
				c0,1-0.5,1.5-1.3,1.9c1,0.3,1.6,0.9,1.6,2v0c0,1.4-1.2,2.3-3.1,2.3l-4.3,0L39,54z M43.8,56.6c0-0.5-0.4-0.7-1-0.7l-1.5,0l0,1.5
				l1.4,0C43.4,57.3,43.8,57.1,43.8,56.6L43.8,56.6z M43,59l-1.8,0l0,1.5H43c0.7,0,1.1-0.3,1.1-0.8v0C44.1,59.2,43.7,59,43,59z"
          />
          <path
            id="XMLID_3019_"
            style={{ fill: '#FFFFFF' }}
            d="M46.8,54l3.9,0c1.3,0,2.1,0.3,2.7,0.9c0.5,0.5,0.7,1.1,0.7,1.9v0
				c0,1.3-0.7,2.1-1.7,2.6l2,2.9l-2.6,0l-1.7-2.5h-1l0,2.5l-2.3,0L46.8,54z M50.6,58c0.8,0,1.2-0.4,1.2-1v0c0-0.7-0.5-1-1.2-1
				l-1.5,0v2H50.6z"
          />
          <path
            id="XMLID_3016_"
            style={{ fill: '#FFFFFF' }}
            d="M56.8,54l2.2,0l3.5,8.4l-2.5,0l-0.6-1.5l-3.2,0l-0.6,1.5l-2.4,0L56.8,54z
				 M58.8,59l-0.9-2.3L57,59L58.8,59z"
          />
          <path
            id="XMLID_3014_"
            style={{ fill: '#FFFFFF' }}
            d="M62.8,54l2.3,0l0,8.3l-2.3,0L62.8,54z"
          />
          <path
            id="XMLID_3012_"
            style={{ fill: '#FFFFFF' }}
            d="M65.7,54l2.1,0l3.4,4.4l0-4.4l2.3,0l0,8.3l-2,0L68,57.8l0,4.6l-2.3,0L65.7,54z"
          />
          <path
            id="XMLID_3010_"
            style={{ fill: '#FFFFFF' }}
            d="M73.7,61.1l1.3-1.5c0.8,0.7,1.7,1,2.7,1c0.6,0,1-0.2,1-0.6v0
				c0-0.4-0.3-0.5-1.4-0.8c-1.8-0.4-3.1-0.9-3.1-2.6v0c0-1.5,1.2-2.7,3.2-2.7c1.4,0,2.5,0.4,3.4,1.1l-1.2,1.6
				c-0.8-0.5-1.6-0.8-2.3-0.8c-0.6,0-0.8,0.2-0.8,0.5v0c0,0.4,0.3,0.5,1.4,0.8c1.9,0.4,3.1,1,3.1,2.6v0c0,1.7-1.3,2.7-3.4,2.7
				C76.1,62.5,74.7,62,73.7,61.1z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Logo;
