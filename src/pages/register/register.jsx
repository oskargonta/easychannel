import { useEffect, useState } from "react"
import { Button, Img, Line, List, Text } from "components";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const[login,setname] = useState()
    const[surname,setsurname] = useState()
    const[phone,setphone] = useState()

    const handleNameChange =(e) =>{
        setname(e.target.value)
    }
    const handleSurnameChange = (e) => {
          setsurname(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setphone(e.target.value)
    }

    useEffect(()=>{
        console.log("dupa")
    },[])
    return <div>
    <>
    <div>
          <div className="flex flex-row gap-[29px] items-center justify-start w-auto">
            <Img
              className="h-5 w-[145px]"
              src="images/img_frame80.svg"
              alt="frameEighty"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-[15px] text-blue-50 w-auto"
                size="txtNotoSansSemiBold15"
              >
                Home
              </Text>
              <div className="bg-amber-700 h-0.5 rounded-[1px] w-full"></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto"></div>
          </div>
    </div>
        <b>Rejestracja</b><br/>
        
        <input type="text" value={login} onChange={handleNameChange} placeholder="Imie"/><br/>
        <input type="text" value={surname} onChange={handleSurnameChange} placeholder="Nazwisko"/><br/>
        <input type="text" value={phone} onChange={handlePhoneChange} placeholder="Nr Telefonu"/>
        </>
        </div>
}
export default Register
