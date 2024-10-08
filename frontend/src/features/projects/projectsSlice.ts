import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import type { projectPostProp, projectsSliceType, projectType } from '../types/types'
import axios,{AxiosResponse} from "axios";

const DBLINK = "http://localhost:8080";

// actions
export const getProjects = createAsyncThunk(
    'pojects/getProjects',
    async(data:{token:string, query?:string}, thunkapi)=>{
        try{
            const res = await axios.get<projectType[]>(`${DBLINK}/projects?q=${data.query}`, {
                headers: {
                    Authorization: `Bearer ${data.token}`
                  }
                  
            });
            console.log(res.data);
            
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)


export const addprojects = createAsyncThunk(
    'pojects/addProjects',
    async(data:projectPostProp, thunkapi)=>{
        try{
            console.log(data);
        // <projectType>
            const res:AxiosResponse<projectType> = await axios({
                method:"POST",
                url:`${DBLINK}/projects`,
                data:data.data,
                headers: {
                    Authorization: `Bearer ${data.token}`
                  }
                  
            })
            console.log(res.data);
            
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

export const updateProject = createAsyncThunk(
    'pojects/patchProject',
    async(data:{token:string, data:{},id:string}, thunkapi)=>{
        console.log(data);
        
        try{
        // <projectType>
            const res:AxiosResponse<projectType> = await axios({
                method:"PATCH",
                url:`${DBLINK}/projects/${data.id}`,
                data:data.data,
                headers: {
                    Authorization: `Bearer ${data.token}`
                  }
                  
            })
            console.log(res.data);
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

export const deleteProject = createAsyncThunk(
    'pojects/deleteProject',
    async(data:{token:string,id:string}, thunkapi)=>{
        try{
        // <projectType>
            const res:AxiosResponse<string> = await axios({
                method:"DELETE",
                url:`${DBLINK}/projects/${data.id}`,
                headers: {
                    Authorization: `Bearer ${data.token}`
                  }
                  
            })
        
            return data.id;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

const initialProjectState:projectType = {
    name:"",
    client:"",
    tracked:0,
    amount:0,
    billable:true,
    access:true,
    color:"",
    archive:false,
    starred:false,
    startTime:0,
    endTime:0,
    template:"",
    userId:"",
}
const initialState:projectsSliceType = {
    loading:false,
    error:false,
    errmsg:"",
    products:[],
    testproduct:[]
}
const projectsSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{
        updateProjects:(state, action:PayloadAction<projectType[]>)=>{
                state.testproduct = action.payload
        },
        getLocalProducts:(state)=>{
                state.testproduct = state.products
        }

    },
    extraReducers(builder) {
        builder.addCase(addprojects.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(addprojects.fulfilled,(state, action:PayloadAction<projectType>)=>{
            state.loading=false;
            state.error= false;
            state.products = [...state.products, action.payload];
            state.testproduct = [...state.testproduct, action.payload]
        })
        .addCase(addprojects.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
            state.errmsg = action.payload
        })
        .addCase(getProjects.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(getProjects.fulfilled, (state, action:PayloadAction<projectType[]>)=>{
            state.loading=false;
            state.error= false;
            state.products = action.payload;
            state.testproduct = action.payload;

        })
        .addCase(getProjects.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
            state.errmsg = action.payload
        })
        .addCase(deleteProject.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(deleteProject.fulfilled, (state, action:PayloadAction<string>)=>{
            state.loading=false;
            state.error= false;
            state.products =  state.products.filter((project)=>{
                if(project._id!==action.payload){
                    return project
                }
            })
            state.testproduct = state.products

        })
        .addCase(deleteProject.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
            state.errmsg = action.payload
        })
        .addCase(updateProject.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(updateProject.fulfilled, (state, action:PayloadAction<projectType>)=>{
            state.loading=false;
            state.error= false;
            state.products =  state.products.map((project)=>{
                if(project._id===action.payload._id){
                    return action.payload
                }else{
                    return project
                }
            })
            state.testproduct = state.products
        })
        .addCase(updateProject.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
            state.errmsg = action.payload
        })
    },
})

export const { updateProjects, getLocalProducts} = projectsSlice.actions
export default projectsSlice.reducer;