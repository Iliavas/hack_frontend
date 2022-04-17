import {createAsyncThunk} from '@reduxjs/toolkit';
import { getCompanies, getCompany } from '../../../api/companies';

export const getCompaniesReducer = createAsyncThunk(
  'companies/getCompanies',
  async () => {
    console.log(await getCompanies());
    return await getCompanies()
  }
)

export const getCompanyReducer = createAsyncThunk(
  'companies/getCompany',
  async (id: string) => {
    return await getCompany(id);
  }
)