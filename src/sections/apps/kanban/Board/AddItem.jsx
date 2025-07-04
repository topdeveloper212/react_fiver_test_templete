import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// third-party
import { sub } from 'date-fns';
import { Chance } from 'chance';

// project imports
import SubCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

import { addItem } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// assets
import CalculatorOutlined from '@ant-design/icons/CalculatorOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';

const chance = new Chance();

// ==============================|| KANBAN BOARD - ADD ITEM ||============================== //

export default function AddItem({ columnId }) {
  const [addTaskBox, setAddTaskBox] = useState(false);

  const handleAddTaskChange = () => {
    setAddTaskBox((prev) => !prev);
  };

  const [title, setTitle] = useState('');
  const [isTitle, setIsTitle] = useState(false);

  const handleAddTask = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTask();
    }
  };

  const addTask = () => {
    if (title.length > 0) {
      const newItem = {
        id: `${chance.integer({ min: 1000, max: 9999 })}`,
        title,
        dueDate: sub(new Date(), { days: 0, hours: 1, minutes: 45 }),
        image: false,
        assign: '',
        description: '',
        priority: 'low',
        attachments: []
      };

      addItem(columnId, newItem, '0');
      openSnackbar({
        open: true,
        message: 'Task Added successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',

        alert: {
          color: 'success'
        }
      });
      handleAddTaskChange();
      setTitle('');
    } else {
      setIsTitle(true);
    }
  };

  const handleTaskTitle = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    if (newTitle.length <= 0) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  return (
    <Grid container alignItems="center" spacing={1} sx={{ mt: 2 }}>
      {addTaskBox && (
        <Grid size={12}>
          <SubCard content={false}>
            <Box sx={{ p: 2, pb: 1.5, transition: 'background-color 0.25s ease-out' }}>
              <Grid container alignItems="center" spacing={0.5}>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    placeholder="Add Task"
                    value={title}
                    onChange={handleTaskTitle}
                    sx={{
                      mb: 3,
                      '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
                      '& fieldset': { display: 'none' },
                      '& .MuiFormHelperText-root': {
                        ml: 0
                      },
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'transparent',
                        '&.Mui-focused': {
                          boxShadow: 'none'
                        }
                      }
                    }}
                    onKeyUp={handleAddTask}
                    helperText={isTitle ? 'Task title is required.' : ''}
                    error={isTitle}
                  />
                </Grid>
                <Grid>
                  <IconButton>
                    <TeamOutlined />
                  </IconButton>
                </Grid>
                <Grid>
                  <IconButton>
                    <CalculatorOutlined />
                  </IconButton>
                </Grid>
                <Grid size="grow" />
                <Grid>
                  <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                    <Tooltip title="Cancel">
                      <IconButton size="small" color="error" onClick={handleAddTaskChange}>
                        <CloseOutlined />
                      </IconButton>
                    </Tooltip>
                    <Button variant="contained" color="primary" onClick={addTask} size="small">
                      Add
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </SubCard>
        </Grid>
      )}
      {!addTaskBox && (
        <Grid size={12}>
          <Button variant="dashed" color="secondary" fullWidth onClick={handleAddTaskChange}>
            Add Task
          </Button>
        </Grid>
      )}
    </Grid>
  );
}

AddItem.propTypes = { columnId: PropTypes.string };
