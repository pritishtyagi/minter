import * as nevla from 'mongoose'

interface IStudent{
    name: string;
    email: string;
    avatar?: string;
    password:string;
}

const studSchema = new nevla.Schema<IStudent>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    password:{type: String, required: true}
});

const User = nevla.model<IStudent>('User',studSchema);
export default User;


