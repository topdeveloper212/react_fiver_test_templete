import * as React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputBase from '@mui/material/InputBase';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import SettingFilled from '@ant-design/icons/SettingFilled';

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
    fontSize: 13
  },
  [`& .${autocompleteClasses.listbox}`]: {
    background: theme.palette.background.paper,
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      borderBottom: `1px solid  ${theme.palette.divider}`,
      '&[aria-selected="true"]': {
        background: 'transparent'
      },
      '&[data-focus="true"], &[data-focus="true"][aria-selected="true"]': {
        background: theme.palette.action.hover
      }
    }
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative'
  }
}));

function PopperComponent({ ...other }) {
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: theme.customShadows.z1,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.text.primary,
  background: theme.palette.background.paper
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: '100%',
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.divider,
  '& input': {
    borderRadius: 4,
    background: theme.palette.background.paper,
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    fontSize: 14,
    '&:focus-visible': {
      boxShadow: theme.customShadows.primary,
      borderColor: theme.palette.primary.main
    }
  }
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 13,
  width: '100%',
  textAlign: 'left',
  marginBottom: 8,
  color: theme.palette.text.primary,
  fontWeight: 600,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:focus-visible': {
    borderRadius: 2,
    outline: `2px solid ${theme.palette.secondary.dark}`,
    outlineOffset: 2
  },
  '& span': {
    width: '100%'
  },
  '& svg': {
    width: 16,
    height: 16
  }
}));

export default function GitHubLabel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([labels[1], labels[11]]);
  const [pendingValue, setPendingValue] = React.useState([]);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  const gitAutocompleteCodeString = `// GitHubAutocomplete.tsx
<Box sx={{ width: 221, fontSize: 13 }}>
  <Button
    disableRipple
    aria-describedby={id}
    onClick={handleClick}
    sx={{ justifyContent: 'space-between', '& span': { width: 'auto' } }}
  >
    <span>Labels</span>
    <SettingFilled />
  </Button>
  {value.map((label, index) => (
    <Box
      key={index}
      sx={{
        mt: '3px',
        height: 20,
        padding: '.15em 4px',
        fontWeight: 600,
        lineHeight: '15px',
        borderRadius: '2px',
        bgcolor: label.color,
        color: theme.palette.getContrastText(label.color)
      }}
    >
      {label.name}
    </Box>
  ))}
</Box>
<StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
  <ClickAwayListener onClickAway={handleClose}>
    <div>
      <Box
        sx={{
          borderBottom: '1px solid {theme.palette.mode === ThemeMode.DARK ? '#30363d' : '#eaecef'}',
          padding: '8px 10px',
          fontWeight: 600
        }}
      >
        Apply labels to this pull request
      </Box>
      <Autocomplete
        open
        multiple
        onClose={(event: React.ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
          if (reason === 'escape') {
            handleClose();
          }
        }}
        value={pendingValue}
        onChange={(event, newValue, reason) => {
          if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Backspace' && reason === 'removeOption') {
            return;
          }
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        PopperComponent={PopperComponent}
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={({ key, ...props }, option, { selected }) => (
          <li key={key} {...props}>
            <Box
              component={CheckOutlined}
              sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', mt: 0.25, visibility: selected ? 'visible' : 'hidden' }}
            />
            <Box sx={{ width: 14, height: 14, flexShrink: 0, borderRadius: '3px', mr: 1, mt: '2px', bgcolor: option.color }} />
            <Box sx={{ flexGrow: 1, '& span': { color: 'text.secondary' } }}>
              {option.name}
              <br />
              <span>{option.description}</span>
            </Box>
            <Box
              component={CloseOutlined}
              sx={{ opacity: 0.6, width: 18, height: 18, mt: 0.25 ,visibility: selected ? 'visible' : 'hidden'}}
            />
          </li>
        )}
        options={[...labels].sort((a, b) => {
          // Display the selected labels first.
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels" />
        )}
      />
    </div>
  </ClickAwayListener>
</StyledPopper>`;

  return (
    <MainCard title="GitHub's Picker" codeString={gitAutocompleteCodeString}>
      <Box sx={{ width: 221, fontSize: 13 }}>
        <Button
          disableRipple
          aria-describedby={id}
          onClick={handleClick}
          sx={{ justifyContent: 'space-between', '& span': { width: 'auto' } }}
        >
          <span>Labels</span>
          <SettingFilled />
        </Button>
        {value.map((label, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              mt: '3px',
              height: 20,
              padding: '.15em 4px',
              fontWeight: 600,
              lineHeight: '15px',
              borderRadius: '2px',
              bgcolor: label.color,
              color: theme.palette.getContrastText(label.color)
            })}
          >
            {label.name}
          </Box>
        ))}
      </Box>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={(theme) => ({
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.mode === ThemeMode.DARK ? '#30363d' : '#eaecef',
                padding: '8px 10px',
                fontWeight: 600
              })}
            >
              Apply labels to this pull request
            </Box>
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === 'escape') {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (event.type === 'keydown' && event.key === 'Backspace' && reason === 'removeOption') {
                  return;
                }
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={({ key, ...props }, option, { selected }) => (
                <li key={key} {...props}>
                  <Box
                    component={CheckOutlined}
                    sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', mt: 0.25, visibility: selected ? 'visible' : 'hidden' }}
                  />
                  <Box sx={{ width: 14, height: 14, flexShrink: 0, borderRadius: '3px', mr: 1, mt: '2px', bgcolor: option.color }} />
                  <Box sx={{ flexGrow: 1, '& span': { color: 'text.secondary' } }}>
                    {option.name}
                    <br />
                    <span>{option.description}</span>
                  </Box>
                  <Box
                    component={CloseOutlined}
                    sx={{ opacity: 0.6, width: 18, height: 18, mt: 0.25, visibility: selected ? 'visible' : 'hidden' }}
                  />
                </li>
              )}
              options={[...labels].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels" />
              )}
              slots={{ popper: PopperComponent }}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </MainCard>
  );
}

