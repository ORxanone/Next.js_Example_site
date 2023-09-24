
import TextField from '@mui/material/TextField';
function Register() {
  return (
    <div className='flex flex-col items-center gap-[20px] w-full'>
      <TextField
        id="outlined-password-input"
        label="Ad"
        type="text"
        autoComplete="current-password"
        size='small'
        required
        className='w-full'
        

      />
      <TextField
        id="outlined-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        size='small'
        required
        className='w-full'
       
      />
      <TextField
        id="outlined-password-input"
        label="Şifrə"
        type="password"
        autoComplete="current-password"
        size='small'
        required
        className='w-full'

      />
      <button className='outline-none bg-[#FF6617] rounded-[5px] w-full h-[40px] flex items-center justify-center p-[5px] text-white'>
        Tamamla
      </button>
    </div>
  );
}
export default Register