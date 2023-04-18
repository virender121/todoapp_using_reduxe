import { configureStore} from '@reduxjs/toolkit';
import todoSlider from '../Reducer/todoSlider';

export default configureStore({
    reducer: {
        toDo : todoSlider
    }
})