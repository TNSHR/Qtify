import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ handleChangeIndex }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleChangeIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: '#34c94b' } }}
        >
          <Tab label="All" {...a11yProps(0)} sx={{ color: '#34c94b' }} />
          <Tab label="Rock" {...a11yProps(1)} sx={{ color: '#34c94b' }} />
          <Tab label="Pop" {...a11yProps(2)} sx={{ color: '#34c94b' }} />
          <Tab label="Jazz" {...a11yProps(3)} sx={{ color: '#34c94b' }} />
          <Tab label="Blues" {...a11yProps(4)} sx={{ color: '#34c94b' }} />
        </Tabs>
      </Box>
    </Box>
  );
}

BasicTabs.propTypes = {
  handleChangeIndex: PropTypes.func.isRequired,
};
