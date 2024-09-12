import { Flex } from "antd"
import { LoginFormDemo } from "@/app/components/loginComp"

export default function Login() {
    return(
        <Flex justify="center" align="center" style={{ backgroundColor : "black" , height : "100vh" , paddingTop : "20px"}}>
            <LoginFormDemo />
        </Flex>
    )
}