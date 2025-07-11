import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3, height: { xs: '100%', sm: 'auto' }, overflowX: { xs: 'scroll', sm: 'auto' } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

// ==============================|| TABS - VERTICAL ||============================== //

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const verticalTabCodeString = `// VerticalTabs.tsx
<Tabs
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ borderRight: 1, borderColor: 'divider' }}
>
  <Tab label="Tab 1" {...a11yProps(0)} />
  <Tab label="Tab 2" {...a11yProps(1)} />
  <Tab label="Tab 3" {...a11yProps(2)} />
  <Tab label="Tab 4" {...a11yProps(3)} />
  <Tab label="Tab 5" {...a11yProps(4)} />
  <Tab label="Tab 6" {...a11yProps(5)} />
  <Tab label="Tab 7" {...a11yProps(6)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor
    augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper,
    posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et
    scelerisque erat fringilla quis.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat
    aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non.
    Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum.
    Nullam mollis sagittis dolor.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium
    quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et,
    eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam
    hendrerit. Ut vitae tellus enim.
  </Typography>
</TabPanel>
<TabPanel value={value} index={4}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={5}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={6}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>`;

  return (
    <MainCard codeString={verticalTabCodeString}>
      <Stack direction="row" sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 224 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tab 1" {...a11yProps(0)} />
          <Tab label="Tab 2" {...a11yProps(1)} />
          <Tab label="Tab 3" {...a11yProps(2)} />
          <Tab label="Tab 4" {...a11yProps(3)} />
          <Tab label="Tab 5" {...a11yProps(4)} />
          <Tab label="Tab 6" {...a11yProps(5)} />
          <Tab label="Tab 7" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor
            augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper,
            posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et
            scelerisque erat fringilla quis.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6">
            Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
            consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
            tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
            sollicitudin leo elementum.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">
            Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat
            aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non.
            Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum.
            Nullam mollis sagittis dolor.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h6">
            Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium
            quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et,
            eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam
            hendrerit. Ut vitae tellus enim.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography variant="h6">
            Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
            Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
            nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography variant="h6">
            Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
            consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
            tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
            sollicitudin leo elementum.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Typography variant="h6">
            Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
            Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
            nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
          </Typography>
        </TabPanel>
      </Stack>
    </MainCard>
  );
}

TabPanel.propTypes = { children: PropTypes.node, value: PropTypes.number, index: PropTypes.number, other: PropTypes.any };
