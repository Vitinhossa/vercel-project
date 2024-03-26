import React, { ReactNode } from 'react';

export const CardInsight = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title?: ReactNode;
  description: ReactNode;
}) => (
  <div
    style={{
      display: `flex`,
      boxShadow: `0 0 8px rgba(0,0,0,0.25)`,
      borderRadius: `10px`,
      padding: `10px`,
      marginBottom: `10px`,
    }}
  >
    <div style={{ marginTop: `2px` }}>{icon}</div>

    <div style={{ paddingLeft: `7px` }}>
      <h4
        style={{
          fontSize: `14px`,
          color: `#34403B`,
          marginBottom: `4px`,
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: `12px`,
          color: `#6e747a`,
          marginBottom: `4px`,
        }}
      >
        {description}
      </p>
    </div>
  </div>
);
