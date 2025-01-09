// components/Background.js
import { useEffect, useState } from 'react';

const Background = ({ config }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const gradientColors = config.colors.filter(c => c.enabled).map(c => c.color).join(', ');

    const backgroundStyle = {
      background: `linear-gradient(135deg, ${gradientColors})`,
      backgroundColor: config.backgroundColor,
      backgroundAlpha: config.backgroundAlpha,
      filter: `brightness(${config.colorBrightness}) saturate(${config.colorSaturation})`,
      height: '100vh',
      width: '100%',
      opacity: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    };

    setStyle(backgroundStyle);
  }, [config]);

  return <div style={style}></div>;
};

export default Background;
