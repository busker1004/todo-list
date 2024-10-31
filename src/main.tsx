import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers/Task.ts'
import { Provider } from 'react-redux'
import { FilterProvider } from './context/FilterProvider.tsx'

const rootReducer = combineReducers([
  todos
])

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<typeof rootReducer>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Provider>
  </StrictMode>,
)
