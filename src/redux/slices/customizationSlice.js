import { createSlice } from '@reduxjs/toolkit';

import config from 'config';

// import apiInstance from '../../utils/customAxios';

const initialState = {
  allOSList: [],

  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

const slice = createSlice({
  name: 'customizationSlice',
  initialState,
  reducers: {
    getOSList(state, action) {
      state.allOSList = action.payload;
    },

    setIsOpen(state, action) {
      state.isOpen = [action.payload];
    },

    setMenu(state, action) {
      state.opened = action.payload;
    },
    setBorderRadius(state, action) {
      state.borderRadius = action.payload;
    },
    setFontFamily(state, action) {
      state.fontFamily = action.payload;
    }
  }
});

export const { setIsOpen, setMenu, setBorderRadius, setFontFamily } = slice.actions;
export default slice.reducer;

// export function getAllOSList(handleResponse) {
//   return async (dispatch) => {
//     try {
//       const response = await apiInstance.get('v1/opticalsensors');

//       dispatch(slice.actions.getOSList(response.data.data));
//       if (handleResponse) {
//         handleResponse();
//       }
//     } catch (error) {
//       console.log('error here', error);
//       if (handleResponse) {
//         handleResponse();
//       }
//     }
//   };
// }