// From https://github.com/abdonrd/github-labels
const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers'
  },
  {
    name: 'help wanted',
    color: '#008672',
    description: 'Extra attention is needed'
  },
  {
    name: 'priority: critical',
    color: '#b60205',
    description: ''
  },
  {
    name: 'priority: high',
    color: '#d93f0b',
    description: ''
  },
  {
    name: 'priority: low',
    color: '#0e8a16',
    description: ''
  },
  {
    name: 'priority: medium',
    color: '#fbca04',
    description: ''
  },
  {
    name: "status: can't reproduce",
    color: '#fec1c1',
    description: ''
  },
  {
    name: 'status: confirmed',
    color: '#215cea',
    description: ''
  },
  {
    name: 'status: duplicate',
    color: '#cfd3d7',
    description: 'This issue or pull request already exists'
  },
  {
    name: 'status: needs information',
    color: '#fef2c0',
    description: ''
  },
  {
    name: 'status: wont do/fix',
    color: '#eeeeee',
    description: 'This will not be worked on'
  },
  {
    name: 'type: bug',
    color: '#d73a4a',
    description: "Something isn't working"
  },
  {
    name: 'type: discussion',
    color: '#d4c5f9',
    description: ''
  },
  {
    name: 'type: documentation',
    color: '#006b75',
    description: ''
  },
  {
    name: 'type: enhancement',
    color: '#84b6eb',
    description: ''
  },
  {
    name: 'type: epic',
    color: '#3e4b9e',
    description: 'A theme of work that contain sub-tasks'
  },
  {
    name: 'type: feature request',
    color: '#fbca04',
    description: 'New feature or request'
  },
  {
    name: 'type: question',
    color: '#d876e3',
    description: 'Further information is requested'
  }
];
