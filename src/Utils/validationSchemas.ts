import * as yup from 'yup' 

export interface Info{
    firstName:string;
    lastName:string;
    userName:string;
    email:string;
    age:number;
    password:string;
    gender:string;
} 
 export const RegisterSchma = yup.object({
    firstName:yup.string().required('provide your First Name'),
    lastName:yup.string().required('provide your Last Name'),
    userName:yup.string().required('provide your user Name'),
    email:yup.string().required('provide your email'),
    age:yup.number().required('provide your age'),
    password:yup.string().required('provide your password'),
    gender:yup.string().required('provide your gender status'),
})
export const LoginSchema = yup.object({
    email:yup.string().email().required('provide your email'),
    password:yup.string().required('provide your password')
})