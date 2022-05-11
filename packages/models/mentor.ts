import * as nevla from 'mongoose'

interface IMentor{
    name: string;
    email: string;
    avatar?: string;
    password:string;
}

const mentorSchema = new nevla.Schema<IMentor>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    password:{type: String, required: true}
});

const User = nevla.model<IMentor>('User',mentorSchema);
export default User;